/* OutTrack v3.16 — Cache-First. Bei jedem Release CACHE bumpen, alte Caches löschen. */
const CACHE = "outtrack-v3.16";
const ASSETS = ["./index.html", "./styles.css", "./meals.js", "./app.js", "./manifest.webmanifest", "./icon.svg", "./icon.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request).catch(() => caches.match("./index.html"))));
});
