const cacheName = "ritzy-assets";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        // TODO: Add some pre cache here
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.destination === "image") {
    event.respondWith(
      caches.match(request).then((cacheResponse) => {
        if (cacheResponse) return cacheResponse;

        return fetch(request).then((networkResponse) => {
          return caches.open(cacheName).then((cache) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});
