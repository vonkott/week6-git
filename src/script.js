let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let number = date.getDate();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[date.getDay()];
let h3 = document.querySelector("h3");
h3.innerHTML = `${day}, ${hours}:${minutes}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#city");
  temperatureElement.innerHTML = `Current temperature in ${response.data.name} is`;
  temperatureNumber = document.querySelector("#temperature");
  temperatureNumber.innerHTML = `${temperature}°C`;
}

function searchCity(city) {
  let apiKey = "7a40f939c9d8e198ead993fed57b2f15";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("Kharkiv");

function searchLocation(position) {
  let apiKey = "7a40f939c9d8e198ead993fed57b2f15";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentGeoButton = document.querySelector("button.currentGeo");
currentGeoButton.addEventListener("click", getCurrentLocation);
