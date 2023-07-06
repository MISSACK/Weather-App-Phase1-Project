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
}
