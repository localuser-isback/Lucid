/*global UVServiceWorker,__uv$config*/
/*
 * Stock service worker script.
 * Users can provide their own sw.js if they need to extend the functionality of the service worker.
 * Ideally, this will be registered under the scope in uv.config.js so it will not need to be modified.
 * However, if a user changes the location of uv.bundle.js/uv.config.js or sw.js is not relative to them, they will need to modify this script locally.
 */
importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts(__uv$config.sw || '/uv/uv.sw.js');
importScripts('/dip/dip.worker.js');

const sw = new UVServiceWorker();
const sw2 = new DIPServiceWorker('/dip/dip.worker.js');

const staticDevLucid ="dev-lucid-site-v1"
const assets = [
    "/",
    "/bypass.html",
    "/chat.html",
    "/community.html",
    "/proxy.html",
    "/options.html",
    "/games.html",
    "/bookmarklets.html",
    "/favicon.svg",
    "/manifest.json",
]


self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevLucid).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', event => {
    if (event.request.url.startsWith(location.origin+'/service/dip/')) event.respondWith(sw2.fetch(event));
    if (event.request.url.startsWith(location.origin+'/service/uv/')) event.respondWith(sw.fetch(event));

    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request);
        })
    )
});
