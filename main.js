console.log("connected");

const playerAPI = "http://localhost:3000/players";

let addPlayer = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-player-btn");
  const PlayerFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    addPlayer = !addPlayer;
    if (addPlayer) {
      PlayerFormContainer.style.display = "block";
    } else {
      PlayerFormContainer.style.display = "none";
    }
  });

  fetch(playerAPI)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((players) => players.forEach((player) => renderPlayers(player)))
    .catch((error) => console.error("Error fetching data:", error));

  const playerCollection = document.querySelector("#player-collection");

  function renderPlayers(player) {
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
      id: 0,
      name: newPlayerName,
      image: newPlayerImage,
      likes: 0,
    };

    renderPlayers(newPlayer);
    e.target.reset();
  }

  playerForm.addEventListener("submit", handleSubmit);
});
