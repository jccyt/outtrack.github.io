/* ---------------------------------------------------------------------------
 * OutTrack Sync — verbindet zwei Geräte direkt (ohne Cloud, ohne Konto).
 *
 * Rollen:
 *   HUB   (Computer, Tauri): startet einen kleinen HTTP-Server im Rust-Teil,
 *          zeigt den QR-Code. Ein angeschlossenes Gerät pusht seinen Stand;
 *          der Hub merged ihn sofort.
 *   CLIENT (Handy, Capacitor): scannt den QR, holt den Snapshot, merged ihn,
 *          pusht seinen eigenen Snapshot und pollt alle 5 Minuten.
 *
 * Beide Seiten tauschen ausschliesslich AES-GCM-verschluesselte Snapshots aus.
 * Schluessel ist das 128-Bit-Token aus dem QR.
 * ------------------------------------------------------------------------- */
(function () {
  "use strict";
  const SYNC_KEY = "outtrack_sync";
  const POLL_MS = 5 * 60 * 1000;      // Poll-Intervall des Clients
  const HUB_PUSH_MS = 3000;            // Hub: Snapshot nach aenderungen senden

  // Faehigkeiten kommen vom Wrapper (nicht von der Web-App selbst)
  const IS_HUB = !!window.__OT_SYNC_HOST__;
  const IS_CLIENT = !!window.__OT_SYNC_CLIENT__;

  let S = null;            // Sync-Logik (sync.js)
  let QR = null;           // QR-Encoder (qr.js)
  let getDb = () => ({});  // liefert die aktuelle lokale Datenbank
  let setDb = (v) => {};   // setzt die lokale Datenbank (nach einem Merge)
  let render = null;       // Neuzeichnen nach einem Merge
  let toast = null;        // Toast anzeigen
  let t = null;            // i18n

  const st = {
    token: "", key: null, url: "", peer: "", last: 0,
    hub: false, client: false, busy: false, timer: null, hubTimer: null,
  };

  /* ---------------------------------------------------------- Hilfsmittel */
  const invoke = (cmd, args) => {
    const internals = window.__TAURI_INTERNALS__;
    if (!internals) return Promise.reject(new Error("kein Tauri"));
    return internals.invoke(cmd, args);
  };
  const el = (id) => document.getElementById(id);
  // Diagnose-Meldung an den Rust-Teil (erscheint im Terminal)
  // Antwort des Servers kann ein Objekt {url, port} oder ein reiner String sein.
  // (Ein Bug: der Server lieferte einen String, der Code erwartete ein Objekt -
  //  dadurch blieb die Adresse leer und es wurde kein QR gezeichnet.)
  const urlFromInfo = (info) => {
    if (typeof info === "string") return info;
    if (info && typeof info.url === "string") return info.url;
    return "";
  };
  const note = (msg) => {
    try {
      const i = window.__TAURI_INTERNALS__;
      if (i && i.invoke) i.invoke("sync_note", { text: String(msg) });
    } catch { /* egal */ }
  };
  const nowTime = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const store = () => {
    try { localStorage.setItem(SYNC_KEY, JSON.stringify({ url: st.url, token: st.token, peer: st.peer, last: st.last })); } catch { /* egal */ }
  };
  const loadStore = () => {
    try { return JSON.parse(localStorage.getItem(SYNC_KEY) || "null"); } catch { return null; }
  };
  // Das Token bleibt ueber Neustarts erhalten, sonst bricht die Kopplung nach
  // jedem App-Neustart. "Neues QR" setzt es zurueck.
  const TOKEN_KEY = "outtrack_sync_token";
  const loadToken = () => { try { return localStorage.getItem(TOKEN_KEY) || ""; } catch { return ""; } };
  const saveToken = (tok) => {
    try { if (tok) localStorage.setItem(TOKEN_KEY, tok); else localStorage.removeItem(TOKEN_KEY); } catch { /* egal */ }
  };

  /* -------------------------------------------------------------- Oberflaeche */
  function paint() {
    const card = el("sync-card");
    if (!card) return;
    card.hidden = !(st.hub || st.client);
    const host = el("sync-host"), client = el("sync-client");
    if (host) host.hidden = !st.hub;
    if (client) client.hidden = !st.client;

    if (st.hub) {
      const q = el("sync-qr");
      if (q && st.url && QR) {
        try {
          q.innerHTML = QR.svg(st.url, 3, "#000000", "#ffffff");
        } catch (e) {
          note("QR-FEHLER: " + (e && e.message ? e.message : String(e)));
        }
      }
      const u = el("sync-url");
      if (u) u.value = st.url || "";
      const s = el("sync-status");
      if (s) {
        s.textContent = st.peer
          ? t("sync_connected", { name: st.peer }) + " · " + t("sync_last", { time: st.last ? nowTime() : "–" })
          : t("sync_waiting");
        s.classList.toggle("ok", !!st.peer);
      }
    }
    if (st.client) {
      const s = el("sync-status2");
      if (s) {
        s.textContent = st.url
          ? t("sync_connected", { name: st.peer || "–" }) + (st.last ? " · " + t("sync_last", { time: nowTime() }) : "")
          : t("sync_waiting");
        s.classList.toggle("ok", !!st.url);
      }
      const d = el("sync-disconnect");
      if (d) d.hidden = !st.url;
    }
  }

  /* ------------------------------------------------------------------ HUB */
  async function hubStart() {
    st.token = loadToken() || S.makeToken();
    saveToken(st.token);
    st.key = await S.deriveKey(st.token);
    const blob = await S.encrypt(st.key, S.snapshot(getDb()));
    const info = await invoke("sync_start", { token: st.token, blob: blob, name: deviceName() });
    const httpUrl = urlFromInfo(info);
    st.port = info && typeof info === "object" ? info.port : 0;
    // Der QR enthaelt einen Deep-Link: die Handykamera oeffnet damit direkt die App
    st.httpUrl = httpUrl;
    try {
      const u = new URL(httpUrl);
      st.url = deepLink(u.hostname, u.port || "45123", st.token);
    } catch {
      st.url = httpUrl;
    }
    paint();
    // Snapshot nach jeder Aenderung veröffentlichen
    if (st.hubTimer) clearInterval(st.hubTimer);
    st.hubTimer = setInterval(hubPublish, HUB_PUSH_MS);
    return st.url;
  }
  async function hubPublish() {
    if (!st.key || !st.url || st.busy) return;
    try {
      const blob = await S.encrypt(st.key, S.snapshot(getDb()));
      await invoke("sync_publish", { token: st.token, blob: blob });
    } catch { /* Server noch nicht bereit */ }
  }
  // Vom Rust-Server gemeldeter Push eines Clients
  async function hubReceive(blob) {
    if (!st.key || !blob) return;
    try {
      const snap = await S.decrypt(st.key, blob);
      const res = S.merge(getDb(), snap);
      if (res.changed) {
        setDb(res.db);
        render();
        if (res.conflicts) toast(t("sync_conflicts", { n: res.conflicts }));
      }
      st.peer = snap.device || st.peer;
      st.last = Date.now();
      store();
      paint();
    } catch { /* Chiffre passt nicht (fremdes Token) */ }
  }

  /* ---------------------------------------------------------------- CLIENT */
  // Nur private Adressen zulassen: die App darf ausschliesslich mit dem
  // Sync-Server im eigenen WLAN sprechen (kein Traffic nach aussen).
  function isPrivateHost(host) {
    const h = String(host || "").toLowerCase();
    if (h === "localhost" || h === "127.0.0.1" || h === "[::1]") return true;
    const m = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
    if (!m) return false;
    const a = +m[1], b = +m[2];
    if (a === 192 && b === 168) return true;                 // 192.168.0.0/16
    if (a === 10) return true;                                // 10.0.0.0/8
    if (a === 172 && b >= 16 && b <= 31) return true;         // 172.16.0.0/12
    return false;
  }
  // Zwei Formen werden akzeptiert:
  //   outtrack://sync?h=<ip>&p=<port>&t=<token>   (Deep-Link: mit der Handykamera scannbar)
  //   http://<ip>:<port>/s/<token>                  (direkte Server-Adresse)
  function parseUrl(url) {
    const raw = String(url || "").trim();
    const deep = raw.match(/^outtrack:\/\/sync\?([^#]+)$/i);
    if (deep) {
      const q = new URLSearchParams(deep[1]);
      const host = q.get("h") || "";
      const port = q.get("p") || "";
      const token = q.get("t") || "";
      if (!host || !port || !token) throw new Error("Unvollstaendige Sync-Adresse");
      if (!isPrivateHost(host)) throw new Error("Nur lokale Adressen erlaubt");
      return { base: "http://" + host + ":" + port, token: token, host: host, port: port };
    }
    const m = raw.match(/\/s\/([A-Za-z0-9_-]+)\s*$/);
    if (!m) throw new Error("Keine Sync-Adresse");
    const base = raw.replace(/\/s\/[A-Za-z0-9_-]+\s*$/, "");
    const host = base.replace(/^https?:\/\//, "").split(/[\/:]/)[0];
    if (!isPrivateHost(host)) throw new Error("Nur lokale Adressen erlaubt");
    return { base, token: m[1], host: host, port: (base.match(/:(\d+)$/) || [])[1] || "" };
  }
  // Deep-Link fuer den QR-Code: die Handykamera oeffnet damit direkt die App
  function deepLink(host, port, token) {
    return "outtrack://sync?h=" + encodeURIComponent(host) + "&p=" + encodeURIComponent(port) + "&t=" + encodeURIComponent(token);
  }
  async function clientConnect(url) {
    const { base, token } = parseUrl(url);
    const key = await S.deriveKey(token);
    // 1) Hallo
    const hello = await fetch(base + "/s/" + token + "/hello").then((r) => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status))));
    // 2) Snapshot des Hubs holen und mergen
    const blob = await fetch(base + "/s/" + token + "/sync").then((r) => (r.ok ? r.text() : Promise.reject(new Error("HTTP " + r.status))));
    const snap = await S.decrypt(key, blob);
    const res = S.merge(getDb(), snap);
    if (res.changed) { setDb(res.db); render(); }
    // 3) Eigenen Stand zurueckschicken
    st.token = token; st.key = key; st.url = base + "/s/" + token; st.peer = hello.name || "";
    const mine = await S.encrypt(key, S.snapshot(getDb()));
    await fetch(st.url, { method: "POST", body: mine, headers: { "Content-Type": "application/octet-stream" } });
    st.last = Date.now();
    store();
    paint();
    toast(t("sync_ok"));
    startPolling();
  }
  async function clientPoll() {
    if (!st.url || !st.key || st.busy || document.hidden) return;
    st.busy = true;
    try {
      const blob = await fetch(st.url).then((r) => (r.ok ? r.text() : Promise.reject(new Error("HTTP " + r.status))));
      if (!blob) return;
      const snap = await S.decrypt(st.key, blob);
      const res = S.merge(getDb(), snap);
      if (res.changed) {
        setDb(res.db);
        render();
        if (res.conflicts) toast(t("sync_conflicts", { n: res.conflicts }));
      }
      const mine = await S.encrypt(st.key, S.snapshot(getDb()));
      await fetch(st.url, { method: "POST", body: mine, headers: { "Content-Type": "application/octet-stream" } });
      st.last = Date.now();
      store();
      paint();
    } catch { /* Hub offline */ } finally { st.busy = false; }
  }
  function startPolling() {
    if (st.timer) clearInterval(st.timer);
    st.timer = setInterval(clientPoll, POLL_MS);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) clientPoll(); });
  }
  /* Scanner-Weg 1: Browser-API (BarcodeDetector) -Android/Chrome, 0 MB */
  async function scanBrowser() {
    if (!("BarcodeDetector" in window) || !navigator.mediaDevices) return null;
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    } catch { return null; }
    const box = document.createElement("div");
    box.className = "sync-camera";
    const video = document.createElement("video");
    video.setAttribute("playsinline", "");
    video.muted = true;
    video.srcObject = stream;
    box.appendChild(video);
    document.body.appendChild(box);
    try {
      await video.play();
    } catch { /* manche WebViews brauchen ein play()-Event */ }
    const det = new BarcodeDetector({ formats: ["qr_code"] });
    const stop = () => { try { stream.getTracks().forEach((tr) => tr.stop()); } catch { /* egal */ } box.remove(); };
    const t0 = Date.now();
    while (Date.now() - t0 < 25000) {
      try {
        const codes = await det.detect(video);
        if (codes && codes.length && codes[0].rawValue) { stop(); return codes[0].rawValue; }
      } catch { /* Frame noch nicht bereit */ }
      await new Promise((r) => setTimeout(r, 250));
    }
    stop();
    return null;
  }
  /* Scanner-Weg 2: natives Plugin (iOS, ML Kit/AVFoundation) */
  async function scanPlugin() {
    const plugin = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.BarcodeScanner;
    if (!plugin || !plugin.scanBarcode) return null;
    const res = await plugin.scanBarcode({ hint: "QR_CODE" });
    return res && res.ScanResult ? res.ScanResult : null;
  }
  async function clientScan() {
    const stt = el("sync-status2");
    if (stt) stt.textContent = t("sync_scanning");
    try {
      let url = await scanBrowser();
      if (!url) url = await scanPlugin();
      if (!url) {
        // Kein Scanner im WebView (z. B. Android): dann mit der Handykamera
        // den Deep-Link aus dem QR oeffnen - das startet die App direkt.
        if (stt) stt.textContent = t("sync_no_scanner");
        return;
      }
      await clientConnect(url);
    } catch (e) {
      const s2 = el("sync-status2");
      if (s2) s2.textContent = t("sync_fail");
    }
  }

  /* ------------------------------------------------------------------ Start */
  function deviceName() {
    const ua = navigator.userAgent;
    if (/iPhone|iPad/i.test(ua)) return "iPhone";
    if (/Android/i.test(ua)) return "Android";
    if (/Macintosh/i.test(ua)) return "Mac";
    if (/Windows/i.test(ua)) return "Windows";
    return "Gerät";
  }

  function start(opts) {
    S = opts.S; QR = opts.QR; render = opts.render; toast = opts.toast; t = opts.t;
    if (opts.getDb) getDb = opts.getDb;
    if (opts.setDb) setDb = opts.setDb;
    st.hub = IS_HUB; st.client = IS_CLIENT;
    if (!st.hub && !st.client) return;

    paint();

    if (st.hub) {
      const b = el("sync-newqr");
      if (b) b.addEventListener("click", () => { saveToken(""); hubStart().catch(() => {}); });
      const c = el("sync-copy");
      if (c) c.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(st.url); toast(t("sync_copy")); } catch { /* clipboard blockiert */ }
      });
      hubStart().catch((e) => note("hubStart-FEHLER: " + (e && e.message ? e.message : String(e))));
    }

    if (st.client) {
      const sc = el("sync-scan");
      if (sc) sc.addEventListener("click", () => { clientScan(); });
      const mt = el("sync-manual-toggle");
      if (mt) mt.addEventListener("click", () => {
        const m = el("sync-manual");
        if (m) m.hidden = !m.hidden;
      });
      const mg = el("sync-manual-go");
      if (mg) mg.addEventListener("click", () => {
        const u = el("sync-manual-url");
        if (u) clientConnect(u.value.trim()).catch(() => { const s2 = el("sync-status2"); if (s2) s2.textContent = t("sync_fail"); });
      });
      const dc = el("sync-disconnect");
      if (dc) dc.addEventListener("click", () => {
        st.url = ""; st.token = ""; st.key = null; st.peer = "";
        try { localStorage.removeItem(SYNC_KEY); } catch { /* egal */ }
        if (st.timer) clearInterval(st.timer);
        paint();
      });
      // ueber einen Deep-Link geoeffnet? outtrack://sync?h=..&p=..&t=..
      const app = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App;
      const handleUrl = (url) => {
        if (!url || !/^outtrack:\/\/sync/i.test(url)) return;
        clientConnect(url).catch(() => {
          const s2 = el("sync-status2");
          if (s2) s2.textContent = t("sync_fail");
        });
      };
      if (app && app.addListener) {
        try { app.addListener("appUrlOpen", (e) => handleUrl(e && (e.url || (e.detail && e.detail.url)))); } catch (e) {}
        if (app.getLaunchUrl) {
          app.getLaunchUrl().then((e) => handleUrl(e && e.url)).catch(() => {});
        }
      }
      // gespeicherte Kopplung wiederherstellen
      const saved = loadStore();
      if (saved && saved.url) {
        st.url = saved.url; st.token = saved.token; st.peer = saved.peer || "";
        st.key = S.deriveKey(saved.token).catch(() => null);
        paint();
        st.key.then((k) => { if (k) { st.key = k; clientPoll(); startPolling(); } });
      }
    }
  }

  // Vom Rust-Teil aufgerufen, wenn ein Client pusht
  function receive(blob) { hubReceive(blob); }

  window.__otSync = { start, receive, state: st, clientConnect, clientPoll, parseUrl, urlFromInfo, deepLink };
})();
