const counterElement = document.getElementById("counter");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");

let counterCount = 0;

plusButton.addEventListener("click", () => {
  counterCount = counterCount + 1;
  counterElement.textContent = counterCount;
});

minusButton.addEventListener("click", () => {
  counterCount = counterCount - 1;
  counterElement.textContent = counterCount;
});
