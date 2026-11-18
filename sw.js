const C="london-24693779";
const FILES=["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "img/abbey.jpg", "img/bigben.jpg", "img/borough.jpg", "img/buckingham.jpg", "img/chinatown.jpg", "img/coventgarden.jpg", "img/eastcroydon.jpg", "img/farringdon.jpg", "img/leadenhall.jpg", "img/leicester.jpg", "img/liverpoolst.jpg", "img/londonbridge.jpg", "img/londoneye.jpg", "img/millennium.jpg", "img/oxfordst.jpg", "img/piccadilly.jpg", "img/regent.jpg", "img/soho.jpg", "img/southbank.jpg", "img/stansted.jpg", "img/stjames.jpg", "img/stpauls.jpg", "img/tate.jpg", "img/tower.jpg", "img/towerbridge.jpg", "img/trafalgar.jpg", "img/victoria.jpg", "img/westbridge.jpg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
  if(res.ok&&(e.request.url.startsWith(self.location.origin)||e.request.url.includes("fonts.g"))){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp))}
  return res}).catch(()=>caches.match("index.html"))))});
