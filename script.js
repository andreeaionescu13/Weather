let findButton = document.querySelector("#findButton");
let cityName = document.querySelector("#cityName");
let grid = document.getElementById("grid");
let appID = "40ae0e9660e55a0f9b5ca8bb29d2bac3";

let weatherDescription = document.querySelector("#weatherDescription");
let temp = document.querySelector("#temp")
let feelsLike = document.querySelector("#feelsLike")
let windSpeed = document.querySelector("#windSpeed");
let humidity = document.querySelector("#humidity");

function getWeatherAPI() {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=${appID}`;
    console.log(apiURL)
    fetch(apiURL)
    .then(response => 
        response.json()
    )
    .then(data => {
        weatherDescription.innerHTML = data.weather[0].description;
        temp.innerHTML = `${parseInt(data.main.temp, 32)}° C`;
        windSpeed.innerHTML = `${data.wind.speed} m/s`;
        humidity.innerHTML = `${data.main.humidity}%`
        feelsLike.innerHTML = `${data.main.feels_like | 0}º C`

    })

    grid.style.opacity = 1.0
}

findButton.addEventListener("click", getWeatherAPI);