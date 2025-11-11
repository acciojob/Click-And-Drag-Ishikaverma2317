const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let selectedCube = null;
let offsetX, offsetY;

// Place cubes in grid initially
const startPositions = [
  { x: 50, y: 50 },
  { x: 200, y: 50 },
  { x: 350, y: 50 },
  { x: 50, y: 200 },
  { x: 200, y: 200 },
  { x: 350, y: 200 },
];

cubes.forEach((cube, index) => {
  cube.style.left = `${startPositions[index].x}px`;
  cube.style.top = `${startPositions[index].y}px`;

  // When user clicks (mousedown)
  cube.addEventListener("mousedown", (e) => {
    selectedCube = cube;
    const rect = cube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    cube.style.transition = "none"; // disable smooth transition during drag
  });
});

// When user moves mouse
document.addEventListener("mousemove", (e) => {
  if (!selectedCube) return;

  const containerRect = container.getBoundingClientRect();
  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Boundary constraints
  const cubeWidth = selectedCube.offsetWidth;
  const cubeHeight = selectedCube.offsetHeight;

  x = Math.max(0, Math.min(x, containerRect.width - cubeWidth));
  y = Math.max(0, Math.min(y, containerRect.height - cubeHeight));

  selectedCube.style.left = `${x}px`;
  selectedCube.style.top = `${y}px`;
});

// When user releases mouse
document.addEventListener("mouseup", () => {
  if (selectedCube) {
    selectedCube.style.transition = "transform 0.15s ease"; // enable smooth drop
    selectedCube = null;
  }
});
