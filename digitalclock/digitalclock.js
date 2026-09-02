let output = 0;
setInterval(() => {
  const date = new Date();

  output = date.toLocaleTimeString("en-IN");

  const display = document.querySelector(".display ");
  display.firstChild.textContent = date.toLocaleDateString("en-IN", {
    weekday: "short",
  });
  display.children[0].textContent = output;
  display.children[1].textContent = `Date: ${date.toLocaleDateString("en-IN")}`;
  /* console.log(output); */
}, 1000);
