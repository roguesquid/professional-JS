const VERSION = "v1"

//self es como un this pero exclusivo para los service workers
self.addEventListener("install", event => {
  //creamos un precache, una lista de recursos que mantendrá en cache
  event.waitUntil(precache())
})

//esta funcion busca si ya tenemos la respuesta de una peticion en cache
self.addEventListener("fetch", event => {
  const request = event.request;
  //get
  if (request.method !== "GET") {
    return;
  }
  //buscar en cache
  event.respondWith(cachedResponse(request));

  //actualizar el cache
  event.waitUntil(updateCache(request));
})


async function precache() {
  //abrimos un cache especifico
  //esto nos va a dar una instancia de cache que se llama v1 y retorna una promesa
  const cache = await caches.open(VERSION);
  //agregamos los archivos que queremos guardar en cache
  return cache.addAll([
    // "./",
    // "./index.html",
    // "./assets/index.js",
    // "./assets/MediaPlayer.js",
    // "./assets/plugins/AutoPlay.js",
    // "./assets/plugins/AutoPause.js",
    // "./assets/index.css",
    // "./assets/BigBuckBunny.mp4",
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  //tienes una copia de lo que le corresponde al request?
  const response = await cache.match(request);
  //si no la tiene retorna undefined entonces tenemos que contestar con un fetch
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  //tienes una copia de lo que le corresponde al request?
  const response = await fetch(request)
  //si no la tiene retorna undefined entonces tenemos que contestar con un fetch
  cache.put(request, response);
}