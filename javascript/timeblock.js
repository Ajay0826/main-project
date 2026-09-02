// console.log("working ");

const timeSection = document.querySelector(".timeblock ");

///////
/////////

setInterval(() => {
  const time = new Date();
  let output = time
    .toLocaleTimeString("eng-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .toUpperCase();
  let week = time.toLocaleDateString("eng-IN", {
    weekday: "long",
  });
  let date = time.toLocaleDateString("eng-IN", {
    year: "numeric",

    month: "long",
    day: "numeric",
  });
  timeSection.innerHTML = `<h2>${output}</h2> <p>${week}, ${date}</p>`;
}, 1000);

//

//
