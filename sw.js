// Service worker minimo: existe para o Android oferecer "Instalar app".
// Nunca guarda cache: a pagina e sempre buscada de novo, para nao abrir versao velha.
self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(e){
  if(e.request.method!=="GET") return;
  var u=new URL(e.request.url);
  if(u.origin!==self.location.origin) return;
  e.respondWith(fetch(e.request,{cache:"no-store"}).catch(function(){ return fetch(e.request); }));
});
