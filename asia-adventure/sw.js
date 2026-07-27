/* Asia Adventure service worker — cache-first for offline (ship, planes, Great Firewall).
   RULE: bump CACHE on every content change. Phones need two opens after a push. */
const CACHE = 'aa27-v6';
const ASSETS = [
  './',
  './index.html',
  './data/legs.js',
  './data/guides.js',
  './data/games.js',
  './data/lessons.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon.ico',
  'https://fonts.googleapis.com/css2?family=Special+Elite&family=Spectral:ital,wght@0,400;0,600;1,400&family=Caveat:wght@600&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (url.hostname === 'api.anthropic.com') return; // never cache AI calls
  e.respondWith(
    caches.match(e.request, { ignoreSearch: url.origin === location.origin }).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(res => {
        // runtime-cache same-origin + google fonts files
        if (res.ok && (url.origin === location.origin || url.hostname.endsWith('gstatic.com') || url.hostname.endsWith('googleapis.com'))) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
