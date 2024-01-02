
const temp = document.querySelector('#temp');
const cityName = document.querySelector('#city');
const time = document.querySelector('#time');
const WeatherImage = document.querySelector('#WeatherImage')
const maxTemp = document.querySelector('#max-temp');
const minTemp = document.querySelector('#min-temp')
const humidity = document.querySelector('#humidity');
const feel = document.querySelector('#pressure');
const wind = document.querySelector('#wind');
const search = document.querySelector('#search');
const discription = document.querySelector('#discription');

const fetchWeather = async (city) => {
    let date = new Date();
    const APIkey = '86f60f58f0e04aabf2a4d950d3b57933';
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const res = await fetch(url + city + `&appid=${APIkey}`)
    const data = await res.json();
    temp.innerHTML = Math.round(data.main.temp) + "°";
    cityName.innerHTML = data.name;
    time.textContent = date.toLocaleString('en-UK', { timeZoneName: 'short' });
    maxTemp.innerHTML = Math.round(data.main.temp_max) + "°";
    minTemp.innerHTML = Math.round(data.main.temp_min) + "°";
    humidity.innerHTML = Math.round(data.main.humidity) + "%";
    feel.innerHTML = Math.round(data.main.feels_like) + "°";
    wind.innerHTML = Math.round(data.wind.speed) + "km/h";
    discription.innerHTML = (data.weather[0].main).toUpperCase();
    setWeatherImage(data.weather[0].main);
    console.log(data.weather[0].main);
}
fetchWeather('lahore');

search.addEventListener('click', () => {
    const input = document.querySelector('#input').value;
    fetchWeather(input);
});

function setWeatherImage(condition) {
    if (condition === 'Rain') {
        document.querySelector('#weather').src = "/dist/images/cloud-rain-solid.svg";
    } else if (condition === 'Clouds') {
        document.querySelector('#weather').src = "/dist/images/outline.svg";
    } else if (condition === 'Mist') {
        document.querySelector('#weather').src = "/dist/images/smog-solid.svg";
    } else if (condition === 'Snow') {
        document.querySelector('#weather').src = "/dist/images/snow.svg";
    } else if (condition === 'Drizzle') {
        document.querySelector('#weather').src = "/dist/images/cloud-sun-rain-solid.svg";
    } else if (condition === 'Clear') {
        document.querySelector('#weather').src = "/dist/images/sun-solid.svg";
    }

}