const gridContainer = document.querySelector(".grid-container");
const promptBtn = document.querySelector(".promptBtn");
const randomBtn = document.querySelector(".random");
const clearBtn = document.querySelector(".clear");
const colorPicker = document.getElementById("colorPicker");

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

// Buttons
promptBtn.addEventListener("click", setupGrid);
randomBtn.addEventListener("click", randomColor);
clearBtn.addEventListener("click", clearGrid);
colorPicker.addEventListener("change", changeColor);

function setupGrid() {
  const newSize = +prompt("Enter the new dimensions:");
  if (newSize > 100 || newSize < 1) return;
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
function randomColor() {
  const freshGridSquares = document.querySelectorAll(".grid-box");
  freshGridSquares.forEach((box) => {
    box.onmouseover = (e) => {
      box.style.backgroundColor = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    };
  });
}

function clearGrid() {
  const freshGridSquares = document.querySelectorAll(".grid-box");
  freshGridSquares.forEach((box) => {
    box.style.backgroundColor = "#f3ed61";
  });
}

function randomValue() {
  return Math.floor(Math.random() * 255);
}

function changeColor(e) {
  const freshGridSquares = document.querySelectorAll(".grid-box");
  freshGridSquares.forEach((box) => {
    box.onmouseover = () => {
      box.style.backgroundColor = e.target.value;
    };
  });
}
