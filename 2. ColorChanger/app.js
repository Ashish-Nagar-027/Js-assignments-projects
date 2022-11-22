const button = document.getElementById("button");
const canvas = document.getElementById("canvas");

let color = "#";

button.addEventListener("click", () => {
  const values = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color = color + values[Math.floor(Math.random() * 16)];
  }
  canvas.style.backgroundColor = color;
  console.log(color);
  color = "#";
});
