document.getElementById("new-deck").addEventListener('click', function(e) {
    e.preventDefault();
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(response => response.json())
    .then(data => console.log(data))
})