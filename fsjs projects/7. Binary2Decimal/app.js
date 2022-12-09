const input = document.getElementById("binary");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const form = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  result.textContent = `Decimal Number : ${parseInt(input.value, 2)}`;
});
