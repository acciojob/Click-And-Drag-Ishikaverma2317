const container = document.querySelector('.items');
const items = document.querySelectorAll('.item');

// Place cubes in grid initially
const cols = 5;
const size = 110; // cube + gap

items.forEach((item, i) => {
  const row = Math.floor(i / cols);
  const col = i % cols;
  item.style.left = `${col * size + 10}px`;
  item.style.top = `${row * size + 10}px`;
});

let activeItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach(item => {
  item.addEventListener('mousedown', e => {
    activeItem = item;
    offsetX = e.clientX - item.offsetLeft;
    offsetY = e.clientY - item.offsetTop;
    item.style.cursor = 'grabbing';
  });
});

document.addEventListener('mousemove', e => {
  if (!activeItem) return;

  const rect = container.getBoundingClientRect();
  let x = e.clientX - rect.left - offsetX;
  let y = e.clientY - rect.top - offsetY;

  // Boundary condition
  x = Math.max(0, Math.min(x, rect.width - activeItem.offsetWidth));
  y = Math.max(0, Math.min(y, rect.height - activeItem.offsetHeight));

  activeItem.style.left = `${x}px`;
  activeItem.style.top = `${y}px`;
});

document.addEventListener('mouseup', () => {
  if (activeItem) {
    activeItem.style.cursor = 'grab';
    activeItem = null;
  }
});
