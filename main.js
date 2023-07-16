const playerAPI = "http://localhost:3000/players";

let addPlayer = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-player-btn");
  const PlayerFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addPlayer = !addPlayer;
    if (addPlayer) {
      PlayerFormContainer.style.display = "block";
    } else {
      PlayerFormContainer.style.display = "none";
    }
  });
});

//fetch the players

fetch(playerAPI)
  .then((res) => res.json())
  .then(console.log);

//const playerCollection = document.querySelector("#player-collection");
