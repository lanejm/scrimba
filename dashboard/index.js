imageAuthor = document.getElementById("image-author");
cryptoInfo = document.getElementById("crypto");
cryptoTop = document.getElementById("crypto-top");
weatherInfo = document.getElementById("weather");

let key = config.API_KEY

currentTime = document.getElementById("time");

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    imageAuthor.textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1499002238440-d264edd596ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzE5MDcxMjA&ixlib=rb-1.2.1&q=80&w=1080)`;
    imageAuthor.textContent = "By: Léonard Cotte";
  });

fetch(
  "https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39&team=47",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": key,
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    cryptoTop.innerHTML = `
      <img src=${data.response[0].league.standings[0][0].team.logo} />`;

    cryptoInfo.innerHTML += `
      <p>${data.response[0].league.name} ${data.response[0].league.season}</p>
      <p>Points: ${data.response[0].league.standings[0][0].points}</p>
      <p>Position: ${data.response[0].league.standings[0][0].rank} of 20</p>
      `;
  })
  .catch((err) => {
    console.error(err);
  });

function updateClock() {
  let date = new Date();
  time = date.toLocaleTimeString("en-us", {
    hour12: false,
    timeStyle: "short",
  });

  currentTime.textContent = time;

  setTimeout(updateClock, 1000);
}
updateClock();

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available");
      }
      return res.json();
    })
    .then((data) => {
      weatherInfo.innerHTML = `
        <img src=http://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png />
        <p class="weather-temp">${Math.round(data.main.temp)}ºF</p>
        <p class="weather-city">${data.name}</p>
        `;
    })
    .catch((err) => console.log(err));
});
