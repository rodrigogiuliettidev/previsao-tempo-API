const API = "2d46199fbb6f1c5250dbaf4dbb12b3bc";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search");


const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElemt = document.querySelector("#description");
const weatherIcon = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElemt = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");


// exibe os dados da API
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
    const response = await fetch(apiWeatherURL);
    const data = await response.json();

    return data;
}
const showWeatherData = async (city) => {
    const data = await getWeatherData(city);
    
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElemt.innerText = data.weather[0].description;
    weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); 
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElemt.innerText = `${data.wind.speed}Km/h`;

    weatherContainer.classList.remove("hide");
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;

    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city);
    }
})