/* OutTrack v3 smoke: Views, Timer, i18n, Gating, Meals, Premium, Streak-Freeze. */
import { test, afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";

const dir = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(dir, "..", "index.html"), "utf8");
const mealsSrc = fs.readFileSync(path.join(dir, "..", "meals.js"), "utf8");
const appSrc = fs.readFileSync(path.join(dir, "..", "app.js"), "utf8");

function boot(lang) {
  const dom = new JSDOM(html, { url: "http://localhost/", runScripts: "outside-only", pretendToBeVisual: true });
  const { window } = dom;
  live.push(window);
  if (lang) window.localStorage.setItem("outtrack_v2", JSON.stringify({ v: 3, lang, plan: "free" }));
  window.eval(mealsSrc + "\n;window.__MEALS=MEALS;\n" + appSrc);
  return { window, doc: window.document, ot: window.__ot };
}
const live = [];
afterEach(() => { const w = live.pop(); try { w && w.close(); } catch { /* still */ } });
const click = (window, sel) => {
  const el = window.document.querySelector(sel);
  assert.ok(el, "missing " + sel);
  el.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
};

test("alle 6 Views + Tabbar vorhanden", () => {
  const { doc } = boot();
  for (const v of ["view-hub", "view-journal", "view-focus", "view-food", "view-analytics", "view-settings"])
    assert.ok(doc.getElementById(v), v);
  assert.equal(doc.querySelectorAll("#tabbar .tab").length, 6);
});

test("136 Meals mit Rezepten (DE+EN)", () => {
  const { window } = boot();
  const MEALS = window.__MEALS;
  assert.ok(MEALS.length >= 136, "meals=" + MEALS.length);
  for (const m of MEALS) {
    assert.ok(m.name && m.ing?.length >= 2 && m.steps?.length >= 1, "rezept unvollständig: " + m.name);
    assert.ok(m.en?.name && m.en?.ing?.length >= 2, "EN fehlt: " + m.name);
  }
});

test("i18n: 5 Sprachen schalten um", () => {
  const { doc, ot } = boot();
  for (const l of ["de", "en", "ru", "es", "fr"]) {
    ot.db.lang = l;
    doc.querySelector("#lang-list button").click();
    assert.equal(doc.documentElement.lang, ot.db.lang);
  }
  ot.db.lang = "en";
  ot.go("hub");
  assert.match(doc.querySelector("[data-i18n='nav_hub']").textContent, /Hub/);
});

test("Free-Gating: Journal/Food abgefangen", () => {
  const { window, doc, ot } = boot();
  assert.equal(ot.db.plan, "free");
  assert.ok(doc.body.classList.contains("plan-free"));
  ot.go("journal");
  assert.ok(doc.getElementById("view-hub").classList.contains("active"), "deep-link muss auf Hub fallen");
  ot.go("food");
  assert.ok(doc.getElementById("view-hub").classList.contains("active"));
});

test("Pro-Code: Demo-Code gültig, Müll ungültig", () => {
  const { ot } = boot();
  assert.equal(ot.proKeyValid("OT-PRSEV-B"), true);
  assert.equal(ot.proKeyValid("OT-AAAAA-B"), false);
  assert.equal(ot.proKeyValid("falsch"), false);
});

test("Timer: Presets + Custom + Start/Pause/Reset", () => {
  const { window, doc } = boot();
  click(window, "#presets button[data-min='25']");
  assert.equal(doc.getElementById("timer-display").textContent, "25:00");
  doc.getElementById("custom-h").value = "1";
  doc.getElementById("custom-m").value = "0";
  doc.getElementById("custom-s").value = "0";
  click(window, "#custom-apply");
  assert.equal(doc.getElementById("timer-display").textContent, "1:00:00");
  click(window, "#timer-start");
  assert.match(doc.getElementById("timer-state").textContent, /Läuft|Running/);
  click(window, "#timer-start"); // Pause
  click(window, "#timer-reset");
  assert.equal(doc.getElementById("timer-display").textContent, "1:00:00");
});

test("Habits: Anlegen mit Ziel, Abhaken, Ring reagiert", () => {
  const { window, doc, ot } = boot();
  const before = ot.dayProgress();
  doc.getElementById("new-habit-label").value = "Testquest";
  click(window, "#goal-pick button[data-goal='weekly']");
  doc.getElementById("goal-count").value = "3";
  click(window, "#sheet-save");
  assert.equal(ot.db.habits.length, 4);
  assert.equal(ot.db.habits.at(-1).goal, "weekly");
  doc.querySelector("#habit-list .habit").click();
  assert.ok(ot.dayProgress() >= before);
  assert.match(doc.getElementById("ring-pct").textContent, /%/);
});

test("Streak-Freeze erscheint bei gerissenem Vortag", () => {
  const { doc, ot } = boot();
  const iso = (off) => { const d = new Date(); d.setDate(d.getDate() + off); return d.toISOString().slice(0, 10); };
  ot.db.habits.forEach((h) => { h.days = {}; h.days[iso(-2)] = 1; h.days[iso(-3)] = 1; });
  ot.go("hub");
  assert.equal(doc.getElementById("freeze-btn").hidden, false);
  doc.getElementById("freeze-btn").click();
  assert.equal(ot.db.frozenDays[iso(-1)], true);
  assert.equal(doc.getElementById("freeze-btn").hidden, true);
});

test("Fokus-Check loggt Umleitung", () => {
  const { window, doc, ot } = boot();
  ot.db.plan = "premium";
  ot.go("hub");
  click(window, "#redirect-open");
  assert.equal(doc.getElementById("redirect-sheet").hidden, false);
  doc.querySelector(".redirect-actions button").click();
  assert.equal(ot.db.redirects.length, 1);
});

test("Journal: Speichern + Suche + Rückblick", () => {
  const { doc, ot } = boot();
  ot.db.plan = "premium";
  ot.go("journal");
  doc.getElementById("journal-text").value = "Heute war gut";
  doc.getElementById("journal-save").click();
  assert.equal(ot.db.journal.length, 1);
  doc.getElementById("journal-search").value = "gut";
  doc.getElementById("journal-search").dispatchEvent(new doc.defaultView.Event("input", { bubbles: true }));
  assert.equal(doc.querySelectorAll("#journal-list .j-entry").length, 1);
});

test("Overload: PR-Erkennung", () => {
  const { doc, ot } = boot();
  ot.db.plan = "premium";
  const set = (ex, kg) => {
    doc.getElementById("lift-ex").value = ex;
    doc.getElementById("lift-kg").value = String(kg);
    doc.getElementById("lift-save").click();
  };
  set("Bankdrücken", 60);
  set("Bankdrücken", 62.5);
  assert.match(doc.getElementById("toast").textContent, /PR/);
  assert.match(doc.getElementById("pr-count").textContent, /1 PR/);
});

test("Stats rendert alles (Review, Grid, Identität, Log)", () => {
  const { doc, ot } = boot();
  ot.go("analytics");
  assert.ok(doc.getElementById("weekly-review").textContent.length > 10);
  assert.equal(doc.getElementById("grid").children.length, 35);
  assert.equal(doc.getElementById("identity").children.length, 3);
  assert.ok(doc.getElementById("chart-svg").innerHTML.includes("rect"));
});

test("Video-Hero: Flammen-Woche + Halb-Gauge + Pills + hero_goal", () => {
  const { doc, ot } = boot();
  ot.go("hub");
  assert.equal(doc.querySelectorAll("#week-strip .wday").length, 7, "7 Wochentage");
  assert.equal(doc.querySelectorAll("#week-strip .wday .fl").length, 7, "7 Flammen");
  const fg = doc.getElementById("ring-fg");
  assert.ok(fg, "ring-fg behalten");
  assert.equal(fg.getAttribute("pathLength"), "100", "Halb-Gauge per pathLength");
  assert.ok(doc.getElementById("gauge-needle"), "Nadel wie im Video");
  assert.ok(doc.getElementById("hero-pts"), "PTS-Pill");
  assert.match(doc.getElementById("ring-pct").textContent, /%/, "Count-up-Endwert");
  assert.ok(doc.getElementById("hero-card").classList.contains("play"), "Entrance-Replay");
  for (const l of ["de", "en"]) {
    ot.db.lang = l;
    assert.ok(ot.t("hero_goal").length > 3, "hero_goal " + l);
  }
});

test("Promo-Features: Tiles, Gipfel, Routine, Widgets, Splash (kein Trophäen-Wall/UL)", () => {
  const { doc, ot } = boot();
  ot.db.plan = "premium";
  ot.go("analytics");
  assert.equal(doc.querySelectorAll("#week-tiles .tile").length, 3, "Last-Week-Tiles");
  assert.ok(doc.getElementById("summit-svg").innerHTML.includes("path"), "Gipfel-Berg");
  assert.match(doc.getElementById("summit-pct").textContent, /%/);
  ot.go("hub");
  assert.equal(doc.querySelectorAll("#routine-rows .lb-row").length, 3, "Routine-Zeilen");
  assert.ok(doc.getElementById("routine-go"), "Routine-Button");
  ot.go("focus");
  assert.equal(doc.querySelectorAll("#wg-grid .wg").length, 3, "Fokus-Widgets");
  assert.ok(doc.getElementById("splash"), "Splash vorhanden");
  assert.equal(doc.body.classList.contains("is-mobile"), false, "Widget-Hinweis auf Desktop versteckt");
  for (const k of ["summit_title", "routine_title", "wg_title", "wk_checkins"]) {
    ot.db.lang = "de";
    assert.ok(ot.t(k).length > 2, k + " DE");
    ot.db.lang = "en";
    assert.ok(ot.t(k).length > 2, k + " EN");
  }
});

test("Theme-Toggle: Hell/Dunkel animiert umschaltbar + gespeichert", () => {
  const { window, doc, ot } = boot();
  doc.querySelector("#habit-list .habit").click();
  ot.go("settings");
  const tg = doc.getElementById("theme-toggle");
  assert.ok(tg, "Toggle vorhanden");
  assert.equal(ot.db.theme, "light");
  assert.ok(!doc.body.classList.contains("dark"));
  doc.querySelector("#theme-toggle button[data-theme='dark']").click();
  assert.equal(ot.db.theme, "dark");
  assert.ok(doc.body.classList.contains("dark"), "Dark-Klasse gesetzt");
  assert.equal(tg.dataset.v, "dark", "Knob-Position");
  assert.equal(doc.querySelector("meta[name='theme-color']").content, "#0a0a0e");
  assert.ok(doc.getElementById("chart-svg").innerHTML.includes("139,124,246"), "Chart in Dark-Akzent");
  doc.querySelector("#theme-toggle button[data-theme='light']").click();
  assert.equal(ot.db.theme, "light");
  assert.ok(!doc.body.classList.contains("dark"), "zurück zu Hell");
  assert.equal(doc.querySelector("meta[name='theme-color']").content, "#f2f2f7");
  ot.db.lang = "en";
  assert.equal(ot.t("theme_title"), "Appearance");
});

test("Motion: Stagger-Indizes, Count-ups, Keyframes überall", () => {
  const { doc, ot } = boot();
  ot.db.plan = "premium";
  ot.go("hub");
  const rect = doc.querySelector("#chart-svg rect");
  assert.ok(rect && rect.style.getPropertyValue("--d") !== "", "Chart-Stagger");
  ot.go("analytics");
  assert.ok(doc.querySelector("#week-tiles .tile").style.getPropertyValue("--d") !== "", "Tile-Stagger");
  assert.ok(doc.querySelector("#grid .sq").style.getPropertyValue("--d") !== "", "Grid-Stagger");
  assert.ok(doc.querySelector("#identity .id-row").style.getPropertyValue("--d") !== "", "Identitäts-Stagger");
  assert.match(doc.getElementById("summit-pct").textContent, /%/);
  ot.go("focus");
  assert.ok(doc.querySelector("#wg-grid .wg").style.getPropertyValue("--d") !== "", "Widget-Stagger");
  const css = fs.readFileSync(path.join(dir, "..", "styles.css"), "utf8");
  for (const k of ["barGrow", "doneFlash", "toastIn", "fadeIn", "tt-knob", "booting::after"])
    assert.ok(css.includes(k), k);
});

test("sw.js: Cache v3 + löscht Alt-Caches", () => {
  const sw = fs.readFileSync(path.join(dir, "..", "sw.js"), "utf8");
  assert.match(sw, /outtrack-v3/);
  assert.match(sw, /caches\.delete/);
});

test("keine externen Abhängigkeiten in der App", () => {
  for (const f of ["index.html", "app.js"]) {
    const src = fs.readFileSync(path.join(dir, "..", f), "utf8");
    assert.ok(!src.includes("http://") && !src.includes("https://"), f + " enthält URLs");
  }
  assert.ok(!html.includes("<link") || !html.match(/<link[^>]+href="https?:/));
});
