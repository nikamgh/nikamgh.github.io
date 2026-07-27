// Mobile menu toggle
(function () {
  var btn = document.querySelector('.navbar__toggle');
  var menu = document.getElementById('navmenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Highlight the nav link for the section currently in view
(function () {
  var sections = document.querySelectorAll('main section[id]');
  var links = document.querySelectorAll('.navbar__menu a[href*="#"]');
  if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;

  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').split('#')[1];
    if (id) map[id] = a;
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = map[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(function (a) { a.classList.remove('is-active'); });
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(function (s) { observer.observe(s); });
})();
