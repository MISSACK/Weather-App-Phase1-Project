let weather = {
    apiKey: "1f65cb54bc5e8b957d12259ff2d446dd",
    
    // Fetch weather data from the API
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => this.displayWeather(data)); // Pass the data to the displayWeather function
    },
    
    // Display weather data on the page
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
  
      // Round the temperature to one decimal place
      const roundedTemp = temp.toFixed(1);
  
      // Update the HTML elements with the fetched weather data
      document.querySelector(".city-heading").innerText = "Weather in " + name;
      document.querySelector(".weather-icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temperature").innerText = roundedTemp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind-speed").innerText =
        "Wind speed: " + speed + "km/h";
      document.querySelector(".weather").classList.remove("loading");
    },
    
    // Get the user input from the search bar and fetch weather data
    search: function () {
      this.fetchWeather(document.querySelector(".search-input").value);
    },
  };
  
  // Event listener for search button click
  document.querySelector(".search-button").addEventListener("click", function () {
    weather.search();
  });
  
  // Event listener for enter key press in search bar
  document.querySelector(".search-input").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });
  
  // Fetch weather data for the initial city (Nairobi)
  weather.fetchWeather("Nairobi");
  
  const likeButton = document.querySelector('.like-button');
  const dislikeButton = document.querySelector('.dislike-button');
  
  // Event listener for like button
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('clicked');
  
    if (likeButton.classList.contains('clicked')) {
      dislikeButton.classList.remove('clicked');
    }
  });
  
  // Event listener for dislike button
  dislikeButton.addEventListener('click', function () {
    dislikeButton.classList.toggle('clicked');
  
    if (dislikeButton.classList.contains('clicked')) {
      likeButton.classList.remove('clicked');
    }
  });
  
  // Submit comment form
  document.getElementById('comment-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const commentText = document.getElementById('comment-text').value;
  
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
  
    const commentTextElement = document.createElement('p');
    commentTextElement.classList.add('comment-text');
    commentTextElement.textContent = commentText;
    commentElement.appendChild(commentTextElement);
  
    document.getElementById('comments-container').appendChild(commentElement);
  
    document.getElementById('comment-form').reset();
  });
  