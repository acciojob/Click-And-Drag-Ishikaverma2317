// Select elements
const items = document.querySelectorAll(".item");
const container = document.querySelector(".container");

let activeItem = null;
let offsetX = 0;
let offsetY = 0;

// Arrange cubes initially in grid
let index = 0;
items.forEach(item => {
  const row = Math.floor(index / 2);
  const col = index % 2;
  item.style.left = `${col * 120 + 40}px`;
  item.style.top = `${row * 120 + 40}px`;
  index++;
});

// When mouse pressed on cube
items.forEach(item => {
  item.addEventListener("mousedown", (e) => {
    activeItem = item;
    offsetX = e.clientX - item.offsetLeft;
    offsetY = e.clientY - item.offsetTop;
  });
});

// While moving mouse
document.addEventListener("mousemove", (e) => {
  if (!activeItem) return;

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  const containerRect = container.getBoundingClientRect();
  const itemRect = activeItem.getBoundingClientRect();

  const minX = 0;
  const minY = 0;
  const maxX = container.clientWidth - itemRect.width;
  const maxY = container.clientHeight - itemRect.height;

  // Boundary condition: stay inside box
  if (x < minX) x = minX;
  if (y < minY) y = minY;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  activeItem.style.left = `${x}px`;
  activeItem.style.top = `${y}px`;
});

// When mouse released
document.addEventListener("mouseup", () => {
  activeItem = null;
});
