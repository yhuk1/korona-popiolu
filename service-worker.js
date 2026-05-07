const CACHE_NAME = "korona-popiolu-v12";

const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.webmanifest",
  "./korona_popiolu_poradnik_www.html",
  "./assets/crown.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/locations/village.png",
  "./assets/locations/forest.png",
  "./assets/locations/swamp.png",
  "./assets/locations/crypt.png",
  "./assets/locations/fort.png",
  "./assets/locations/tower.png",
  "./assets/locations/ruins.png",
  "./assets/locations/crown-hall.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
