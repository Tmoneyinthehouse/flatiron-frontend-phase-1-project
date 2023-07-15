console.log("connected");

// Elements
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

fetch("http://localhost:3000/players")
  .then((resp) => resp.json())
  .then((players) => player.forEach((player) => renderPlayer(player)));

const playerCollection = document.querySelector("#player-collection");

function renderPlayer(player) {
  const playerCard = document.createElement("div");
  playerCard.className = "card";

  const h2 = document.createElement("h2");
  h2.textContent = player.name;

  const img = document.createElement("img");
  img.src = player.image;
  img.className = "player-avatar";

  const p = document.createElement("p");
  p.textContent = `${player.likes} likes`;

  const button = document.createElement("button");
  button.className = "like-btn";
  button.id = player.id;
  button.textContent = "Like";

  playerCard.append(h2);
  playerCard.append(img);
  playerCard.append(p);
  playerCard.append(button);

  playerCollection.appendChild(playerCard);

  button.addEventListener("click", increaseLikes);

  function increaseLikes() {
    player.likes = player.likes + 1;
    p.textContent = `${player.likes} likes`;
  }
}

const playerForm = document.querySelector(".add-player-form");

function handleSubmit(e) {
  e.preventDefault();

  const newPlayerName = e.target.name.value;
  const newPlayerImage = e.target.image.value;

  const newPlayer = {
    id: 10,
    name: newPlayerName,
    image: newPlayerImage,
    likes: 0,
  };

  renderPlayer(newPlayer);
}

playerForm.addEventListener("submit", handleSubmit);
