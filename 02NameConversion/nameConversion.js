const input = document.getElementById("text");
const btn = document.getElementById("convert-btn");
const camelCase = document.getElementById("camel-case");
const pascalCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const sSnakeCase = document.getElementById("screaming-snake-case");
const kebabCase = document.getElementById("kebab-case");
const sKebabCase = document.getElementById("screaming-kebab-case");

btn.addEventListener("click", () => {
  let inputValue = input.value;

  // pascalCase convert
  pascalCase.innerText = inputValue
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join("");

  // camelCase convert
  camelCase.innerText = inputValue
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join("");

  //snake case
  snakeCase.innerText = inputValue.split(" ").join("_");

  // screaming snake case
  sSnakeCase.innerText = inputValue
    .split(" ")
    .map((word) => word.toUpperCase())
    .join("_");

  //kebab case
  kebabCase.innerText = inputValue.split(" ").join("-");

  // screaming snake case
  sKebabCase.innerText = inputValue
    .split(" ")
    .map((word) => word.toUpperCase())
    .join("-");
});
