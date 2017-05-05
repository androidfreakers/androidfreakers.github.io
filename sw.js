/**
 * Service worker demo file
 */
var CACHE_NAME = "my-cache-test";
var toCache = [
    'index.html',
    'main.js',
    'main.css',
    'images/india.svg'
];
self.addEventListener("install", function install(){
    console.log("install service worker");
});
self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache){
                console.log("cache "+CACHE_NAME+" opened");
                return cache.addAll(toCache);
            })
    );
});
self.addEventListener("fetch", function(event){
    console.log("fetch event");
    console.log(event);
    console.log(caches);
    event.respondWith(
        // caches.match(event.request).
        //     then(function(response){
        //         if(response){
        //             return response
        //         }
        //         return fetch(event.request);
        //     })
        caches.open(CACHE_NAME).then(function(cache){
            return cache.match(event.request).
            then(function(response){
                if(response){
                    return response;
                }
                return fetch(event.request);
            })
        })
    );
});