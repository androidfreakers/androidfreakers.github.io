var main;

main = (function(main){
    var main = {
        init: init,
        installServiceWorker: installServiceWorker
    };
    return main;
    function init(){
        console.log("main");
        this.installServiceWorker();
    }
    function installServiceWorker() {
        if('serviceWorker' in navigator){
            console.log("service worker is available");
            navigator.serviceWorker.register("sw.js").then(function registration(registration) {
                console.log(registration);
                console.log("Service worker installed successfully");
            }, function error(error) {
                console.error(new Error(error));
                console.log("Could not register the service worker...");
            })
        }
    }
})(main);
window.onload = main.init();