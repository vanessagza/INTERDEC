/* Vanilla JavaScript: intentionally works on GitHub Pages, any static host,
   and when index.html is opened directly from a downloaded folder. */
(() => {
  'use strict';
  const config = window.INTERDEC;
  if (!config) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  let language = 'en';
  let selectedLotType = 'residential';
  let inquiryText = '';
  let inquirySubject = '';
  let toastTimer;
  const copy = {
    en: {
      residential: { heading: 'Places to put down roots.', caption: 'Planned residential lots' },
      commercial: { heading: 'Space for your next venture.', caption: 'Planned commercial lots' },
      size: '[Details coming soon]', price: '[To be announced]',
      email: '[Add company email]', phone: '[Add company phone]', address: '[Add office address]',
      inquiryUnavailable: 'Your draft is ready. The company email is still a placeholder, so nothing has been sent. Copy or download the message and share it with your contact.',
      inquiryReady: 'Your draft is ready. Review it below, then open your email app to send it. Nothing has been sent yet.',
      copied: 'Message copied. Nothing has been sent.',
      copyFailed: 'Clipboard access is unavailable. Download the text instead.',
      calendar: 'Calendar invitation downloaded.',
      downloaded: 'Inquiry downloaded. Nothing has been sent.',
      pastEvent: 'ANNOUNCED GROUNDBREAKING · DECEMBER 2, 2026',
      interest: { residential: 'Residential lots — Puerta del Sol', commercial: 'Commercial lots — Puerta del Sol', land: 'I have land to sell', general: 'General information' },
      draftTitle: 'INTERDEC — Website inquiry', name: 'Name', emailLabel: 'Email', phoneLabel: 'Phone', interestLabel: 'Interest', message: 'Message', notProvided: 'Not provided',
    },
    es: {
      residential: { heading: 'Un lugar para echar raíces.', caption: 'Lotes residenciales planeados' },
      commercial: { heading: 'Espacio para tu próximo negocio.', caption: 'Lotes comerciales planeados' },
      size: '[Información próximamente]', price: '[Por anunciar]',
      email: '[Agrega el correo de la empresa]', phone: '[Agrega el teléfono de la empresa]', address: '[Agrega la dirección de la oficina]',
      inquiryUnavailable: 'Tu borrador está listo. El correo de la empresa aún está pendiente, así que no se ha enviado nada. Copia o descarga el mensaje y compártelo con tu contacto.',
      inquiryReady: 'Tu borrador está listo. Revísalo y abre tu aplicación de correo para enviarlo. Todavía no se ha enviado nada.',
      copied: 'Mensaje copiado. No se ha enviado nada.',
      copyFailed: 'El portapapeles no está disponible. Descarga el texto.',
      calendar: 'Invitación de calendario descargada.',
      downloaded: 'Consulta descargada. No se ha enviado nada.',
      pastEvent: 'INICIO DE OBRA ANUNCIADO · 2 DE DICIEMBRE DE 2026',
      interest: { residential: 'Lotes residenciales — Puerta del Sol', commercial: 'Lotes comerciales — Puerta del Sol', land: 'Tengo un terreno para vender', general: 'Información general' },
      draftTitle: 'INTERDEC — Consulta desde el sitio web', name: 'Nombre', emailLabel: 'Correo', phoneLabel: 'Teléfono', interestLabel: 'Interés', message: 'Mensaje', notProvided: 'No indicado',
    },
  };

  // Preserve the authored English copy. Spanish is optional and browser-local.
  if (config.company.story) {
    $('#company-story').textContent = config.company.story;
    $('#company-story').dataset.es = config.company.storyEs || config.company.story;
    $('.story-placeholder-label').hidden = true;
  }
  if (config.project.partnership) {
    $('#partnership-copy').textContent = config.project.partnership;
    $('#partnership-copy').dataset.es = config.project.partnershipEs || config.project.partnership;
  }
  $$('[data-es]').forEach(element => { element.dataset.en = element.innerHTML; });
  $$('[data-placeholder-es]').forEach(element => { element.dataset.placeholderEn = element.placeholder; });

  function setContact(element, value, fallback, href) {
    element.textContent = value || fallback;
    element.classList.toggle('placeholder-value', !value);
    if (href && value) element.setAttribute('href', href);
    else element.removeAttribute('href');
  }

  function renderContacts() {
    const t = copy[language];
    const company = config.company;
    const safeEmail = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(company.email || '') ? company.email : '';
    setContact($('#company-email'), safeEmail, t.email, safeEmail ? `mailto:${safeEmail}` : '');
    setContact($('#company-phone'), company.phoneDisplay || company.phone, t.phone, company.phone ? `tel:${company.phone.replace(/[^+\d]/g, '')}` : '');
    setContact($('#company-address'), company.officeAddress, t.address);
    $('#project-phone').setAttribute('href', `tel:${config.project.inquiryPhone.replace(/[^+\d]/g, '')}`);
    $('#project-phone').firstChild.textContent = `${config.project.inquiryPhoneDisplay} `;
  }

  function renderLotPanel() {
    const t = copy[language];
    const type = selectedLotType;
    const count = config.project[`${type}Lots`];
    $('#lot-count').textContent = String(count).padStart(2, '0');
    $('#lot-heading').textContent = t[type].heading;
    $('#lot-caption').textContent = t[type].caption;
    $('#lot-size').textContent = config.project[`${type}Size`] || t.size;
    $('#lot-price').textContent = config.project[`${type}Price`] || t.price;
    $('#project-inquiry').dataset.interest = type;
    $('#lot-panel').setAttribute('aria-labelledby', `${type}-tab`);
    $$('.project-tab').forEach(tab => {
      const active = tab.dataset.lotType === type;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
  }

  function applyLanguage(nextLanguage, persist = false) {
    language = nextLanguage === 'es' ? 'es' : 'en';
    document.documentElement.lang = language;
    $$('[data-es]').forEach(element => { element.innerHTML = language === 'es' ? element.dataset.es : element.dataset.en; });
    $$('[data-placeholder-es]').forEach(element => { element.placeholder = language === 'es' ? element.dataset.placeholderEs : element.dataset.placeholderEn; });
    $('.language-en').classList.toggle('active', language === 'en');
    $('.language-es').classList.toggle('active', language === 'es');
    $('.language-toggle').setAttribute('aria-label', language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés');
    $('.menu-toggle').setAttribute('aria-label', language === 'en' ? 'Open navigation' : 'Abrir navegación');
    renderLotPanel();
    renderContacts();
    updateCountdown();
    if (persist) { try { localStorage.setItem('interdec-language', language); } catch (_) { /* Private browsing: English remains the default. */ } }
  }

  $('.language-toggle').addEventListener('click', () => applyLanguage(language === 'en' ? 'es' : 'en', true));
  $$('.project-tab').forEach(tab => {
    tab.addEventListener('click', () => { selectedLotType = tab.dataset.lotType; renderLotPanel(); });
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      selectedLotType = event.key === 'Home' ? 'residential' : event.key === 'End' ? 'commercial' : selectedLotType === 'residential' ? 'commercial' : 'residential';
      renderLotPanel();
      $(`#${selectedLotType}-tab`).focus();
    });
  });

  // Mobile navigation: avoid trapping focus in a hidden menu.
  const mobileMenu = $('#mobile-nav');
  const menuButton = $('.menu-toggle');
  function closeMenu() {
    mobileMenu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', language === 'en' ? 'Open navigation' : 'Abrir navegación');
    document.body.classList.remove('menu-open');
    $('main').inert = false;
    $('.site-footer').inert = false;
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    mobileMenu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? (language === 'en' ? 'Close navigation' : 'Cerrar navegación') : (language === 'en' ? 'Open navigation' : 'Abrir navegación'));
    document.body.classList.toggle('menu-open', open);
    $('main').inert = open;
    $('.site-footer').inert = open;
    if (open) $('a', mobileMenu).focus();
  });
  $$('a', mobileMenu).forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); menuButton.focus(); }
  });
  const desktopMedia = matchMedia('(min-width:701px)');
  desktopMedia.addEventListener('change', event => { if (event.matches) closeMenu(); });

  // Native dialogs supply keyboard focus containment and Escape-to-close.
  function openDialog(id) {
    closeMenu();
    const dialog = $(id);
    if (!dialog.open) dialog.showModal();
  }
  $$('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
  });
  $('.project-detail-button').addEventListener('click', () => openDialog('#project-dialog'));
  $('#invitation-button').addEventListener('click', () => openDialog('#invitation-dialog'));
  $('#privacy-button').addEventListener('click', () => openDialog('#privacy-dialog'));
  $$('[data-interest]').forEach(link => link.addEventListener('click', () => {
    $('#interest').value = link.dataset.interest;
    if (link.hasAttribute('data-dialog-inquiry')) link.closest('dialog').close();
  }));

  function toast(message) {
    const element = $('#toast');
    clearTimeout(toastTimer);
    element.textContent = message;
    element.classList.add('visible');
    toastTimer = setTimeout(() => element.classList.remove('visible'), 4200);
  }

  function downloadFile(text, filename, type = 'text/plain;charset=utf-8') {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }

  function escapeICS(value) { return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;'); }
  // Fold by UTF-8 byte length, as required by RFC 5545 (at most 75 octets).
  function foldICSLine(line) {
    const lines = [];
    let current = '';
    const encoder = new TextEncoder();
    for (const character of line) {
      if (encoder.encode(current + character).length > 74) { lines.push(current); current = ' '; }
      current += character;
    }
    lines.push(current);
    return lines.join('\r\n');
  }
  $('#calendar-button').addEventListener('click', () => {
    const p = config.project;
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    const lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//INTERDEC//Puerta del Sol//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
      'UID:puerta-del-sol-groundbreaking-20261202@interdecgroup.com', `DTSTAMP:${stamp}`, `DTSTART:${p.calendarStartUTC}`,
      `SUMMARY:${escapeICS('Puerta del Sol — Groundbreaking Ceremony')}`,
      `LOCATION:${escapeICS(p.address)}`,
      `DESCRIPTION:${escapeICS(`Official groundbreaking ceremony. 49 residential lots and 3 commercial lots announced. Food and drinks provided per the invitation. Confirm attendance details and site access with the project contact: ${p.inquiryPhoneDisplay}. INTERDEC is listed among the sponsors; the invitation credits AVIG Development.`)}`,
      'END:VEVENT', 'END:VCALENDAR', '',
    ];
    downloadFile(lines.map(foldICSLine).join('\r\n'), 'Puerta-del-Sol-Groundbreaking.ics', 'text/calendar;charset=utf-8');
    toast(copy[language].calendar);
  });

  function updateCountdown() {
    const target = new Date(config.project.groundbreaking).getTime();
    const remaining = target - Date.now();
    if (!Number.isFinite(remaining)) { $('#event-countdown').hidden = true; return; }
    const positive = Math.max(0, remaining);
    $('#countdown-days').textContent = String(Math.floor(positive / 86400000)).padStart(2, '0');
    $('#countdown-hours').textContent = String(Math.floor(positive / 3600000) % 24).padStart(2, '0');
    $('#countdown-minutes').textContent = String(Math.floor(positive / 60000) % 60).padStart(2, '0');
    $('.countdown-values').hidden = remaining <= 0;
    if (remaining <= 0) {
      $('.countdown-caption').textContent = copy[language].pastEvent;
      $('#event-title').innerHTML = language === 'en' ? 'The first step.<br><em>A brighter future.</em>' : 'El primer paso.<br><em>Un futuro brillante.</em>';
      $('.event-content>p:not(.event-subtitle)').textContent = language === 'en' ? 'The supplied invitation announced a groundbreaking for December 2, 2026. Contact the project team for the latest development updates.' : 'La invitación anunció un inicio de obra para el 2 de diciembre de 2026. Consulta con el equipo las novedades del desarrollo.';
      $('#calendar-button').hidden = true;
      $('.project-bottom>span>span:last-child').textContent = language === 'en' ? 'GROUNDBREAKING ANNOUNCED: DECEMBER 2, 2026' : 'INICIO DE OBRA ANUNCIADO: 2 DE DICIEMBRE DE 2026';
      $('.project-bottom .text-link>span').textContent = language === 'en' ? 'View ceremony details' : 'Ver detalles de la ceremonia';
    }
  }
  setInterval(updateCountdown, 30000);

  // The default form is an honest, local draft, rather than a simulated delivery.
  $('#inquiry-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const t = copy[language];
    const name = String(values.get('name') || '').trim();
    const email = String(values.get('email') || '').trim();
    const phone = String(values.get('phone') || '').trim();
    const interest = t.interest[String(values.get('interest'))] || t.interest.general;
    const message = String(values.get('message') || '').trim();
    if (!name || !message) {
      const empty = !name ? $('#full-name') : $('#message');
      empty.setCustomValidity(language === 'en' ? 'Please enter more than spaces.' : 'Escribe más que espacios.');
      empty.reportValidity();
      empty.addEventListener('input', () => empty.setCustomValidity(''), { once: true });
      return;
    }
    inquirySubject = `${t.draftTitle}: ${interest}`;
    inquiryText = `${t.draftTitle}\n\n${t.name}: ${name}\n${t.emailLabel}: ${email}\n${t.phoneLabel}: ${phone || t.notProvided}\n${t.interestLabel}: ${interest}\n\n${t.message}:\n${message}`;
    $('#inquiry-preview').textContent = inquiryText;
    const companyEmail = config.company.email;
    const validEmail = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(companyEmail || '');
    $('#inquiry-status').textContent = validEmail ? t.inquiryReady : t.inquiryUnavailable;
    $('#email-inquiry').hidden = !validEmail;
    if (validEmail) $('#email-inquiry').href = `mailto:${companyEmail}?subject=${encodeURIComponent(inquirySubject)}&body=${encodeURIComponent(inquiryText)}`;
    $('#copy-feedback').textContent = '';
    openDialog('#inquiry-dialog');
  });
  $('#copy-inquiry').addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(inquiryText);
      $('#copy-feedback').textContent = copy[language].copied;
    } catch (_) {
      $('#copy-feedback').textContent = copy[language].copyFailed;
    }
  });
  $('#download-inquiry').addEventListener('click', () => {
    downloadFile(inquiryText, 'INTERDEC-Inquiry.txt');
    $('#copy-feedback').textContent = copy[language].downloaded;
  });

  // Scroll progress and navigation use a single animation frame per scroll event.
  let pendingFrame = false;
  function renderScroll() {
    const y = window.scrollY;
    $('#site-header').classList.toggle('scrolled', y > 15);
    const total = document.documentElement.scrollHeight - window.innerHeight;
    $('.reading-progress span').style.width = `${total > 0 ? Math.min(100, (y / total) * 100) : 0}%`;
    pendingFrame = false;
  }
  addEventListener('scroll', () => {
    if (!pendingFrame) { pendingFrame = true; requestAnimationFrame(renderScroll); }
  }, { passive: true });
  addEventListener('resize', renderScroll, { passive: true });
  renderScroll();

  if ('IntersectionObserver' in window) {
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion) {
      document.body.classList.add('motion-ready');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -15px 0px' });
      $$('.reveal').forEach(element => observer.observe(element));
    }
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$('.desktop-nav a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-15% 0px -60% 0px' });
    $$('main section[id]').forEach(section => sectionObserver.observe(section));
  }

  // Support exclusive accordion behavior in browsers without details[name].
  $$('.process-step').forEach(step => step.addEventListener('toggle', () => {
    if (step.open) $$('.process-step').forEach(other => { if (other !== step) other.open = false; });
  }));

  $('#copyright-year').textContent = new Date().getFullYear();
  $('.form-submit').disabled = false;
  let storedLanguage = 'en';
  try { storedLanguage = localStorage.getItem('interdec-language') || 'en'; } catch (_) { /* No persistent data required. */ }
  applyLanguage(storedLanguage);
})();
