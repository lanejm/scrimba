function handleClick() {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(response => response.json())
    .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener('click', handleClick)