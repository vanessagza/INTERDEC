/* Progressive visual enhancements. The site and its controls work without this file. */
(() => {
  'use strict';

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const desktop = matchMedia('(min-width: 901px)');
  const hero = document.querySelector('.hero');
  const ribbon = document.querySelector('.type-ribbon');
  const visual = document.querySelector('.project-visual');
  const buttons = [...document.querySelectorAll('.button')];
  if (!hero) return;

  // Delays belong to existing reveal nodes, not translated text or new hidden content.
  document.querySelectorAll('.intro-grid, .section-heading, .approach-left').forEach(group => {
    group.querySelectorAll('.reveal').forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 85, 255)}ms`);
    });
  });

  let heroVisible = true;
  let ribbonVisible = true;
  let ribbonFrame = 0;
  let frame = 0;
  let shift = 0;
  let targetShift = 0;
  let pointerX = 68;
  let pointerY = 44;
  let targetX = 68;
  let targetY = 44;
  let panelAnimation;
  // Read media queries when preferences change, rather than polling each frame.
  let motionAllowed = !reduced.matches;
  let desktopAllowed = desktop.matches;
  let precisionAllowed = finePointer.matches;

  const enabled = () => motionAllowed && !document.hidden;
  const parallaxEnabled = () => enabled() && desktopAllowed && precisionAllowed;
  const pointerEnabled = () => parallaxEnabled() && precisionAllowed;

  function render() {
    frame = 0;
    if (!parallaxEnabled() || !heroVisible) return;
    shift += (targetShift - shift) * 0.12;
    pointerX += (targetX - pointerX) * 0.09;
    pointerY += (targetY - pointerY) * 0.09;
    hero.style.setProperty('--hero-shift', `${shift.toFixed(2)}px`);
    hero.style.setProperty('--pointer-x', `${pointerX.toFixed(2)}%`);
    hero.style.setProperty('--pointer-y', `${pointerY.toFixed(2)}%`);
    // Move the image itself as well as the light so the depth follows the pointer.
    hero.style.setProperty('--hero-pointer-x', `${((50 - pointerX) * .48).toFixed(2)}px`);
    hero.style.setProperty('--hero-pointer-y', `${((50 - pointerY) * .28).toFixed(2)}px`);
    if (Math.abs(targetShift - shift) > 0.1 || Math.abs(targetX - pointerX) > 0.08 || Math.abs(targetY - pointerY) > 0.08) {
      frame = requestAnimationFrame(render);
    }
  }

  function schedule() {
    if (!frame && parallaxEnabled() && heroVisible) frame = requestAnimationFrame(render);
  }

  function onScroll() {
    if (ribbon && ribbonVisible && enabled() && !ribbonFrame) {
      // Scroll supplies the only clock: no continuous marquee or idle animation.
      ribbonFrame = requestAnimationFrame(() => {
        ribbonFrame = 0;
        if (!enabled() || !ribbonVisible) return;
        const bounds = ribbon.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (innerHeight - bounds.top) / (innerHeight + bounds.height)));
        ribbon.style.setProperty('--ribbon-shift', `${(80 - progress * 160).toFixed(2)}px`);
      });
    }
    if (!parallaxEnabled() || !heroVisible) return;
    const bounds = hero.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, -bounds.top / bounds.height));
    targetShift = progress * 95;
    hero.style.setProperty('--hero-progress', progress.toFixed(3));
    schedule();
  }

  hero.addEventListener('pointermove', event => {
    if (!pointerEnabled() || event.pointerType === 'touch') return;
    const bounds = hero.getBoundingClientRect();
    targetX = (event.clientX - bounds.left) / bounds.width * 100;
    targetY = (event.clientY - bounds.top) / bounds.height * 100;
    schedule();
  }, { passive: true });
  hero.addEventListener('pointerleave', () => {
    if (!pointerEnabled()) return;
    targetX = 68;
    targetY = 44;
    schedule();
  });

  function resetButton(button) {
    button.style.removeProperty('--magnet-x');
    button.style.removeProperty('--magnet-y');
  }

  buttons.forEach(button => {
    button.addEventListener('pointermove', event => {
      if (!pointerEnabled() || event.pointerType === 'touch' || button.disabled) return;
      const bounds = button.getBoundingClientRect();
      const x = Math.max(-5, Math.min(5, (event.clientX - bounds.left - bounds.width / 2) * 0.045));
      const y = Math.max(-4, Math.min(4, (event.clientY - bounds.top - bounds.height / 2) * 0.12));
      button.style.setProperty('--magnet-x', `${x.toFixed(2)}px`);
      button.style.setProperty('--magnet-y', `${y.toFixed(2)}px`);
    }, { passive: true });
    ['pointerleave', 'blur', 'click'].forEach(name => button.addEventListener(name, () => resetButton(button)));
  });

  function resetVisual() {
    if (!visual) return;
    ['--tilt-x', '--tilt-y', '--visual-x', '--visual-y'].forEach(property => visual.style.removeProperty(property));
  }

  if (visual) {
    visual.addEventListener('pointermove', event => {
      if (!pointerEnabled() || event.pointerType === 'touch') return;
      const bounds = visual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      visual.style.setProperty('--tilt-x', `${((0.5 - y) * 10).toFixed(2)}deg`);
      visual.style.setProperty('--tilt-y', `${((x - 0.5) * 10).toFixed(2)}deg`);
      visual.style.setProperty('--visual-x', `${(x * 100).toFixed(2)}%`);
      visual.style.setProperty('--visual-y', `${(y * 100).toFixed(2)}%`);
    }, { passive: true });
    visual.addEventListener('pointerleave', resetVisual);
  }

  const lotPanel = document.querySelector('.lot-panel');
  function transitionPanel(event) {
    if (!enabled() || !lotPanel || !lotPanel.animate) return;
    if (event.type === 'keydown' && !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    if (panelAnimation) panelAnimation.cancel();
    panelAnimation = lotPanel.animate([
      { opacity: 0.45, transform: 'translateY(7px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ], { duration: 320, easing: 'cubic-bezier(.2,.65,.25,1)' });
  }
  document.querySelectorAll('.project-tab').forEach(tab => {
    tab.addEventListener('click', transitionPanel);
    tab.addEventListener('keydown', transitionPanel);
  });

  if ('IntersectionObserver' in window) {
    const visibility = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
        if (entry.target === hero) {
          heroVisible = entry.isIntersecting;
          if (heroVisible) onScroll();
          else if (frame) { cancelAnimationFrame(frame); frame = 0; }
        }
        if (entry.target === ribbon) {
          ribbonVisible = entry.isIntersecting;
          if (ribbonVisible) onScroll();
          else if (ribbonFrame) { cancelAnimationFrame(ribbonFrame); ribbonFrame = 0; }
        }
      });
    }, { threshold: 0 });
    visibility.observe(hero);
    if (ribbon) visibility.observe(ribbon);
    const approach = document.querySelector('.approach');
    if (approach) visibility.observe(approach);
  }

  function syncPreferences() {
    motionAllowed = !reduced.matches;
    desktopAllowed = desktop.matches;
    precisionAllowed = finePointer.matches;
    document.body.classList.toggle('effects-ready', motionAllowed);
    if (frame) { cancelAnimationFrame(frame); frame = 0; }
    if (ribbonFrame) { cancelAnimationFrame(ribbonFrame); ribbonFrame = 0; }
    if (!enabled() && ribbon) ribbon.style.removeProperty('--ribbon-shift');
    buttons.forEach(resetButton);
    resetVisual();
    if (!parallaxEnabled()) {
      shift = targetShift = 0;
      pointerX = targetX = 68;
      pointerY = targetY = 44;
      ['--hero-shift', '--hero-progress', '--pointer-x', '--pointer-y', '--hero-pointer-x', '--hero-pointer-y'].forEach(property => hero.style.removeProperty(property));
    }
    if (panelAnimation && !motionAllowed) panelAnimation.cancel();
    onScroll();
  }

  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  document.addEventListener('visibilitychange', syncPreferences);
  [reduced, finePointer, desktop].forEach(query => query.addEventListener('change', syncPreferences));
  syncPreferences();
})();
