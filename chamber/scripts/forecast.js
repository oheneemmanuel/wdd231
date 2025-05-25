
  //const key = "de51876f343744d0df6244d55487df4f";
  
  const url = "https://api.openweathermap.org/data/2.5/forecast?lat=7.33&lon=-2.33&units=metric&appid=de51876f343744d0df6244d55487df4f";
  

async function getWeatherInfo() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    

    function displayForecast(data) {
        const foreCastContainer = document.querySelector("#today");
        const forecastDays = {};
        let daysCount = 0;

        for (const item of data.list) {
            const dateTime = item.dt_txt;
            const date = dateTime.split(" ")[0];
            const hour = dateTime.split(" ")[1];

            // get the forecast per day around midday
            if (hour ==="12:00:00" && !forecastDays[date] && daysCount < 3) {
                forecastDays[date] = item;
                daysCount++;
            }
        }

        foreCastContainer.innerHTML ="";

        for (const date in forecastDays) {
            const forecast = forecastDays[date];
            const dayName = new Date(date).toLocaleDateString(undefined, { weekday: "short"});
            const temp = forecast.main.temp.toFixed(1);
            const description = forecast.weather[0].description;

            foreCastContainer.innerHTML += `
                <div>
                    <h4>${dayName} : </h4>
                    <p>${temp}°C</p>
                    <p><strong>Weather:</strong> ${description}</p>
                    <hr>
                </div>
            `;
        }

        


    }
    
}
getWeatherInfo();
