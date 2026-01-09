// sw.js - A minimal service worker to enable PWA installation
self.addEventListener('fetch', (event) => {
    // This can be empty, but it must exist
    event.respondWith(fetch(event.request));
});
