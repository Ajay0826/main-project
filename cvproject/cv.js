console.log("toggle button");

const togglebtn = document.querySelector(".toggle");
const body = document.querySelector("body");

let isDarkMode = false;

function ontoggle(e) {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.classList.add("dark-mode");
    togglebtn.innerText = "Light Mode";
  } else {
    body.classList.remove("dark-mode");
    togglebtn.innerText = "Dark Mode";
  }
}

togglebtn.addEventListener("click", ontoggle);
