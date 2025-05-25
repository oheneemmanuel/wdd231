

window.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById("LastModified").textContent = `Last Modified: ${lastModified}`;

    const Button = document.getElementById("menu");

    const menu = document.getElementById("animate-me");

    Button.addEventListener('click', () => {
        menu.classList.toggle("show");
        Button.classList.toggle("show");
    
    
    
    });
    const town = document.querySelector("#town")
    const currentTemp = document.querySelector("#current-temp");
    const humidity = document.querySelector("#humidity");
    const highTemp = document.querySelector("#high-temp");
    const lowTemp = document.querySelector("#low-temp");
    const sunrise = document.querySelector("#sunrise");
    const sunset = document.querySelector("#sunset"); 
    const weatherIcon = document.querySelector("#weather-icon");
    const captionDesk = document.querySelector("figcaption");
   
    const key = "de51876f343744d0df6244d55487df4f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=7.33&lon=-2.31&units=metric&appid=${key}`;
    
    async function getWeatherData() {
        try{
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                displayResults(data);
                console.log(data);
            } else {
                throw Error(await response.text());
            }

        } catch (error) {
            console.log(error);
        }
        
    }
    getWeatherData();
    
    function displayResults(data) {
        town.innerHTML = data.name;
        const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        currentTemp.innerHTML = `${data.main.temp}&deg;C`;
        humidity.innerHTML = `${data.main.humidity}%`;
        highTemp.innerHTML = `${data.main.temp_max}&deg;`;
        lowTemp.innerHTML = `${data.main.temp_min}&deg;`;
        sunrise.innerHTML = `${sunriseTime}`;
        sunset.innerHTML = `${sunsetTime}`;

        
        const iconscr = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        
        weatherIcon.setAttribute('src', iconscr);
        weatherIcon.setAttribute('alt', desc);
        captionDesk.textContent = `${desc}`;
    
        
        

        

        



        
    }
    
})