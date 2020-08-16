////homework week 4
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[now.getDay()];
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}

let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = `${currentDay}, ${currentHour}:${currentMinutes}`;

//challenge 2
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

//challenge 3

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

///homework week 5
function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search1(city) {
  let apiKey = "ad19273e14806dececb4ae146fbaf1b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit1(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search1(city);
}
function retrievePosition(position) {
  let apiKey = "ad19273e14806dececb4ae146fbaf1b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}
function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

///function showTemperature(response) {
///let currentTemperature = Math.round(response.data.main.temp);
///let tempElement = document.querySelector("#temperature");
///tempElement.innerHTML = `${currentTemperature}`;
///let valueCity = response.data.name;
///let button = document.querySelector("#button");
///button.innerHTML = `${valueCity}`;
///}

///let dateElement = document.querySelector("#now");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit1);

let button = document.querySelector("#submitLocation");
button.addEventListener("click", getLocation);
