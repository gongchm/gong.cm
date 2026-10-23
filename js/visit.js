(function () {
  var BASE = 22015;
  var KEY = "gongcm-visits";
  var el = document.getElementById("visit-count");
  if (!el) return;

  function show(n) {
    el.textContent = String(n);
  }

  try {
    var cached = parseInt(localStorage.getItem(KEY), 10);
    if (cached && cached >= BASE) show(cached);
  } catch (e) {}

  var cb = "gongVisit_" + Math.floor(Math.random() * 1e9);
  var s = document.createElement("script");
  window[cb] = function (data) {
    try {
      var n = parseInt(data && data.site_pv, 10);
      if (!isNaN(n)) {
        var total = BASE + n;
        show(total);
        try { localStorage.setItem(KEY, String(total)); } catch (e) {}
      }
    } catch (e) {}
    delete window[cb];
    if (s.parentNode) s.parentNode.removeChild(s);
  };
  s.referrerPolicy = "no-referrer-when-downgrade";
  s.src = "https://busuanzi.ibruce.info/busuanzi?jsonpCallback=" + cb;
  document.head.appendChild(s);
})();
