let deckId = "";
const showCards = document.getElementById("show-cards");

function handleClick() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      deckId = data.deck_id;
    });
}

document.getElementById("new-deck").addEventListener("click", handleClick);

function drawCards() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((response) => response.json())
    .then((data) => {
      showCards.children[0].innerHTML = `
      <img src=${data.cards[0].image} class="card" />`;

      showCards.children[1].innerHTML = `
      <img src=${data.cards[1].image} class="card" />`;
    });
}

document.getElementById("draw").addEventListener("click", drawCards);
