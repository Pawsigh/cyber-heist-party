// Zwischenspeicher für schnellen Start vom Homescreen.
// Die Seite selbst wird immer zuerst frisch aus dem Netz geholt, damit neue Versionen sofort ankommen.
const CACHE = 'cch-v1'

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()))

self.addEventListener('fetch', event => {
  const request = event.request
  const url = new URL(request.url)
  if (request.method !== 'GET' || url.origin !== self.location.origin) return
  const store = async response => {
    if (response.ok) (await caches.open(CACHE)).put(request, response.clone())
    return response
  }
  if (url.pathname.includes('/assets/')) {
    // Dateien mit Prüfsumme im Namen ändern sich nie
    event.respondWith(caches.match(request).then(hit => hit || fetch(request).then(store)))
  } else {
    event.respondWith(fetch(request).then(store).catch(() => caches.match(request, { ignoreSearch: true })))
  }
})
