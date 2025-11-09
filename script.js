const container = document.getElementById('container');
const cubes = document.querySelectorAll('.cube');

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach((cube, index) => {
  // Position cubes in grid initially
  const cols = 3;
  const gap = 10;
  const size = 100;
  const startX = 10;
  const startY = 10;
  const row = Math.floor(index / cols);
  const col = index % cols;
  cube.style.left = startX + col * (size + gap) + 'px';
  cube.style.top = startY + row * (size + gap) + 'px';

  // Mousedown → start dragging
  cube.addEventListener('mousedown', (e) => {
    activeCube = cube;
    offsetX = e.clientX - cube.offsetLeft;
    offsetY = e.clientY - cube.offsetTop;
    cube.style.transition = 'none'; // disable smooth effect while dragging
  });
});

document.addEventListener('mousemove', (e) => {
  if (!activeCube) return;

  const containerRect = container.getBoundingClientRect();
  const cubeRect = activeCube.getBoundingClientRect();

  let newLeft = e.clientX - offsetX;
  let newTop = e.clientY - offsetY;

  // Boundaries
  const minX = 0;
  const minY = 0;
  const maxX = container.clientWidth - cubeRect.width;
  const maxY = container.clientHeight - cubeRect.height;

  if (newLeft < minX) newLeft = minX;
  if (newTop < minY) newTop = minY;
