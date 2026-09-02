let output = 0;
let operator = null;
let num = 0;
let num1 = 0;
let str;
let isNewNumber = false;

// Wait for DOM to be ready
function initCalculator() {
  const numbers = document.querySelector(".numbers");
  const operators = document.querySelector(".operators");
  const enter = document.querySelector("#enter");
  const clear = document.querySelector("#clear");
  const display = document.querySelector(".display h1");

  if (!numbers || !operators || !enter || !clear || !display) {
    console.error("Calculator elements not found");
    return;
  }

  function onclick(e) {
    const clickedElement = e.target;
    if (
      clickedElement.classList.contains("item") &&
      clickedElement.id !== "enter" &&
      clickedElement.id !== "clear"
    ) {
      str = clickedElement.textContent;

      if (isNewNumber) {
        num1 = parseFloat(str);
        isNewNumber = false;
      } else if (operator !== null) {
        num1 = num1 * 10 + parseFloat(str);
      } else {
        num = num * 10 + parseFloat(str);
      }

      display.textContent = operator !== null ? num1 : num;
    }
  }

  function onClickop(e) {
    const clickedElement = e.target;
    if (clickedElement.classList.contains("opitem")) {
      // If we already have an operation pending, calculate it first
      if (operator !== null && num1 !== 0) {
        calculateResult();
      } else {
        output = num;
      }

      operator = clickedElement.textContent;
      num = output;
      isNewNumber = true;
      display.textContent = `${num} ${operator}`;
    }
  }

  function calculateResult() {
    if (operator === "+") {
      output = num + num1;
    } else if (operator === "-") {
      output = num - num1;
    } else if (operator === "*") {
      output = num * num1;
    } else if (operator === "/") {
      if (num1 === 0) {
        output = "Error: Division by 0";
      } else {
        output = num / num1;
      }
    } else {
      output = num;
    }
  }

  function onEnter(e) {
    e.stopPropagation();
    if (operator !== null) {
      calculateResult();
      display.textContent = output;
      num = output;
      num1 = 0;
      operator = null;
      isNewNumber = true;
    }
  }

  function onClear(e) {
    e.stopPropagation();
    num = 0;
    num1 = 0;
    operator = null;
    output = 0;
    isNewNumber = false;
    display.textContent = "0";
  }

  // Add event listeners
  numbers.addEventListener("click", onclick);
  operators.addEventListener("click", onClickop);
  enter.addEventListener("click", onEnter);
  clear.addEventListener("click", onClear);
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCalculator);
} else {
  initCalculator();
}
