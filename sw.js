// Alaska Adventure 2026 — Service Worker
const CACHE = 'ak26-v35';
const ASSETS = [
  './splash.html',
  './index.html',
  './ortiz-crest.png',
  './ortiz-crest-192.png',
  './ortiz-crest-512.png',
  './apple-touch-icon.png',
  './favicon.ico',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap',
  'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
];

// Install — cache all core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.allSettled(ASSETS.map(url => cache.add(url).catch(() => null)))
    ).then(() => self.skipWaiting())
  );
});

// Activate — clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — cache-first for local assets, network-first for everything else
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Always use cache-first for our own files
  const isLocal = url.origin === self.location.origin;
  const isFont  = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

  if (isLocal || isFont) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          if (resp && resp.status === 200) {
            const clone = resp.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return resp;
        }).catch(() => cached); // if network fails, return cached even if stale
      })
    );
  }
  // External requests (maps, FIFA links, etc.) go straight to network
});
