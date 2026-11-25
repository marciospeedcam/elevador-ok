// Service worker mínimo: só existe para o Android oferecer "Instalar app".
// Não guarda cache, para o app nunca abrir uma versão velha.
self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(e){ e.respondWith(fetch(e.request)); });
