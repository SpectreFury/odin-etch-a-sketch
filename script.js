const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
  const gridBox = document.createElement("div");
  gridBox.classList.add("grid-box");
  gridContainer.append(gridBox);
}
