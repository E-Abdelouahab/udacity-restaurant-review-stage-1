self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('restaurants').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/styles.css',
       '/js/dbhelper.js',
       '/js/main.js',
       '/js/restaurant_info.js',
       'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
    ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
