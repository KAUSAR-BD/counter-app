const counterElement = document.getElementById("counter");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");

let counterCount = 0;

const updateCounter = (value) => {
  // plus button
  counterCount = counterCount + value;

  counterElement.textContent = counterCount;

  if (counterCount >= 10) {
    plusButton.setAttribute("disabled", true);
  } else {
    plusButton.removeAttribute("disabled", false);
  }

  // minus button
  // counterCount = counterCount - 1;

  counterElement.textContent = counterCount;

  if (counterCount <= 0) {
    minusButton.setAttribute("disabled", true);
  } else {
    minusButton.removeAttribute("disabled", false);
  }
};

plusButton.addEventListener("click", () => {
  updateCounter(1);
});

minusButton.addEventListener("click", () => {
  updateCounter(-1);
});
