/*var cacheVersion = 1;
var currentCache = {
    offline: 'offline-cache' + cacheVersion
};
const offlineUrl = 'offline.html';

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(currentCache.offline).then(function (cache) {
            return cache.addAll([
                offlineUrl
            ]);
        })
    );
});

this.addEventListener('fetch', event => {
    // request.mode = navigate isn't supported in all browsers
    // request.mode = naivgate 并没有得到所有浏览器的支持
    // so include a check for Accept: text/html header.
    // 因此对 header 的 Accept：text/html 进行核实
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            fetch(event.request.url).catch(error => {
                // Return the offline page
                // 返回离线页面
                return caches.match(offlineUrl);
            })
        );
    }
    else {
        // Respond with everything else if we can
        // 返回任何我们能返回的东西
        event.respondWith(caches.match(event.request)
            .then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});*/

var cacheName = 'cacheOffline',
    offlineUrl = 'offline.html';

this.addEventListener('install', function (evt) {
    evt.waitUntil(caches.open(cacheName).then(function (cache) {
        return cache.addAll([offlineUrl]);
    }));
});

this.addEventListener('fetch', function (evt) {
    var req = evt.request;
    if (req.mode = 'naivgate') {
        evt.respondWith(fetch(req.url).catch(function () {
            return caches.match(offlineUrl);
        }));
    }
});