/* Puerta del Sol measurements from the November 2026 package; commercial status updated November 19, 2026.
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
    width: card.dataset.width ? Number(card.dataset.width) : null,
    depth: card.dataset.depth ? Number(card.dataset.depth) : null,
    planArea: card.dataset.planArea && Number(card.dataset.planArea) !== Number(card.dataset.area) ? Number(card.dataset.planArea) : null,
  }));
  let selectedLot = null;
  const language = () => document.documentElement.lang === 'es' ? 'es' : 'en';
  const text = (en, es) => language() === 'es' ? es : en;
  const number = value => new Intl.NumberFormat(language() === 'es' ? 'es-MX' : 'en-US').format(value);
  const typeLabel = lot => lot.type === 'residential' ? text('Residential', 'Residencial') : text('Commercial', 'Comercial');
  const statusLabel = lot => lot.status === 'sold' ? text('Sold', 'Vendido') : lot.status === 'reserved' ? text('Reserved', 'Apartado') : text('Available', 'Disponible');
  const dimensionsLabel = lot => lot.width && lot.depth
    ? text(`${lot.width}′ × ${lot.depth}′`, `${lot.width} × ${lot.depth} pies`)
    : text('Width and depth are not listed in the package.', 'El paquete no indica medidas de frente y fondo.');
  const areaLabel = lot => `${lot.width && lot.depth ? text('Approx. ', 'Aprox. ') : ''}${number(lot.area)} ${text('sq ft', 'pies²')}`;

  function filter() {
    const term = search.value.trim().replace(/^(?:lote|lot)\s*/i, '');
    const requestedNumber = /^\d+$/.test(term) ? Number(term) : null;
    let count = 0;
    lots.forEach(lot => {
      const visible = (type.value === 'all' || type.value === lot.type)
        && (status.value === 'all' || status.value === lot.status)
        && (!term || requestedNumber === lot.number);
      lot.card.closest('.lots-item').hidden = !visible;
      lot.card.setAttribute('aria-label', text(`Lot ${String(lot.number)}, ${typeLabel(lot)}, ${statusLabel(lot)}. ${dimensionsLabel(lot)} · ${areaLabel(lot)}. View details.`, `Lote ${String(lot.number)}, ${typeLabel(lot)}, ${statusLabel(lot)}. ${dimensionsLabel(lot)} · ${areaLabel(lot)}. Ver detalles.`));
      if (visible) count++;
    });
    results.textContent = text(`${count} of 52 lots`, `${count} lotes de 52`);
    empty.hidden = count !== 0;
  }

  function populateDetails(lot) {
    selectedLot = lot;
    document.querySelector('#lot-dialog-title').textContent = text('Lot ', 'Lote ') + String(lot.number);
    const label = document.querySelector('#detail-status');
    label.textContent = `${statusLabel(lot)} · ${lot.status === 'sold' ? text('November 19, 2026', '19 de noviembre de 2026') : text('November 2026', 'Noviembre de 2026')}`;
    label.className = `lot-status ${lot.status}`;
    document.querySelector('#detail-type').textContent = typeLabel(lot);
    document.querySelector('#detail-dimensions').textContent = dimensionsLabel(lot);
    document.querySelector('#detail-size').textContent = areaLabel(lot);
    document.querySelector('#detail-plan-row').hidden = !lot.planArea;
    document.querySelector('#detail-plan-size').textContent = lot.planArea ? `${number(lot.planArea)} ${text('sq ft', 'pies²')}` : '';
    document.querySelector('#detail-price').textContent = lot.type === 'commercial'
      ? text('Sold. Contact the team about other lot opportunities.', 'Vendido. Consulta con el equipo sobre otras oportunidades de lotes.')
      : text('Package launch prices: $55,000 cash / $57,000 financed. First-10-lot terms apply; confirm current pricing.', 'Precios de lanzamiento del paquete: $55,000 al contado / $57,000 financiado. Aplican condiciones de los primeros 10 lotes; confirma el precio actual.');
    document.querySelector('#lot-detail-note').textContent = text('Source: November 2026 lot package, inventory page 5 and proposed plan page 4. Where the plan lists a different area, both supplied figures are shown. Confirm current availability, final recorded measurements, and purchase terms with the project team.', 'Fuente: paquete de lotes de noviembre de 2026, inventario de la página 5 y plano propuesto de la página 4. Cuando el plano indica una superficie distinta, se muestran ambos datos publicados. Confirma disponibilidad actual, medidas finales registradas y condiciones de compra con el equipo del proyecto.');
    if (lot.status === 'sold') document.querySelector('#lot-detail-note').textContent += text(' Commercial status updated by the company on November 19, 2026.', ' Estatus comercial actualizado por la empresa el 19 de noviembre de 2026.');
    const inquiryURL = new URL('index.html', location.href);
    inquiryURL.searchParams.set('lot', String(lot.number));
    inquiryURL.hash = 'contact';
    document.querySelector('#lot-detail-inquiry').href = inquiryURL.href;
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
