const button = document.getElementById("btn");

button.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("random-idea").textContent = data.activity;
      document.getElementById('title').textContent = "Here's an idea";
      document.body.classList.add("fun")
    });
});
