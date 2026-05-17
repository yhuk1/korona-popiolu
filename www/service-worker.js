const CACHE_NAME = "korona-popiolu-v55";

const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.webmanifest",
  "./korona_popiolu_poradnik_www.html",
  "./korona_popiolu_poradnik_www.txt",
  "./sidequests.txt",
  "./bron.txt",
  "./assets/crown.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/ui/guide.svg",
  "./assets/ui/portrait-warrior.svg",
  "./assets/ui/portrait-rogue.svg",
  "./assets/ui/portrait-mage.svg",
  "./assets/ui/portrait-outlaw.svg",
  "./assets/characters/portrait-edrin.png",
  "./assets/characters/portrait-alena.png",
  "./assets/characters/portrait-cael.png",
  "./assets/characters/portrait-eliana.png",
  "./assets/characters/portrait-oren.png",
  "./assets/characters/portrait-lorian.png",
  "./assets/characters/portrait-edric.png",
  "./assets/characters/portrait-boren.png",
  "./assets/characters/portrait-mirna.png",
  "./assets/characters/portrait-rauk.png",
  "./assets/characters/portrait-ivara.png",
  "./assets/characters/portrait-ash-knight.png",
  "./assets/characters/portrait-lost-child.png",
  "./assets/characters/portrait-heraldless-knight.png",
  "./assets/characters/portrait-woodcutter-ghost.png",
  "./assets/characters/portrait-dead-ferryman.png",
  "./assets/characters/portrait-silver-guardian.png",
  "./assets/characters/portrait-ash-king.png",
  "./assets/characters/portrait-wounded-merchant.png",
  "./assets/characters/portrait-dawn-saint.png",
  "./assets/characters/portrait-faceless-actor.png",
  "./assets/characters/portrait-market-shade.png",
  "./assets/characters/portrait-armory-guard.png",
  "./assets/characters/portrait-nera.png",
  "./assets/ui/hero-sketch.svg",
  "./assets/ui/items/icon-sword.svg",
  "./assets/ui/items/icon-axe.svg",
  "./assets/ui/items/icon-staff.svg",
  "./assets/ui/items/icon-armor.svg",
  "./assets/ui/items/icon-helm.svg",
  "./assets/ui/items/icon-ring.svg",
  "./assets/ui/items/icon-amulet.svg",
  "./assets/ui/items/icon-boots.svg",
  "./assets/ui/items/icon-potion.svg",
  "./assets/ui/items/icon-book.svg",
  "./assets/ui/items/icon-scroll.svg",
  "./assets/ui/items/icon-key.svg",
  "./assets/ui/items/icon-torch.svg",
  "./assets/ui/items/icon-map.svg",
  "./assets/ui/items/icon-crown.svg",
  "./assets/ui/items/icon-crystal.svg",
  "./assets/ui/items/icon-material.svg",
  "./assets/ui/items/icon-gear.svg",
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
