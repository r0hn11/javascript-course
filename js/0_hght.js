let hght = 0;
setInterval(function() {
    hght = window.innerHeight;
    (document.getElementsByTagName('body')[0]).style.height = hght+'px';
}, 10);