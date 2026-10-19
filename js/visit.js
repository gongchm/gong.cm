(function () {
  var BASE = 22015;
  var el = document.getElementById("visit-count");
  if (!el) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  document.head.appendChild(s);
  var tries = 0;
  var timer = setInterval(function () {
    var v = document.getElementById("busuanzi_value_site_pv");
    tries += 1;
    if (v && v.textContent) {
      var n = parseInt(String(v.textContent).replace(/[^\d]/g, ""), 10);
      if (!isNaN(n)) el.textContent = String(BASE + n);
      clearInterval(timer);
    } else if (tries > 40) {
      clearInterval(timer);
    }
  }, 250);
})();
