/* Shared, direct Web3Forms submissions. No email application is required. */
(() => {
  'use strict';
  const endpoint = 'https://api.web3forms.com/submit';
  const accessKey = window.INTERDEC?.forms?.accessKey || '';
  const ready = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i.test(accessKey);
  const forms = [...document.querySelectorAll('form[data-web3form]')];
  const states = new Map();
  const language = () => document.documentElement.lang === 'es' ? 'es' : 'en';
  const copy = {
    en: {
      send: 'Send message', sendingLabel: 'Sending…',
      sending: 'Sending your message…',
      success: 'Thank you. Your message has been submitted to INTERDEC.',
      error: 'We couldn’t send your message right now. Your details are still here. Please try again or email info@interdecgroup.com.',
      uncertain: 'We couldn’t confirm your message was submitted. Please wait a moment before retrying, or email info@interdecgroup.com.',
      rate: 'Too many requests. Please wait a few minutes and try again, or email info@interdecgroup.com.',
      unavailable: 'This form is temporarily unavailable. Please email info@interdecgroup.com.',
      bot: 'Please reload the page and try again.',
      whitespace: 'Please enter more than spaces.',
      inquiry: 'INTERDEC — Website inquiry',
      lot: 'Puerta del Sol — Lot ',
    },
    es: {
      send: 'Enviar mensaje', sendingLabel: 'Enviando…',
      sending: 'Enviando tu mensaje…',
      success: 'Gracias. Tu mensaje se ha enviado a INTERDEC.',
      error: 'No pudimos enviar tu mensaje en este momento. Tus datos siguen aquí. Intenta de nuevo o escribe a info@interdecgroup.com.',
      uncertain: 'No pudimos confirmar el envío de tu mensaje. Espera un momento antes de intentar de nuevo o escribe a info@interdecgroup.com.',
      rate: 'Demasiadas solicitudes. Espera unos minutos e intenta de nuevo o escribe a info@interdecgroup.com.',
      unavailable: 'Este formulario no está disponible por el momento. Escribe a info@interdecgroup.com.',
      bot: 'Vuelve a cargar la página e intenta de nuevo.',
      whitespace: 'Escribe más que espacios.',
      inquiry: 'INTERDEC — Consulta desde el sitio web',
      lot: 'Puerta del Sol — Lote ',
    },
  };

  // Lot details lead to the same website form, carrying the selected lot.
  const lotParameter = new URL(location.href).searchParams.get('lot');
  const lot = /^\d+$/.test(lotParameter || '') && Number(lotParameter) >= 1 && Number(lotParameter) <= 52
    ? Number(lotParameter) : null;
  const homeForm = document.querySelector('#inquiry-form[data-web3form]');
  if (homeForm && lot) {
    homeForm.dataset.lot = String(lot);
    const context = document.createElement('p');
    context.className = 'form-intro form-lot-context';
    homeForm.querySelector('.form-intro').after(context);
    homeForm.elements.namedItem('interest').value = lot >= 50 ? 'commercial' : 'residential';
  }

  function render(form) {
    const state = states.get(form);
    const t = copy[language()];
    const button = form.querySelector('[type=submit]');
    const label = button.querySelector('[data-es]') || button;
    label.textContent = state.busy ? t.sendingLabel : t.send;
    button.disabled = state.busy || !ready;
    form.setAttribute('aria-busy', String(state.busy));
    const status = form.querySelector('.form-status');
    status.dataset.state = state.busy ? 'sending' : state.kind === 'success' ? 'success' : 'error';
    status.textContent = state.kind === 'idle' ? '' : t[state.kind];
    const context = form.querySelector('.form-lot-context');
    if (context) context.textContent = `${t.lot}${form.dataset.lot}`;
  }

  forms.forEach(form => {
    states.set(form, { busy: false, kind: ready ? 'idle' : 'unavailable' });
    form.addEventListener('input', event => {
      if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
      const state = states.get(form);
      if (!state.busy && ready && state.kind !== 'idle') {
        state.kind = 'idle';
        render(form);
      }
    });

    form.addEventListener('submit', async event => {
      event.preventDefault();
      const state = states.get(form);
      if (state.busy) return;
      if (!form.reportValidity()) return;
      const values = new FormData(form);
      for (const field of form.elements) {
        if (field.required && field.name && !String(values.get(field.name) || '').trim()) {
          field.setCustomValidity(copy[language()].whitespace);
          field.reportValidity();
          return;
        }
      }
      if (!ready || values.get('botcheck')) {
        state.kind = ready ? 'bot' : 'unavailable';
        render(form);
        form.querySelector('.form-status').focus({ preventScroll: true });
        return;
      }

      const value = name => String(values.get(name) || '').trim();
      const subjectBase = language() === 'es' ? form.dataset.subjectEs : form.dataset.subjectEn;
      const interest = form.elements.namedItem('interest');
      const interestLabel = interest?.selectedOptions?.[0]?.textContent?.trim();
      const payload = {
        access_key: accessKey,
        from_name: 'INTERDEC Website',
        subject: subjectBase || copy[language()].inquiry,
        name: value('name'),
        email: value('email'),
        replyto: value('email'),
        message: value('message'),
        botcheck: false,
        language: language(),
        page_url: location.href,
      };
      for (const name of ['phone', 'focus']) if (value(name)) payload[name] = value(name);
      if (interestLabel) {
        payload.interest = interestLabel;
        payload.subject += ` — ${interestLabel}`;
      }
      if (form.dataset.lot) {
        payload.lot = form.dataset.lot;
        payload.subject += ` — ${copy[language()].lot}${form.dataset.lot}`;
      }

      state.busy = true;
      state.kind = 'sending';
      const controls = [...form.elements].map(element => [element, element.disabled]);
      controls.forEach(([element]) => { element.disabled = true; });
      render(form);
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 20000);
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          credentials: 'omit',
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        const result = await response.json();
        if (response.ok && result?.success === true) {
          state.kind = 'success';
          form.reset();
          if (form.dataset.lot) form.elements.namedItem('interest').value = Number(form.dataset.lot) >= 50 ? 'commercial' : 'residential';
        } else state.kind = response.status === 429 ? 'rate' : 'error';
      } catch (_) {
        state.kind = 'uncertain';
      } finally {
        clearTimeout(timer);
        controls.forEach(([element, disabled]) => { element.disabled = disabled; });
        state.busy = false;
        render(form);
        form.querySelector('.form-status').focus({ preventScroll: true });
      }
    });
    render(form);
  });
  document.addEventListener('interdec:language', () => forms.forEach(render));
})();
