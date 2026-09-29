// MONOLITH Guides — sidebar toggle (mobile) + copy-to-clipboard for AI prompt boxes.
(function () {
  var toggle = document.querySelector('[data-sidebar-toggle]');
  var sidebar = document.querySelector('[data-sidebar]');
  var scrim = document.querySelector('[data-sidebar-scrim]');

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove('is-open');
    scrim && scrim.classList.remove('is-open');
    toggle && toggle.setAttribute('aria-expanded', 'false');
  }
  function toggleSidebar() {
    if (!sidebar) return;
    var open = sidebar.classList.toggle('is-open');
    scrim && scrim.classList.toggle('is-open', open);
    toggle && toggle.setAttribute('aria-expanded', String(open));
  }
  toggle && toggle.addEventListener('click', toggleSidebar);
  scrim && scrim.addEventListener('click', closeSidebar);

  var ICON_COPY = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="5.5" width="8.5" height="8.5" rx="1.2"/><path d="M10.5 5.5V3.7a1.2 1.2 0 0 0-1.2-1.2H2.7A1.2 1.2 0 0 0 1.5 3.7v6.6a1.2 1.2 0 0 0 1.2 1.2H4.5"/></svg>';
  var ICON_CHECK = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3 3 7-7"/></svg>';

  document.querySelectorAll('.g-prompt').forEach(function (box) {
    var pre = box.querySelector('pre');
    if (!pre) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'g-copy-btn';
    btn.setAttribute('aria-label', 'Скопировать промпт');
    btn.title = 'Скопировать промпт';
    btn.innerHTML = ICON_COPY;
    box.insertBefore(btn, pre);
    btn.addEventListener('click', function () {
      var text = pre.innerText;
      var done = function () {
        btn.innerHTML = ICON_CHECK;
        btn.classList.add('is-copied');
        btn.title = 'Скопировано';
        setTimeout(function () {
          btn.innerHTML = ICON_COPY;
          btn.classList.remove('is-copied');
          btn.title = 'Скопировать промпт';
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
      } else {
        fallbackCopy(text, done);
      }
    });
  });

  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(ta);
  }
})();
