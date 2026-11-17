/* Puerta del Sol inventory, transcribed from the November 2026 package.
   The page is a dated inventory reference, not a reservation or live inventory system. */
(() => {
  'use strict';
  const form = document.querySelector('#lot-filters');
  const grid = document.querySelector('#lots-grid');
  const dialog = document.querySelector('#lot-dialog');
  if (!form || !grid || !dialog) return;
  const type = document.querySelector('#lot-type');
  const status = document.querySelector('#lot-status');
  const search = document.querySelector('#lot-search');
  const results = document.querySelector('#lot-results');
  const empty = document.querySelector('#lots-empty');
  const cards = [...grid.querySelectorAll('[data-lot]')];
  const lots = cards.map(card => ({
    card,
    number: Number(card.dataset.lot),
    type: card.dataset.kind,
    status: card.dataset.status,
    area: Number(card.dataset.area),
    planArea: card.dataset.planArea ? Number(card.dataset.planArea) : null,
  }));
  let selectedLot = null;
  const language = () => document.documentElement.lang === 'es' ? 'es' : 'en';
  const text = (en, es) => language() === 'es' ? es : en;
  const number = value => new Intl.NumberFormat(language() === 'es' ? 'es-MX' : 'en-US').format(value);
  const typeLabel = lot => lot.type === 'residential' ? text('Residential', 'Residencial') : text('Commercial', 'Comercial');
  const statusLabel = lot => lot.status === 'available' ? text('Available', 'Disponible') : text('Reserved', 'Apartado');

  function filter() {
    const term = search.value.trim().replace(/^(?:lote|lot)\s*/i, '');
    const requestedNumber = /^\d+$/.test(term) ? Number(term) : null;
    let count = 0;
    lots.forEach(lot => {
      const visible = (type.value === 'all' || type.value === lot.type)
        && (status.value === 'all' || status.value === lot.status)
        && (!term || requestedNumber === lot.number);
      lot.card.closest('.lots-item').hidden = !visible;
      lot.card.setAttribute('aria-label', text(`Lot ${String(lot.number)}, ${typeLabel(lot)}, ${statusLabel(lot)} in the November 2026 package. View details.`, `Lote ${String(lot.number)}, ${typeLabel(lot)}, ${statusLabel(lot)} en el paquete de noviembre de 2026. Ver detalles.`));
      if (visible) count++;
    });
    results.textContent = text(`${count} of 52 lots`, `${count} lotes de 52`);
    empty.hidden = count !== 0;
  }

  function populateDetails(lot) {
    selectedLot = lot;
    document.querySelector('#lot-dialog-title').textContent = text('Lot ', 'Lote ') + String(lot.number);
    const label = document.querySelector('#detail-status');
    label.textContent = `${statusLabel(lot)} · ${text('November 2026', 'Noviembre de 2026')}`;
    label.className = `lot-status ${lot.status}`;
    document.querySelector('#detail-type').textContent = typeLabel(lot);
    const typical = lot.type === 'residential' && ![18, 19, 29].includes(lot.number);
    document.querySelector('#detail-size').textContent = typical
      ? text("42.5′ × 129.5′ · approximately 5,504 sq ft", "42.5 × 129.5 pies · aproximadamente 5,504 pies²")
      : `${number(lot.area)} ${text('sq ft', 'pies²')}`;
    document.querySelector('#detail-plan-row').hidden = !lot.planArea;
    document.querySelector('#detail-plan-size').textContent = lot.planArea ? `${number(lot.planArea)} ${text('sq ft', 'pies²')}` : '';
    document.querySelector('#detail-price').textContent = lot.type === 'commercial'
      ? text('Contact the project team for commercial pricing.', 'Consulta los precios comerciales con el equipo del proyecto.')
      : text('Package launch prices: $55,000 cash / $57,000 financed. First-10-lot terms apply; confirm current pricing.', 'Precios de lanzamiento del paquete: $55,000 al contado / $57,000 financiado. Aplican condiciones de los primeros 10 lotes; confirma el precio actual.');
    document.querySelector('#lot-detail-note').textContent = text('Source: November 2026 lot and builder package. Plan area labels and typical inventory dimensions can differ. Confirm current availability, the final survey, and purchase terms with the project team.', 'Fuente: paquete de lotes y constructores de noviembre de 2026. Las superficies del plano pueden diferir de las dimensiones típicas del inventario. Confirma disponibilidad actual, medidas finales y condiciones de compra con el equipo del proyecto.');
    const email = window.INTERDEC?.company?.email || 'info@interdecgroup.com';
    const subject = text(`Puerta del Sol — Lot ${lot.number} inquiry`, `Puerta del Sol — Consulta del lote ${lot.number}`);
    const body = text(`Hello INTERDEC,\n\nI am interested in Puerta del Sol lot ${lot.number} (${typeLabel(lot).toLowerCase()}). The November 2026 package lists it as ${statusLabel(lot).toLowerCase()}. Please confirm its current availability, pricing, final dimensions, and purchase terms.\n\nName:\nPhone:\n`, `Hola INTERDEC:\n\nMe interesa el lote ${lot.number} de Puerta del Sol (${typeLabel(lot).toLowerCase()}). El paquete de noviembre de 2026 lo indica como ${statusLabel(lot).toLowerCase()}. Por favor confirmen su disponibilidad actual, precio, medidas finales y condiciones de compra.\n\nNombre:\nTeléfono:\n`);
    document.querySelector('#lot-detail-inquiry').href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#lot-dialog-close').setAttribute('aria-label', text('Close lot details', 'Cerrar detalles del lote'));
  }

  grid.addEventListener('click', event => {
    const card = event.target.closest('[data-lot]');
    if (!card) return;
    const lot = lots.find(item => item.card === card);
    populateDetails(lot);
    dialog.showModal();
  });
  document.querySelector('#lot-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  form.addEventListener('submit', event => event.preventDefault());
  [type, status].forEach(control => control.addEventListener('change', filter));
  search.addEventListener('input', filter);
  form.addEventListener('reset', () => setTimeout(filter, 0));
  document.addEventListener('interdec:language', () => { filter(); if (selectedLot) populateDetails(selectedLot); });
  filter();
})();
