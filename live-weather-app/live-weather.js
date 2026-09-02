let output = "live-weather";

const form0 = document.getElementById("city-form");
const input0 = document.getElementById("city-name");
const main0 = document.getElementById("hidden0");
const img0 = document.getElementById("weather-icon");
const location0 = document.getElementById("location-name");
const temperature0 = document.getElementById("temp-display");
const description0 = document.getElementById("discription");
const humidity0 = document.getElementById("humidity-val");
const wind0 = document.getElementById("wind-val");
const errorMessage = document.getElementById("error-text");

async function fetchWeatherData(city) {
  try {
    const locationResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=10&language=en&format=json`,
    );
    if (!locationResponse.ok) throw new Error("City not found");

    const locationData = await locationResponse.json();
    const location = selectLocation(city, locationData.results);
    if (!location) throw new Error("City not found");

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=ms`,
    );
    if (!weatherResponse.ok) throw new Error("Weather unavailable");

    const weatherData = await weatherResponse.json();
    updateUI(location, weatherData);
  } catch (error) {
    console.log(error.message);
    errorMessage.innerText = `City not found`;
  }
}

function updateUI(location, data) {
  main0.removeAttribute("hidden");
  location0.innerText = `${location.name}, ${location.country}`;
  temperature0.innerText = `${Math.round(data.current.temperature_2m)}°C`;
  description0.innerText = weatherDescription(data.current.weather_code);
  humidity0.innerText = `Humidity: ${data.current.relative_humidity_2m}%`;
  wind0.innerText = `Wind-speed: ${data.current.wind_speed_10m} m/s`;
  errorMessage.innerText = "";

  const weatherCode = data.current.weather_code;
  img0.src = weatherImage(weatherCode);
  img0.alt = weatherDescription(weatherCode);
}

function selectLocation(city, results = []) {
  if (results.length === 0) return null;

  const searchName = city.toLowerCase();
  const exactMatches = results.filter(
    (result) => result.name.toLowerCase() === searchName,
  );
  const matches = exactMatches.length > 0 ? exactMatches : results;

  return matches.sort((first, second) => {
    return (second.population || 0) - (first.population || 0);
  })[0];
}

function weatherDescription(code) {
  if (code === 0) return "Clear sky";
  if ([1, 2, 3].includes(code)) return "Partly cloudy";
  if ([45, 48].includes(code)) return "Foggy";
  if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
  if ([61, 63, 65, 66, 67].includes(code)) return "Rain";
  if ([71, 73, 75, 77].includes(code)) return "Snow";
  if ([80, 81, 82].includes(code)) return "Rain showers";
  if ([85, 86].includes(code)) return "Snow showers";
  if ([95, 96, 99].includes(code)) return "Thunderstorm";
  return "Current conditions";
}

function weatherImage(code) {
  const iconCodes = {
    0: "2600",
    1: "1f324",
    2: "26c5",
    3: "2601",
    45: "1f32b",
    48: "1f32b",
    51: "1f327",
    53: "1f327",
    55: "1f327",
    56: "1f327",
    57: "1f327",
    61: "1f327",
    63: "1f327",
    65: "1f327",
    66: "1f327",
    67: "1f327",
    71: "1f328",
    73: "1f328",
    75: "1f328",
    77: "1f328",
    80: "1f327",
    81: "1f327",
    82: "1f327",
    85: "1f328",
    86: "1f328",
    95: "26c8",
    96: "26c8",
    99: "26c8",
  };

  const iconCode = iconCodes[code] || "2601";
  return `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${iconCode}.svg`;
}

function onSubmit(e) {
  e.preventDefault();

  let value = input0.value.trim();
  console.log(value);

  if (value !== "") {
    fetchWeatherData(value);
  }
}

form0.addEventListener("submit", onSubmit);
