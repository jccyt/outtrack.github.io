/* OutTrack Sync — Datenmodell v4, Snapshot, Merge und Ende-zu-Ende-Verschlüsselung.
 *
 * 0 Abhängigkeiten: reines JS, WebCrypto (Browser-API) für AES-GCM.
 *
 * Grundsatz: Ein Snapshot ist der komplette syncbare Zustand. Beide Seiten
 * mergen den Snapshot des anderen in ihre lokale DB. Der Merge ist idempotent
 * (Union + Last-Write-Wins), deshalb kann ein Snapshot beliebig oft laufen.
 *
 * Regeln:
 *   - Check-ins (h.days)     : Vereinigungsmenge  (ein Tag ist angehakt oder nicht)
 *   - Habits, Journal, Logs  : Last-Write-Wins pro id, Tombstones für Löschungen
 *   - Eingefrorene Tage      : Vereinigungsmenge
 *   - Tages-Quest            : Last-Write-Wins
 *   - Theme, Sprache, laufender Fokusblock: GERÄTELOKAL (werden nie synchronisiert)
 */
(function () {
  "use strict";
  const SYNC_V = 1;          // Version des Snapshot-Formats
  const DB_V = 4;            // Version des Datenmodells
  const TOMBSTONE_DAYS = 90; // Wie lange Lösch-Marker erhalten bleiben
  const now = () => Date.now();
  const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

  /* ------------------------------------------------------------------ IDs */
  const rid = (rec) => {
    if (!rec.id) rec.id = uid();
    return rec.id;
  };
  // Zeitstempel: vorhanden nutzen, sonst aus dem Datum ableiten, sonst jetzt
  const stampOf = (rec) => {
    if (typeof rec.updatedAt === "number" && rec.updatedAt > 0) return rec.updatedAt;
    if (rec.date) { const t = Date.parse(rec.date); if (t) return t; }
    return now();
  };
  const touch = (rec) => { rec.updatedAt = now(); return rec; };

  /* ------------------------------------------------------- Migration v3→v4 */
  function migrate(db) {
    if (!db || typeof db !== "object") return db;
    if (db.v >= DB_V) return db;
    // Alte Datensätze bekommen IDs und Zeitstempel, damit sie syncbar sind.
    (db.habits || []).forEach((h) => {
      rid(h);
      h.updatedAt = stampOf(h);
      h.days = h.days || {};
    });
    (db.journal || []).forEach((e) => { rid(e); e.updatedAt = stampOf(e); });
    (db.redirects || []).forEach((r) => { rid(r); r.updatedAt = stampOf(r); });
    (db.focusLog || []).forEach((r) => { rid(r); r.updatedAt = stampOf(r); });
    if (db.quest && typeof db.quest === "object") db.quest.updatedAt = stampOf(db.quest);
    db.frozenDays = db.frozenDays || {};
    db.v = DB_V;
    return db;
  }

  /* ------------------------------------------------------------- Snapshot */
  // Welche Felder gehören in den Sync? Gerätelokale Felder bleiben draußen.
  const habitOut = (h) => ({
    id: rid(h),
    label: h.label, area: h.area, goal: h.goal, count: h.count,
    days: Object.assign({}, h.days || {}),
    updatedAt: stampOf(h),
    deleted: h.deleted || 0,
  });
  const journalOut = (e) => ({
    id: rid(e), date: e.date, title: e.title || "", text: e.text || "",
    updatedAt: stampOf(e), deleted: e.deleted || 0,
  });
  const logOut = (r) => ({
    id: rid(r), date: r.date, action: r.action || "", mins: r.mins || 0, text: r.text || "",
    updatedAt: stampOf(r), deleted: r.deleted || 0,
  });

  function snapshot(db) {
    return {
      v: SYNC_V,
      at: now(),
      habits: (db.habits || []).map(habitOut),
      journal: (db.journal || []).map(journalOut),
      redirects: (db.redirects || []).map(logOut),
      focusLog: (db.focusLog || []).map(logOut),
      frozenDays: Object.keys(db.frozenDays || {}),
      quest: db.quest && db.quest.text ? { text: db.quest.text, updatedAt: stampOf(db.quest) } : null,
    };
  }

  /* ------------------------------------------------------------- Merge */
  // Vereinigungsmenge fuer Tages-Check-ins: ein Tag ist halt angehakt oder nicht.
  function mergeDays(local, remote) {
    let added = 0;
    Object.keys(remote || {}).forEach((day) => {
      if (!local[day]) { local[day] = remote[day]; added++; }
    });
    return added;
  }

  // Last-Write-Wins pro id. Remote gewinnt nur, wenn er neuer ist.
  function mergeList(local, remote, make) {
    const byId = new Map();
    local.forEach((r) => byId.set(r.id, r));
    let applied = 0, conflicts = 0;
    (remote || []).forEach((r) => {
      const cur = byId.get(r.id);
      if (!cur) {
        byId.set(r.id, make(r));
        applied++;
        return;
      }
      const curT = stampOf(cur), remT = stampOf(r);
      if (remT > curT) {
        // Konflikt: beide Seiten wurden bearbeitet -> der neuere gewinnt
        if (curT > 0 && Math.abs(remT - curT) < 1000) conflicts++;
        byId.set(r.id, make(r));
        applied++;
      }
    });
    // Tombstones aelter als 90 Tage verwerfen
    const cut = now() - TOMBSTONE_DAYS * 86400000;
    const kept = [];
    byId.forEach((r) => {
      if (r.deleted && r.deleted < cut) return;
      kept.push(r);
    });
    return { list: kept, applied, conflicts };
  }

  /**
   * Merge eines Remote-Snapshots in die lokale DB.
   * @returns {{db:Object, applied:number, conflicts:number, changed:boolean}}
   */
  function merge(db, snap) {
    if (!snap || snap.v > SYNC_V) return { db, applied: 0, conflicts: 0, changed: false };
    const before = JSON.stringify(snapshot(db));
    let applied = 0, conflicts = 0;

    // Habits: Felder nach Last-Write-Wins, aber die Check-in-Tage IMMER vereinigen
    // (sonst wuerde ein ausgetauschter Habit die lokalen Tage vernichten)
    const localHabits = new Map((db.habits || []).map((h) => [h.id, h]));
    const remoteHabits = new Map((snap.habits || []).map((h) => [h.id, h]));
    const ids = new Set([...localHabits.keys(), ...remoteHabits.keys()]);
    const mergedHabits = [];
    ids.forEach((id) => {
      const loc = localHabits.get(id), rem = remoteHabits.get(id);
      if (!rem) { mergedHabits.push(loc); return; }
      if (!loc) {
        mergedHabits.push({
          id: rem.id, label: rem.label, area: rem.area, goal: rem.goal, count: rem.count,
          days: Object.assign({}, rem.days || {}), updatedAt: rem.updatedAt, deleted: rem.deleted || 0,
        });
        applied++;
        return;
      }
      const remNewer = (rem.updatedAt || 0) > (loc.updatedAt || 0);
      if (remNewer && (loc.updatedAt || 0) > 0 && Math.abs((rem.updatedAt || 0) - (loc.updatedAt || 0)) < 1000) conflicts++;
      const newer = remNewer ? rem : loc, older = remNewer ? loc : rem;
      const days = Object.assign({}, older.days || {}, newer.days || {});
      const deleted = (newer.deleted || 0) ? (newer.deleted || 0) : 0;
      mergedHabits.push({
        id: id,
        label: newer.label, area: newer.area, goal: newer.goal, count: newer.count,
        days: days,
        updatedAt: Math.max(loc.updatedAt || 0, rem.updatedAt || 0),
        deleted: deleted,
      });
      if (remNewer) applied++;
      const added = Object.keys(rem.days || {}).filter((d) => !(loc.days || {})[d]).length;
      if (added) applied++;
    });
    // Alte Tombstones (> 90 Tage) entsorgen
    const cutH = now() - TOMBSTONE_DAYS * 86400000;
    db.habits = mergedHabits.filter((h) => !(h.deleted && h.deleted < cutH));

    // Journal / Logs
    const jm = mergeList(db.journal || [], snap.journal, (r) => ({
      id: r.id, date: r.date, title: r.title, text: r.text, updatedAt: r.updatedAt, deleted: r.deleted || 0,
    }));
    db.journal = jm.list; applied += jm.applied; conflicts += jm.conflicts;

    const rm = mergeList(db.redirects || [], snap.redirects, (r) => ({
      id: r.id, date: r.date, action: r.action, mins: r.mins, text: r.text, updatedAt: r.updatedAt, deleted: r.deleted || 0,
    }));
    db.redirects = rm.list; applied += rm.applied;

    const fm = mergeList(db.focusLog || [], snap.focusLog, (r) => ({
      id: r.id, date: r.date, action: r.action, mins: r.mins, text: r.text, updatedAt: r.updatedAt, deleted: r.deleted || 0,
    }));
    db.focusLog = fm.list; applied += fm.applied;

    // Eingefrorene Tage: Vereinigungsmenge
    db.frozenDays = db.frozenDays || {};
    (snap.frozenDays || []).forEach((day) => { if (!db.frozenDays[day]) { db.frozenDays[day] = 1; applied++; } });

    // Tages-Quest: Last-Write-Wins
    if (snap.quest && snap.quest.text) {
      const cur = db.quest || { date: "", text: "" };
      if (!cur.text || (snap.quest.updatedAt || 0) > (cur.updatedAt || 0)) {
        db.quest = { date: cur.date || snap.quest.date || "", text: snap.quest.text, updatedAt: snap.quest.updatedAt || now() };
        applied++;
      }
    }

    // Geloeschte Records (Tombstones) aus der lokalen DB spiegeln
    const localAll = new Map();
    (db.habits || []).forEach((h) => localAll.set("h:" + h.id, h));
    (snap.habits || []).forEach((r) => {
      if (!r.deleted) return;
      const loc = localAll.get("h:" + r.id);
      if (loc && !loc.deleted && (r.updatedAt || 0) > (loc.updatedAt || 0)) { loc.deleted = r.updatedAt; loc.updatedAt = r.updatedAt; applied++; }
    });

    const after = JSON.stringify(snapshot(db));
    return { db, applied, conflicts, changed: before !== after };
  }

  /* --------------------------------------------------------- Verschluesselung */
  // Base64url ohne Abhaengigkeiten
  function b64u(bytes) {
    let s = "";
    for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function unb64u(str) {
    const s = str.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(s + "=".repeat((4 - (s.length % 4)) % 4));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  // Token: 128 Bit Zufall, base64url (ca. 22 Zeichen)
  function makeToken() {
    const b = new Uint8Array(16);
    (window.crypto || window.msCrypto).getRandomValues(b);
    return b64u(b);
  }
  // Aus dem Token den AES-Schluessel ableiten (er ist das Passwort des QR-Codes)
  async function deriveKey(token) {
    const raw = unb64u(token);
    return (window.crypto || window.msCrypto).subtle.importKey("raw", raw, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
  }
  // Snapshot -> Chiffre (base64url: iv || ciphertext)
  async function encrypt(key, obj) {
    const iv = new Uint8Array(12);
    (window.crypto || window.msCrypto).getRandomValues(iv);
    const data = new TextEncoder().encode(JSON.stringify(obj));
    const ct = new Uint8Array(await (window.crypto || window.msCrypto).subtle.encrypt({ name: "AES-GCM", iv }, key, data));
    const out = new Uint8Array(iv.length + ct.length);
    out.set(iv, 0); out.set(ct, iv.length);
    return b64u(out);
  }
  async function decrypt(key, blob) {
    const raw = unb64u(blob);
    const iv = raw.slice(0, 12);
    const ct = raw.slice(12);
    const data = await (window.crypto || window.msCrypto).subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
    return JSON.parse(new TextDecoder().decode(data));
  }

  window.OTSync = {
    V: SYNC_V, DB_V: DB_V,
    migrate, snapshot, merge,
    makeToken, deriveKey, encrypt, decrypt, b64u, unb64u,
    uid, touch, stampOf,
  };
})();
