const gridContainer = document.querySelector(".grid-container");

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
