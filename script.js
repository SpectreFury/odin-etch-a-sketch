const gridContainer = document.querySelector(".grid-container");
const promptBtn = document.querySelector(".promptBtn");

// Creates a grid
for (let i = 0; i < 256; i++) {
  const gridBox = document.createElement("div");
  gridBox.classList.add("grid-box");
  gridContainer.append(gridBox);
}

const gridSquares = document.querySelectorAll(".grid-box");

gridSquares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.classList.add("grey");
  });
});

promptBtn.addEventListener("click", setupGrid);

function setupGrid() {
  const newSize = +prompt("Enter the new dimensions:");
  const freshGridSquares = document.querySelectorAll(".grid-box");
  freshGridSquares.forEach((square) => {
    square.remove();
  });
  gridContainer.style.gridTemplateColumns = "1fr ".repeat(newSize).trim();
  gridContainer.style.gridTemplateRows = "1fr".repeat(newSize).trim();

  for (let i = 0; i < newSize * newSize; i++) {
    const newGridBox = document.createElement("div");
    newGridBox.classList.add("grid-box");
    newGridBox.onmouseover = () => {
      newGridBox.classList.add("grey");
    };
    newGridBox.style.width = `${Math.floor(640 / newSize)}px`;
    newGridBox.style.height = `${Math.floor(640 / newSize)}px`;
    gridContainer.appendChild(newGridBox);
  }
}
