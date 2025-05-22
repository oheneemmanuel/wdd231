const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesk = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=10.38&units=metric&appid=de51876f343744d0df6244d55487df4f";

async function getWeatherData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
        console.log(error);
    }
    
}
getWeatherData();


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconscr = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconscr)
    weatherIcon.setAttribute('alt', desc);
    captionDesk.textContent = `${desc}`;
}