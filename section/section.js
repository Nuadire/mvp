(function (window, document) {
    'use strict';
    const mediaQuery = window.matchMedia('screen and (max-width: 640px)');
    if (mediaQuery.matches) {
        addScript("../node_modules/swiper/js/swiper.min.js", initSwiper);
        // const swiper = await import("../node_modules/swiper/js/swiper.min.js");
    }
    function addScript(url, func) {
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = func;
        script.onreadystatechange = func;
        head.appendChild(script);
    }
    function initSwiper() {
        
    }
})(window, document);