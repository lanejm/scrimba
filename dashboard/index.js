imageAuthor = document.getElementById("image-author");
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

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => res.json())
  .then((data) => {
    cryptoTop.innerHTML = `
   <img src=${data.image.small} />
    <span>${data.name}</span>`;
  })
  .catch((err) => console.log(err));
