console.log("main.js connected");

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

// const cardData = [
  {
    heading: 'card 1',
    body: 'this is card body 1'
  }
  {
    heading: 'card 2',
    body: 'this is card body 2'
  }
  {
    heading: 'card 3',
    body: 'this is card body 3'
  }
  {
    heading: 'card 4',
    body: 'this is card body 4'
  }
  {
    heading: 'card 5',
    body: 'this is card body 5'
  }
  {
    heading: 'card 6',
    body: 'this is card body 6'
  }
  {
    heading: 'card 7',
    body: 'this is card body 7'
  }
  {
    heading: 'card 8',
    body: 'this is card body 8'
  }
  {
    heading: 'card 9',
    body: 'this is card body 9'
  }
  {
    heading: 'card 10',
    body: 'this is card body 10'
  }

]
  

