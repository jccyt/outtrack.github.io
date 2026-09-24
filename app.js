/* OutTrack — offline-first, localStorage powered */
const KEY = "outtrack_v1";
const AREAS = ["mind", "body", "craft"];
const QUOTES = [
  "Small wins compound.", "Outdo yesterday's you.", "Discipline is identity.",
  "Deep work beats busy work.", "Non-negotiables first.", "Stay sharp. Stay hungry."
];
const $ = (s) => document.querySelector(s);

const DEFAULTS = () => ({
  habits: [
    { id: "med",   label: "Meditation", icon: "◍", area: "mind",  days: {} },
    { id: "gym",   label: "Gym",        icon: "⬢", area: "body",  days: {} },
    { id: "code",  label: "Coding",     icon: "⌁", area: "craft", days: {} },
    { id: "read",  label: "Reading",    icon: "✎", area: "mind",  days: {} },
  ],
  focusLogs: [],       // {date ISO, minutes, focus}
  focusDraft: "",
  createdAt: new Date().toISOString(),
});

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) { const d = DEFAULTS(); save(d); return d; }
    const d = { ...DEFAULTS(), ...JSON.parse(raw) };
    return d;
  } catch { const d = DEFAULTS(); save(d); return d; }
}
function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }
let db = load();

const todayISO = (offset = 0) => {
  const d = new Date(); d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};
const isDone = (h, day = todayISO()) => !!h.days[day];

/* ---------- Tabs ---------- */
const tabs = document.querySelectorAll(".tab");
function go(tab) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
  $("#view-" + tab).classList.add("active");
  if (tab === "analytics") renderAnalytics();
  if (tab === "hub") renderHub();
  window.scrollTo({ top: 0 });
}
tabs.forEach(t => t.addEventListener("click", () => go(t.dataset.tab)));
$("#launch-focus").addEventListener("click", () => go("focus"));

/* ---------- Hub ---------- */
function dayProgress(day = todayISO()) {
  const done = db.habits.filter(h => isDone(h, day)).length;
  return { done, total: db.habits.length, pct: db.habits.length ? Math.round(done / db.habits.length * 100) : 0 };
}
function calcStreak() {
  let s = 0;
  // streak counts back from today (or yesterday if today incomplete) while days are 100%
  let off = dayProgress(todayISO()).pct === 100 ? 0 : -1;
  while (true) {
    const p = dayProgress(todayISO(off));
    if (p.total > 0 && p.pct === 100) { s++; off--; }
    else break;
  }
  return s;
}
function areaPoints() {
  const pts = { mind: 0, body: 0, craft: 0 };
  db.habits.forEach(h => { pts[h.area] = (pts[h.area] || 0) + Object.keys(h.days).length * 10; });
  db.focusLogs.forEach(l => { pts.craft += 0; });
  return pts;
}

function renderHub() {
  $("#hub-date").textContent = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  $("#hub-quote").textContent = QUOTES[new Date().getDate() % QUOTES.length];
  $("#streak-count").textContent = calcStreak();

  const p = dayProgress();
  $("#ring-pct").textContent = p.pct + "%";
  $("#ring-sub").textContent = `${p.done} / ${p.total} done`;
  $("#ring-fg").style.strokeDashoffset = 326.7 * (1 - p.pct / 100);

  const pts = areaPoints();
  $("#points-mini").innerHTML = AREAS.map(a => `<span>${a.toUpperCase()} · ${pts[a]}</span>`).join("");

  const ul = $("#habit-list"); ul.innerHTML = "";
  db.habits.forEach(h => {
    const li = document.createElement("li");
    li.className = "habit" + (isDone(h) ? " done" : "");
    li.innerHTML = `<span class="check">${isDone(h) ? "✓" : h.icon}</span>
      <span class="h-label">${escapeHtml(h.label)}</span>
      <span class="h-area">${h.area.toUpperCase()}</span>
      <button class="h-del" aria-label="Delete">×</button>`;
    li.addEventListener("click", (e) => {
      if (e.target.classList.contains("h-del")) {
        db.habits = db.habits.filter(x => x.id !== h.id);
        save(db); renderHub(); toast("Habit removed");
        return;
      }
      const d = todayISO();
      if (h.days[d]) delete h.days[d]; else h.days[d] = true;
      save(db);
      li.classList.add("pop");
      renderHub();
      if (dayProgress().pct === 100) toast("Perfect day. Streak extended ◉");
      else if (h.days[d]) toast("+10 " + h.area.toUpperCase());
    });
    ul.appendChild(li);
  });
}
function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

/* ---------- Add habit sheet ---------- */
let newArea = "mind";
$("#add-habit-btn").addEventListener("click", () => { $("#sheet").hidden = false; $("#sheet-backdrop").hidden = false; });
$("#sheet-cancel").addEventListener("click", closeSheet);
$("#sheet-backdrop").addEventListener("click", closeSheet);
function closeSheet() { $("#sheet").hidden = true; $("#sheet-backdrop").hidden = true; }
$("#area-pick").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  newArea = b.dataset.area;
  document.querySelectorAll("#area-pick button").forEach(x => x.classList.toggle("active", x === b));
});
$("#sheet-save").addEventListener("click", () => {
  const label = $("#new-habit-label").value.trim();
  if (!label) return toast("Name your habit first");
  db.habits.push({ id: "h" + Date.now(), label: label.slice(0, 28), icon: "◇", area: newArea, days: {} });
  $("#new-habit-label").value = "";
  save(db); closeSheet(); renderHub(); toast("Habit added ✓");
});

/* ---------- Focus timer ---------- */
let totalSec = 45 * 60, leftSec = totalSec, timerId = null;
const CIRC = 552.9;
function fmt(s) { return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }
function drawTimer() {
  $("#timer-display").textContent = fmt(leftSec);
  $("#timer-fg").style.strokeDashoffset = CIRC * (1 - leftSec / totalSec);
}
document.querySelectorAll(".preset").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".preset").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  stopTick(false);
  totalSec = leftSec = parseInt(b.dataset.min, 10) * 60;
  $("#timer-state").textContent = "READY"; drawTimer();
}));
$("#timer-start").addEventListener("click", () => {
  if (timerId) { stopTick(); $("#timer-state").textContent = "PAUSED"; $("#timer-start").textContent = "RESUME"; return; }
  if (leftSec <= 0) leftSec = totalSec;
  $("#timer-state").textContent = "FOCUS — GO";
  $("#timer-start").textContent = "PAUSE";
  timerId = setInterval(() => {
    leftSec--;
    drawTimer();
    if (leftSec <= 0) { completeBlock(); }
  }, 1000);
});
function stopTick(resetLabel = true) {
  clearInterval(timerId); timerId = null;
  if (resetLabel) $("#timer-start").textContent = "START BLOCK";
}
$("#timer-reset").addEventListener("click", () => { stopTick(); leftSec = totalSec; $("#timer-state").textContent = "READY"; drawTimer(); });
function completeBlock() {
  stopTick(); leftSec = 0; drawTimer();
  $("#timer-state").textContent = "COMPLETE ✓";
  const focus = $("#focus-input").value.trim();
  db.focusLogs.unshift({ date: new Date().toISOString(), minutes: Math.round(totalSec / 60), focus });
  save(db);
  toast("Block complete. +craft identity ✓");
  try { navigator.vibrate && navigator.vibrate([100, 50, 100]); } catch {}
}
$("#exit-focus").addEventListener("click", () => go("hub"));
$("#fs-btn").addEventListener("click", async () => {
  const el = $("#focus-stage");
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await el.requestFullscreen();
  } catch { toast("Fullscreen not available — still distraction-free"); }
});

/* Journal */
$("#focus-input").value = db.focusDraft || "";
$("#focus-input").addEventListener("input", (e) => {
  db.focusDraft = e.target.value; save(db);
  const s = $("#focus-saved"); s.classList.add("show");
  clearTimeout(s._t); s._t = setTimeout(() => s.classList.remove("show"), 900);
});

/* ---------- Ambient sound (WebAudio, no files needed) ---------- */
let actx = null, soundNodes = [];
$("#sound-select").addEventListener("change", (e) => playAmbience(e.target.value));
function noiseBuffer(ctx) {
  const b = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return b;
}
function stopAmbience() { soundNodes.forEach(n => { try { n.stop ? n.stop() : n.disconnect(); } catch {} }); soundNodes = []; if (actx) actx.close(); actx = null; }
function playAmbience(kind) {
  stopAmbience();
  if (kind === "off") return;
  actx = new (window.AudioContext || window.webkitAudioContext)();
  const ctx = actx, master = ctx.createGain(); master.gain.value = 0.12; master.connect(ctx.destination);
  if (kind === "white") {
    const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx); src.loop = true;
    src.connect(master); src.start(); soundNodes.push(src);
  } else if (kind === "rain") {
    const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx); src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 1800; f.Q.value = 0.6;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.4;
    const g = ctx.createGain(); g.gain.value = 0.4;
    lfo.connect(g); g.connect(f.frequency); // patter modulation
    src.connect(f); f.connect(master); src.start(); lfo.start();
    soundNodes.push(src, lfo);
  } else if (kind === "synth") {
    [55, 82.5, 110.3].forEach((fr, i) => {
      const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.value = fr;
      const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 400 + i * 150;
      const g = ctx.createGain(); g.gain.value = 0.25;
      o.connect(f); f.connect(g); g.connect(master); o.start();
      soundNodes.push(o);
    });
  }
}

/* ---------- Analytics ---------- */
function renderAnalytics() {
  // grid: last 35 days
  const grid = $("#grid"); grid.innerHTML = "";
  for (let off = 34; off >= 0; off--) {
    const day = todayISO(-off);
    const p = dayProgress(day);
    const lvl = p.pct === 0 ? 0 : p.pct < 34 ? 1 : p.pct < 67 ? 2 : p.pct < 100 ? 3 : 4;
    const d = document.createElement("div");
    d.className = "sq l" + lvl; d.title = `${day} — ${p.pct}%`;
    grid.appendChild(d);
  }
  // identity
  const pts = areaPoints();
  const total = pts.mind + pts.body + pts.craft;
  $("#total-points").textContent = total;
  const levelOf = (p) => ({ lvl: Math.floor(p / 70) + 1, inLvl: p % 70 });
  $("#identity").innerHTML = AREAS.map(a => {
    const { lvl, inLvl } = levelOf(pts[a]);
    return `<div class="id-row"><div class="id-head"><span>◆ ${a.toUpperCase()} — Level ${lvl}</span><small>${pts[a]} pts · ${70 - inLvl} to L${lvl + 1}</small></div>
      <div class="bar"><i style="width:${Math.round(inLvl / 70 * 100)}%"></i></div></div>`;
  }).join("");
  // focus log
  const log = $("#focus-log");
  log.innerHTML = db.focusLogs.length ? "" : `<p class="muted">No focus blocks yet — launch Outdo Mode.</p>`;
  db.focusLogs.slice(0, 10).forEach(l => {
    const r = document.createElement("div"); r.className = "fl-row";
    r.textContent = `◎ ${l.minutes} min — ${l.focus || "untitled focus"} · ${new Date(l.date).toLocaleDateString()}`;
    log.appendChild(r);
  });
}
$("#reset-data").addEventListener("click", () => {
  if (confirm("Delete all OutTrack data?")) { localStorage.removeItem(KEY); db = load(); renderHub(); renderAnalytics(); toast("Fresh start ✓"); }
});

/* ---------- Toast / PWA ---------- */
let toastT;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => t.hidden = true, 2200);
}
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});

/* init */
drawTimer(); renderHub();
