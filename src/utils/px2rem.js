
    ;
    (function(designWidth, rem2px, window, document) {
        var d = document.createElement('div');
        var m = document.createElement('meta');
        var scaleValue = 1 / window.devicePixelRatio;
        d.style.width = '1rem';
        d.style.display = "none";
        m.setAttribute("name", "viewport");
        m.setAttribute("content", "width=device-width,initial-scale=" + scaleValue + ",minimum-scale=" + scaleValue +
            ",maximum-scale=" + scaleValue + ",user-scalable=no");
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(d);
        // head.insertBefore(m, head.firstElementChild);
        var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
        d.remove();
        document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
        var st = document.createElement('style');
        var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + ((window.innerWidth /
            (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}";
        var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + ((window.innerHeight /
            (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}"
        st.innerHTML = portrait + landscape;
        head.appendChild(st);
        return defaultFontSize
    })(750, 100, window, document);