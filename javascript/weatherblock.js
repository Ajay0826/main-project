const weatherSection = document.querySelector(".weatherblock");

const city = "New Delhi";

async function fatchweather() {
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true";
    const response = await fetch(url);
    if (!response.ok) throw new Error("weather unavailable");

    const data = await response.json();
    console.log(data);
    updateUI(data);
  } catch (error) {
    console.log(error.message);
    weatherSection.innerText = "city unavailable";
  }
}
fatchweather();

function updateUI(data) {
  console.log(data);
  const spam = document.createElement("spam");
  const h2 = document.createElement("h2");
  const paragraph = document.createElement("p");
  spam.textContent = city;
  h2.textContent = `${data.current_weather.temperature} ${data.current_weather_units.temperature}`;
  paragraph.textContent = `wind: ${data.current_weather.windspeed}${data.current_weather_units.windspeed} , ${data.current_weather.winddirection}${data.current_weather_units.winddirection}`;

  weatherSection.appendChild(spam);
  weatherSection.appendChild(h2);
  weatherSection.appendChild(paragraph);
}
