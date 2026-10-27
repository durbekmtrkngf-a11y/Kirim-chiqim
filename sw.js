const C='kc2',A=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET')return;
if(u.hostname==='www.gstatic.com'){e.respondWith(caches.match(r).then(h=>h||fetch(r).then(x=>{const y=x.clone();caches.open(C).then(c=>c.put(r,y));return x})));return}
if(u.origin!==location.origin)return;
e.respondWith(fetch(r).then(x=>{const y=x.clone();caches.open(C).then(c=>c.put(r,y));return x}).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))))});
