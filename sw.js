const CACHE = "planer-v1";
const ASSETS = [
  "/Kalender/",
  "/Kalender/index.html",
  "/Kalender/manifest.webmanifest",
  "/Kalender/icon-192.png",
  "/Kalender/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
