document.querySelectorAll('.comparison').forEach((comparison) => {
  const input = comparison.querySelector('.comparison-input');
  const update = () => comparison.style.setProperty('--split', `${input.value}%`);
  input.addEventListener('input', update);
  const position = (event) => {
    const rect = comparison.getBoundingClientRect();
    input.value = Math.round(Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100)));
    update();
  };
  let dragging = false;
  input.addEventListener('pointerdown', (event) => {
    dragging = true;
    input.setPointerCapture(event.pointerId);
    position(event);
  });
  input.addEventListener('pointermove', (event) => { if (dragging) position(event); });
  input.addEventListener('pointerup', () => { dragging = false; });
  input.addEventListener('pointercancel', () => { dragging = false; });
  update();
});
