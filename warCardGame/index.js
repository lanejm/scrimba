let deckId = "";
const showCards = document.getElementById("show-cards");
const gameWinnerText = document.getElementById("winner-text");
const remainingCards = document.getElementById("cards-remaining");
const drawButton = document.getElementById("draw");
let computerScore = 0;
let myScore = 0;
const upperCard = document.getElementById("upper-card");
const lowerCard = document.getElementById("lower-card");

async function handleClick() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/"
  );
  const data = await response.json();
  remainingCards.textContent = `Remaining cards: ${data.remaining}`;
  deckId = data.deck_id;

  // .then((response) => response.json())
  // .then((data) => {;
}

document.getElementById("new-deck").addEventListener("click", handleClick);

async function drawCards() {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  );
  const data = await response.json();
  remainingCards.textContent = `Remaining Cards: ${data.remaining}`;
  showCards.children[0].innerHTML = `
      <img src=${data.cards[0].image} class="card" />`;

  showCards.children[1].innerHTML = `
      <img src=${data.cards[1].image} class="card" />`;

  const winnerText = handWinner(data.cards[0], data.cards[1]);
  gameWinnerText.textContent = winnerText;
  if (data.remaining === 0 && computerScore > myScore) {
    gameWinnerText.textContent = "Computer wins this round!";
    drawButton.disabled = true;
  } else if (data.remaining === 0 && myScore > computerScore) {
    gameWinnerText.textContent = "You win this round!";
    drawButton.disabled = true;
  } else {
    drawButton.disabled = false;
  }
}

draw.addEventListener("click", drawCards);

function handWinner(card1, card2) {
  const valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  const card1ValueIndex = valueOptions.indexOf(card1.value);
  const card2ValueIndex = valueOptions.indexOf(card2.value);

  if (card1ValueIndex > card2ValueIndex) {
    computerScore++;
    upperCard.textContent = `Computer score: ${computerScore}`;
    return "Computer wins!";
  } else if (card2ValueIndex > card1ValueIndex) {
    myScore++;
    lowerCard.textContent = `My score: ${myScore}`;
    return "You win!";
  } else {
    return "War!";
  }
}
