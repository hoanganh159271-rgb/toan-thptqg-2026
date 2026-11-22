/* Service Worker — Hỗ trợ dùng offline sau lần tải đầu tiên qua Internet */
const CACHE_NAME = 'toan-thptqg-2026-v5';
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
  './luyen_tap/data_tln_van_dung.js',
  './luyen_tap/data_tln_hot_2026.js',
  './luyen_tap/chuyen_de_tln.html',
  './luyen_tap/phong_thi_toan.html',
  './truc_quan/01_khao_sat_va_tuong_giao.html',
  './truc_quan/02_phong_lab_toi_uu_mhh.html',
  './truc_quan/03_vecto_va_hinh_hoc_3d.html',
  './truc_quan/04_mu_log_va_xac_suat_mhh.html'
];

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
        keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
  event.respondWith(
    self.fetch(event.request, { cache: 'no-cache' }).then(function (res) {
      if (res && res.status === 200 && res.type === 'basic') {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(event.request, { ignoreSearch: true });
    })
  );
});
