// ===== TIMER FUNCTIONALITY =====
let timeInterval;
let isRunning = false;

const timerMinsMain = document.getElementById("timer-mins-main");
const timerSecsMain = document.getElementById("timer-secs-main");
const timerStartMain = document.getElementById("timer-start-main");
const timerResetMain = document.getElementById("timer-reset-main");
const timerDisplayMain = document.getElementById("timer-display-main");

// Start the timer
timerStartMain.addEventListener("click", () => {
  if (isRunning) return;

  let mins = parseInt(timerMinsMain.value) || 0;
  let secs = parseInt(timerSecsMain.value) || 0;

  if (mins === 0 && secs === 0) {
    alert("Please set a time!");
    return;
  }

  isRunning = true;
  timerStartMain.disabled = true;
  timerMinsMain.disabled = true;
  timerSecsMain.disabled = true;

  timeInterval = setInterval(() => {
    if (secs > 0) {
      secs--;
    } else if (mins > 0) {
      mins--;
      secs = 59;
    } else {
      clearInterval(timeInterval);
      isRunning = false;
      timerStartMain.disabled = false;
      timerMinsMain.disabled = false;
      timerSecsMain.disabled = false;
      alert("Time is up!");
      return;
    }

    timerMinsMain.value = String(mins).padStart(2, "0");
    timerSecsMain.value = String(secs).padStart(2, "0");
    timerDisplayMain.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, 1000);
});

// Reset the timer
timerResetMain.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timeInterval);
  timerMinsMain.value = "0";
  timerSecsMain.value = "0";
  timerDisplayMain.textContent = "0:00";
  timerStartMain.disabled = false;
  timerMinsMain.disabled = false;
  timerSecsMain.disabled = false;
});

// Validate timer inputs
[timerMinsMain, timerSecsMain].forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value > 59) {
      input.value = 59;
    } else if (input.value < 0) {
      input.value = 0;
    }
  });
});

// ===== DICE ROLLER FUNCTIONALITY =====
const diceSidesMain = document.getElementById("dice-sides-main");
const rollBtnMain = document.getElementById("roll-btn-main");
const diceResultMain = document.getElementById("dice-result-main");

// Roll the dice
rollBtnMain.addEventListener("click", () => {
  const diceSides = parseInt(diceSidesMain.value) || 6;
  const roll = Math.floor(Math.random() * diceSides) + 1;

  diceResultMain.textContent = roll;

  // Play a little animation
  rollBtnMain.style.transform = "scale(0.95)";
  setTimeout(() => {
    rollBtnMain.style.transform = "scale(1)";
  }, 100);
});

// Validate dice sides input
diceSidesMain.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    rollBtnMain.click();
  }
});
