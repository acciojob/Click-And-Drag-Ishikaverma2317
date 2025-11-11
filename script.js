const cubes = document.querySelectorAll(".cube");
const container = document.querySelector(".container");

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

// Set cubes in grid positions initially
let index = 0;
cubes.forEach(cube => {
  const row = Math.floor(index / 2);
  const col = index % 2;
  cube.style.left = `${col * 100 + 20}px`;
  cube.style.top = `${row * 100 + 20}px`;
  index++;
});

// Handle drag start
cubes.forEach(cube => {
  cube.addEventListener("mousedown", (e) => {
    activeCube = cube;
    offsetX = e.clientX - cube.offsetLeft;
    offsetY = e.clientY - cube.offsetTop;
  });
});

// Handle dragging
document.addEventListener("mousemove", (e) => {
  if (!activeCube) return;

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  // Boundary limits
  const containerRect = container.getBoundingClientRect();
  const cubeRect = activeCube.getBoundingClientRect();

  const minX = 0;
  const minY = 0;
  const maxX = container.clientWidth - cubeRect.width;
  const maxY = container.clientHeight - cubeRect.height;

  // Keep cube inside the container
  if (x < minX) x = minX;
  if (y < minY) y = minY;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  activeCube.style.left = `${x}px`;
  activeCube.style.top = `${y}px`;
});

// Handle mouse release
document.addEventListener("mouseup", () => {
  activeCube = null;
});
