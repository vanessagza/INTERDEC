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
  let draft = '';
  let subject = '';

  function closeMenu() {
    if (!menu || !menuButton) return;
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', language === 'en' ? 'Open navigation' : 'Abrir navegación');
    document.body.classList.remove('menu-open');
    if (main) main.inert = false;
    if (footer) footer.inert = false;
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
    closeMenu();
    if (persist) { try { localStorage.setItem('interdec-language', language); } catch (_) {} }
    document.dispatchEvent(new CustomEvent('interdec:language', { detail: { language } }));
  }
  window.INTERDEC_PAGE = { get language() { return language; }, applyLanguage };
  toggle?.addEventListener('click', () => applyLanguage(language === 'en' ? 'es' : 'en', true));
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? (language === 'en' ? 'Close navigation' : 'Cerrar navegación') : (language === 'en' ? 'Open navigation' : 'Abrir navegación'));
    document.body.classList.toggle('menu-open', open);
    if (main) main.inert = open;
    if (footer) footer.inert = open;
    if (open) $('a', menu)?.focus();
  });
  if (menu) $$('a', menu).forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('pointerdown', event => {
    if (menu && !menu.hidden && !menu.contains(event.target) && !$('#site-header').contains(event.target)) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu && !menu.hidden) { closeMenu(); menuButton.focus(); }
  });
  matchMedia('(min-width:1101px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  $$('[data-company-email]').forEach(element => {
    const email = config.company.email || 'info@interdecgroup.com';
    element.textContent = email;
    element.href = `mailto:${email}`;
  });
  $$('[data-company-phone]').forEach(element => {
    element.textContent = config.company.phoneDisplay || '+52 81 1414 5035';
    element.href = `tel:${(config.company.phone || '+528114145035').replace(/[^+\d]/g, '')}`;
  });

  // Prepare a local email draft. Only the visitor's email app can send it.
  $$('.interest-form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const es = language === 'es';
    const entries = [];
    let empty;
    [...form.elements].filter(element => element.name && element.type !== 'submit').forEach(element => {
      const value = String(values.get(element.name) || '').trim();
      if (element.required && !value && !empty) empty = element;
      const label = es ? element.dataset.labelEs : element.dataset.labelEn;
      if (label && value) entries.push(`${label}: ${value}`);
    });
    if (empty) {
      empty.setCustomValidity(es ? 'Escribe más que espacios.' : 'Please enter more than spaces.');
      empty.reportValidity();
      empty.addEventListener('input', () => empty.setCustomValidity(''), { once: true });
      return;
    }
    subject = es ? form.dataset.subjectEs : form.dataset.subjectEn;
    draft = `${subject}\n\n${entries.join('\n\n')}`;
    const dialog = $('#message-dialog');
    $('#message-preview').textContent = draft;
    $('#open-email').href = `mailto:${config.company.email || 'info@interdecgroup.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`;
    if (!dialog.open) dialog.showModal();
  }));
  $$('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  $('#download-message')?.addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([draft], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url; link.download = 'INTERDEC-Inquiry.txt';
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  });
  $$('.interest-form button[type=submit]').forEach(button => { button.disabled = false; });
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
