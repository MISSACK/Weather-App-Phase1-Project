let weather = {
    apiKey: "1f65cb54bc5e8b957d12259ff2d446dd",
    // Getting weather from API
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
            )
            .then((response) => response.json()) // Convert response to JSON
            .then((data) => this.displayWeather(data)); // Pass the data to the displayWeather function
    }
    // getting necessary data from API response
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // Display temperature with one decimal point
        const formattedTemp = temp.toFixed(1);

        // Update the HTML elements with the fetched weather data
        document.querySelector(".city-heading").innerText = "Weather in " + name;
        document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = formattedTemp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
    }
        // Get the user input from the search bar and fetch weather data
    search: function () {
            this.fetchWeather(document.querySelector(".search-input").value);
    }      
};

// Event listener for search button click
document.querySelector(".search-button").addEventListener("click", function () {
  weather.search();
});
