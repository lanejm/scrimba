imageAuthor = document.getElementById("image-author");
cryptoInfo = document.getElementById("crypto");
cryptoTop = document.getElementById("crypto-top");

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
    `
  })
  .catch((err) => console.log(err));
