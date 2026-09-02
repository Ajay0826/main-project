console.log("working");

const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#message");
const dataCard = document.querySelector("#dataCard");
const dataContainer = document.querySelector("#dataContainer");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  // Get input values
  const namevalue = name.value.trim();
  const emailvalue = email.value.trim();
  const msgvalue = msg.value.trim();

  // Validate inputs
  if (!namevalue || !emailvalue || !msgvalue) {
    alert("Please fill in all fields!");
    return;
  }

  dataContainer.innerHTML = "";

  const nameDiv = document.createElement("div");
  nameDiv.className = "data-item";
  nameDiv.innerHTML = `<strong>Name:</strong> ${namevalue}`;

  const emailDiv = document.createElement("div");
  emailDiv.className = "data-item";
  emailDiv.innerHTML = `<strong>Email:</strong> ${emailvalue}`;

  const msgDiv = document.createElement("div");
  msgDiv.className = "data-item";
  msgDiv.innerHTML = `<strong>Message:</strong> ${msgvalue}`;

  // Append to data container
  dataContainer.appendChild(nameDiv);
  dataContainer.appendChild(emailDiv);
  dataContainer.appendChild(msgDiv);

  // Show the data card
  dataCard.classList.add("show");

  // Clear the form
  name.value = "";
  email.value = "";
  msg.value = "";
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  // Clear the data card
  dataCard.classList.remove("show");
  dataContainer.innerHTML = "";
  name.value = "";
  email.value = "";
  msg.value = "";
});
