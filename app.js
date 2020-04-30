(function (window, document) {
    'use strict';
    var mediaQuery = window.matchMedia('screen and (max-width: 640px)');

    if (mediaQuery.matches) {
        addScripts("../node_modules/swiper/js/swiper.min.js");
    } else {
        // document.body.style.backgroundColor = 'FireBrick';
    }

    function addScripts(...urls) {
        if (!urls.length) return;
        const head = document.getElementsByTagName('head')[0];
        urls.forEach(url => {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = url;
            head.appendChild(script);
        });
    }
})(window, document);

Array.forEach()