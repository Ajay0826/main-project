let timeInterval;
let isRunning = false;

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

// Start the timer
startBtn.addEventListener("click", () => {
  if (isRunning) return;

  let hours = parseInt(hoursInput.value) || 0;
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    alert("Please set a time!");
    return;
  }

  isRunning = true;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  hoursInput.disabled = true;
  minutesInput.disabled = true;
  secondsInput.disabled = true;

  timeInterval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    } else {
      clearInterval(timeInterval);
      isRunning = false;
      startBtn.disabled = false;
      pauseBtn.disabled = true;
      hoursInput.disabled = false;
      minutesInput.disabled = false;
      secondsInput.disabled = false;
      alert("Time is up!");
      return;
    }

    hoursInput.value = String(hours).padStart(2, "0");
    minutesInput.value = String(minutes).padStart(2, "0");
    secondsInput.value = String(seconds).padStart(2, "0");
  }, 1000);
});

// Pause the timer
pauseBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timeInterval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

// Reset the timer
resetBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timeInterval);
  hoursInput.value = "0";
  minutesInput.value = "0";
  secondsInput.value = "0";
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  hoursInput.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
});

// Allow only numeric input
[hoursInput, minutesInput, secondsInput].forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value > 59 && input !== hoursInput) {
      input.value = 59;
    } else if (input.value < 0) {
      input.value = 0;
    }
  });
});
