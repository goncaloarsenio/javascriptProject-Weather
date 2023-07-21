const apiKey = "adf94a16b8141d3320d90e30c9344844";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {

      let data = await response.json();
    
      document.querySelector(".city").innerHTML = data.name;
    
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºc";
    
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
      document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main == "ClMistear") {
        weatherIcon.src = "images/mist.png";
      }
    
      document.querySelector(".weather").style.display = "Block";
      document.querySelector(".error").style.display = "none";
  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
