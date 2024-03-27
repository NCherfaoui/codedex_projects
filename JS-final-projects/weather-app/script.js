async function fetchWeather() {
    // Étape a. Créer des variables globales et lancer les fonctions internes
    let searchInput = document.getElementById('search').value;
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.style.display = "block";

    const apiKey = "34dcb6f3e6a6ae48c8068487738cea56"


    if (searchInput == "") {
      weatherDataSection.innerHTML = `
      <div>
      <h2>Champ vide !</h2>
      <p>Veuillez réessayer avec un nom de <u>ville</u> valide.</p>
      </div>
      `;
      return;
    }

    // Étape b. Obtenir les coordonnées lat et lon via l'API de Geocoding
    async function getLonAndLat() {
      const countryCode = 33
      const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}`

      const response = await fetch(geocodeURL);
      if (!response.ok) {
        console.log("Réponse invalide ! ", response.status);
        return;
      }

      const data = await response.json();
      if (data.length == 0) {
        console.log("Quelque chose a mal tourné ici.");
        weatherDataSection.innerHTML = `
        <div>
        <h2>Entrée invalide: "${searchInput}"</h2>
        <p>Veuillez réessayer avec un nom de <u>ville</u> valide.</p>
        </div>
        `;
        return;
      } else {
        return data[0];
      }
    }

    async function getWeatherData(lon, lat) {
      // Étape c. Obtenir les informations météo via l'API de données actuelles
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      const response = await fetch(weatherURL);

      // Étape d. Afficher les données météo
      const data = await response.json();
      weatherDataSection.style.display = "flex";
      weatherDataSection.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" width="100" />
      <div>
        <h2>${data.name}</h2>
        <p><strong>Température:</strong> ${Math.round(data.main.temp - 273.15)}°C</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
      </div>
      `
    }

    // Ces deux lignes font partie de l'étape d.
    document.getElementById("search").value = "";
    const geocodeData = await getLonAndLat();
    getWeatherData(geocodeData.lon, geocodeData.lat);
  }

