/* Shared, dependency-free controls for INTERDEC's secondary pages. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const config = window.INTERDEC || { company: {} };
  let language = 'en';
  const translated = $$('[data-es]');
  const placeholders = $$('[data-placeholder-es]');
  translated.forEach(element => { element.dataset.en = element.innerHTML; });
  placeholders.forEach(element => { element.dataset.placeholderEn = element.placeholder; });
  const toggle = $('.language-toggle');
  const menu = $('#mobile-nav');
  const menuButton = $('.menu-toggle');
  const main = $('main');
  const footer = $('.site-footer');

  let menuCloseTimer;
  function closeMenu(immediate = false) {
    if (!menu || !menuButton) return;
    clearTimeout(menuCloseTimer);
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', language === 'en' ? 'Open navigation' : 'Abrir navegación');
    document.body.classList.remove('menu-open');
    if (main) main.inert = false;
    if (footer) footer.inert = false;
    if (menu.hidden || immediate || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      menu.hidden = true;
      menu.inert = false;
      menu.classList.remove('is-closing');
      return;
    }
    const menuStyle = getComputedStyle(menu);
    menu.style.setProperty('--menu-exit-clip', menuStyle.clipPath);
    menu.style.setProperty('--menu-exit-transform', menuStyle.transform);
    menu.inert = true;
    menu.classList.add('is-closing');
    menuCloseTimer = setTimeout(() => {
      menu.hidden = true;
      menu.inert = false;
      menu.classList.remove('is-closing');
    }, 180);
  }

  function applyLanguage(next, persist = false) {
    language = next === 'es' ? 'es' : 'en';
    document.documentElement.lang = language;
    translated.forEach(element => { element.innerHTML = element.dataset[language]; });
    placeholders.forEach(element => { element.placeholder = language === 'es' ? element.dataset.placeholderEs : element.dataset.placeholderEn; });
    if (toggle) {
      $('.language-en', toggle)?.classList.toggle('active', language === 'en');
      $('.language-es', toggle)?.classList.toggle('active', language === 'es');
      toggle.setAttribute('aria-label', language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés');
    }
    closeMenu(true);
    if (persist) { try { localStorage.setItem('interdec-language', language); } catch (_) {} }
    document.dispatchEvent(new CustomEvent('interdec:language', { detail: { language } }));
  }
  window.INTERDEC_PAGE = { get language() { return language; }, applyLanguage };
  toggle?.addEventListener('click', () => applyLanguage(language === 'en' ? 'es' : 'en', true));
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    if (!open) { closeMenu(); return; }
    clearTimeout(menuCloseTimer);
    menu.classList.remove('is-closing');
    menu.inert = false;
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? (language === 'en' ? 'Close navigation' : 'Cerrar navegación') : (language === 'en' ? 'Open navigation' : 'Abrir navegación'));
    document.body.classList.toggle('menu-open', open);
    if (main) main.inert = open;
    if (footer) footer.inert = open;
    if (open) $('a', menu)?.focus({ preventScroll: true });
  });
  if (menu) $$('a', menu).forEach(a => a.addEventListener('click', () => closeMenu(true)));
  document.addEventListener('pointerdown', event => {
    if (menu && !menu.hidden && !menu.contains(event.target) && !$('#site-header').contains(event.target)) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu && !menu.hidden) { closeMenu(); menuButton.focus(); }
  });
  matchMedia('(min-width:1101px)').addEventListener('change', event => { if (event.matches) closeMenu(true); });

  $$('[data-company-email]').forEach(element => {
    const email = config.company.email || 'info@interdecgroup.com';
    element.textContent = email;
    element.href = `mailto:${email}`;
  });
  $$('[data-company-phone]').forEach(element => {
    element.textContent = config.company.phoneDisplay || '+52 81 1414 5035';
    element.href = `tel:${(config.company.phone || '+528114145035').replace(/[^+\d]/g, '')}`;
  });

  let frame;
  function onScroll() {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      $('#site-header')?.classList.toggle('scrolled', scrollY > 15);
      frame = 0;
    });
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  let initial = 'en';
  try { initial = localStorage.getItem('interdec-language') || 'en'; } catch (_) {}
  applyLanguage(initial);
})();
