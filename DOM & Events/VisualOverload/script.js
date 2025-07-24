function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createBox() {
  debugger;
  const box = document.createElement("div");
  box.className = "box";
  box.onmouseenter = () => {
    box.style.backgroundColor = getRandomRgbColor();
  };
  document.getElementById("container").appendChild(box);
}

for (let i = 0; i < 10; i++) {
  createBox();
}
