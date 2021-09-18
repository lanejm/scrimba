imageAuthor = document.getElementById("image-author");
cryptoInfo = document.getElementById("crypto");
cryptoTop = document.getElementById("crypto-top");
weatherInfo = document.getElementById("weather")

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

fetch("https://api.coingecko.com/api/v3/coins/dogecoin") //replace this with football scores
  .then((res) => res.json())
  .then((data) => {
    cryptoTop.innerHTML = `
   <img src=${data.image.small} />
    <span>${data.name}</span>`;

    cryptoInfo.innerHTML += `
    <p>🎯: $${data.market_data.current_price.usd}</p>
    <p>👆: $${data.market_data.high_24h.usd}</p>
    <p>👇: $${data.market_data.low_24h.usd}</p>
    `;
  })
  .catch((err) => console.log(err));

function updateClock() {
  let date = new Date();
  time = date.toLocaleTimeString("en-us", { hour12: false, timeStyle: "short"});

  currentTime.textContent = time

  setTimeout(updateClock, 1000)
;
}
updateClock()


navigator.geolocation.getCurrentPosition((position) => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res => {
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        return res.json()
    })
    .then(data => {
        weatherInfo.innerHTML = `
        <img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png />
        <p>${Math.round(data.main.temp)}ºF</p>
        <p>${data.name}</p>
        `
    })
    .catch(err => console.log(err))
})

