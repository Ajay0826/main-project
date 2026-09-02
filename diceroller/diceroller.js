const diceCountInput = document.getElementById("dice-count");
const diceSidesSelect = document.getElementById("dice-sides");
const rollBtn = document.getElementById("roll-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDisplay = document.getElementById("results-display");
const totalSpan = document.getElementById("total");

// Roll the dice
rollBtn.addEventListener("click", () => {
  const diceCount = parseInt(diceCountInput.value) || 1;
  const diceSides = parseInt(diceSidesSelect.value) || 6;

  // Clear previous results
  resultsDisplay.innerHTML = "";

  let total = 0;
  const results = [];

  // Roll each die
  for (let i = 0; i < diceCount; i++) {
    const roll = Math.floor(Math.random() * diceSides) + 1;
    results.push(roll);
    total += roll;

    // Create result element
    const resultEl = document.createElement("div");
    resultEl.classList.add("dice-result");
    resultEl.textContent = roll;
    resultsDisplay.appendChild(resultEl);
  }

  // Update total
  totalSpan.textContent = total;

  // Play a little animation
  rollBtn.style.transform = "scale(0.95)";
  setTimeout(() => {
    rollBtn.style.transform = "scale(1)";
  }, 100);
});

// Clear results
clearBtn.addEventListener("click", () => {
  resultsDisplay.innerHTML =
    '<p class="no-result">Roll the dice to see results!</p>';
  totalSpan.textContent = "0";
  diceCountInput.value = "1";
  diceSidesSelect.value = "6";
});

// Allow Enter key to roll
[diceCountInput, diceSidesSelect].forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      rollBtn.click();
    }
  });
});

// Validate dice count input
diceCountInput.addEventListener("input", () => {
  if (diceCountInput.value > 20) {
    diceCountInput.value = 20;
  } else if (diceCountInput.value < 1) {
    diceCountInput.value = 1;
  }
});
