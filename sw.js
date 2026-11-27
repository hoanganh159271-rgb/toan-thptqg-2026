/* Service Worker — Hỗ trợ dùng offline sau lần tải đầu tiên qua Internet */
const CACHE_PREFIX = 'toan-thptqg-2026-v';
const CACHE_NAME = CACHE_PREFIX + '6';
const ASSETS = [
  './',
  './index.html',
  './tai_lieu.html',
  './manifest.json',
  './ma_tran_de_2026.json',
  './assets/style.css',
  './assets/common.js',
  './assets/docs_data.js',
  './luyen_tap/data_de_mau.js',
  './luyen_tap/data_de_truong.js',
  './luyen_tap/data_tln_van_dung.js',
  './luyen_tap/data_tln_hot_2026.js',
  './luyen_tap/chuyen_de_tln.html',
  './luyen_tap/phong_thi_toan.html',
  './truc_quan/01_khao_sat_va_tuong_giao.html',
  './truc_quan/02_phong_lab_toi_uu_mhh.html',
  './truc_quan/03_vecto_va_hinh_hoc_3d.html',
  './truc_quan/04_mu_log_va_xac_suat_mhh.html'
];
const assetUrls = new Set(ASSETS.map(function (path) { return new URL(path, self.registration.scope).href; }));

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS.map(function (u) {
        return new Request(u, { cache: 'reload' });
      }));
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME; })
          .map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
  var url = new URL(event.request.url);
  // Các tham số mode, tab và doc được trang xử lý cục bộ.
  url.search = '';
  if (!assetUrls.has(url.href)) return;
  var opened = caches.open(CACHE_NAME);
  var cached = opened.then(function (cache) { return cache.match(url.href); });
  var fresh = self.fetch(event.request, { cache: 'no-cache' });
  event.waitUntil(fresh.then(function (response) {
    if (!response.ok || response.type !== 'basic') return;
    var copy = response.clone();
    return opened.then(function (cache) { return cache.put(url.href, copy); });
  }).catch(function () {}));
  if (event.request.mode === 'navigate') {
    event.respondWith(fresh.catch(function () { return cached; }));
  } else {
    event.respondWith(cached.then(function (hit) { return hit || fresh; }));
  }
});
