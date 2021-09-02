let deckId = "";
const showCards = document.getElementById("show-cards");
const gameWinnerText = document.getElementById("winner-text")

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

      const winnerText = handWinner(data.cards[0], data.cards[1])
      gameWinnerText.innerHTML = winnerText
    });
}

document.getElementById("draw").addEventListener("click", drawCards);


function handWinner(card1, card2) {
  const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9","10", "JACK", "QUEEN", "KING", "ACE"] 
  const card1ValueIndex = valueOptions.indexOf(card1.value)
  const card2ValueIndex = valueOptions.indexOf(card2.value)

  if (card1ValueIndex > card2ValueIndex) {
    return "Computer wins!"
  } else if (card2ValueIndex > card1ValueIndex) {
    return "You win!"
  } else {
    return "War!"
  }
}