/*let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
   lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };

  let answer = prompt("Enter a city");

  function answerWeather(){
    let answerLower = answer.toLowerCase();
    if (answerLower === "paris"){
        alert(`It is currently ${(Math.round(weather.paris.temp))}°C (${Math.round(((weather.paris.temp)*1.8)+32)}°F) in Paris with a humidity of ${weather.paris.humidity}%`)
      } else if (answerLower === "tokyo") {
        alert(`It is currently ${(Math.round(weather.tokyo.temp))}°C (${Math.round(((weather.tokyo.temp)*1.8)+32)}°F) in Tokyo with a humidity of ${weather.tokyo.humidity}%`)
      } else if (answerLower === "lisbon") {
        alert(`It is currently ${(Math.round(weather.lisbon.temp))}°C (${Math.round(((weather.lisbon.temp)*1.8)+32)}°F) in Lisbon with a humidity of ${weather.lisbon.humidity}%`)
      } else if (answerLower === "san francisco") {
        alert(`It is currently ${(Math.round(weather["san francisco"].temp))}°C (${Math.round(((weather["san francisco"].temp)*1.8)+32)}°F) in San Francisco with a humidity of ${weather["san francisco"].humidity}%`)
      } else if (answerLower === "oslo") {
        alert(`It is currently ${(Math.round(weather.oslo.temp))}°C (${Math.round(((weather.oslo.temp)*1.8)+32)}°F) in Oslo with a humidity of ${weather.oslo.humidity}%`)
      } else {
        alert (`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${answer}`)
      };
  }

  answerWeather(answer);*/
function newCity(event) {
  event.preventDefault();

  function searchTemperature(response) {
    let city = response.data.city;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = city;

    let currentTemperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector(
      ".temperature .number"
    );
    temperatureElement.innerHTML = currentTemperature;
  }

  let apiKey = "3e46b86b8308faao2ct16f0ddbe04ffa";
  let searchInputElement = document.querySelector("#city-input");
  let city = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchTemperature);
  /*event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;*/

}

function formatDay(date) {
  let todayNumber = now.getDay();
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayWeek = weekdays[todayNumber];
  return `${dayWeek}`
}


function formatTime(date) {
  let hour = now.getHours();
  let minutes = now.getMinutes();
  return `${hour}:${minutes}`
}

let city = document.querySelector("form")
city.addEventListener("submit", newCity)

let timeElement = document.querySelector("#time");
let dayElement = document.querySelector("#day");
let now = new Date();

dayElement.innerHTML = formatDay(now);
timeElement.innerHTML = formatTime(now);

