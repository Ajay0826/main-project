const display = document.querySelector(".display h1");
const positive = document.querySelector(".plus");
const negative = document.querySelector(".negative");
const reset = document.querySelector(".reset");

let count = 0;
display.textContent = count;

function onPositive(e) {
  count++;
  display.textContent = count;
}
function onNegative(e) {
  if (count == 0) {
    count = 0;
  } else {
    count--;
  }

  display.textContent = count;
}

function reseting() {
  count = 0;
  display.textContent = count;
}

positive.addEventListener("click", onPositive);
negative.addEventListener("click", onNegative);
reset.addEventListener("click", reseting);
