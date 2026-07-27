const counterElement = document.getElementById("counter");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");

let counterCount = 0;

plusButton.addEventListener("click", () => {
  console.log((counterCount = counterCount + 1));
});

minusButton.addEventListener("click", () => {
  console.log((counterCount = counterCount - 1));
});
