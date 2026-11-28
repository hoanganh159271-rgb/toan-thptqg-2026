/* Bộ nhớ đệm riêng cho website Hóa, gồm bài học và các trang tài liệu. */
const PREFIX = "hoa-polymer-kntt-";
const CACHE = PREFIX + "v3";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/style.css",
  "./assets/fonts.css",
  "./assets/app.js",
  "./assets/visuals.js",
  "./assets/icon.png",
  "./data/content.js",
  "./assets/dm-sans-0.ttf",
  "./assets/dm-sans-1.ttf",
  "./assets/dm-sans-2.ttf",
  "./assets/dm-sans-3.ttf",
  "./tai-lieu/trang-8.webp",
  "./tai-lieu/trang-9.webp",
  "./tai-lieu/trang-10.webp",
  "./tai-lieu/trang-11.webp",
  "./tai-lieu/trang-12.webp",
  "./tai-lieu/trang-13.webp",
  "./tai-lieu/trang-14.webp",
  "./tai-lieu/trang-15.webp",
  "./tai-lieu/trang-16.webp",
];
const assets = new Set(
  ASSETS.map((path) => new URL(path, self.registration.scope).href),
);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        cache.addAll(
          ASSETS.map((path) => new Request(path, { cache: "reload" })),
        ),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(PREFIX) && key !== CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  url.search = "";
  if (!assets.has(url.href)) return;
  event.respondWith(
    caches
      .open(CACHE)
      .then((cache) => cache.match(url.href))
      .then((hit) => hit || fetch(event.request)),
  );
});
