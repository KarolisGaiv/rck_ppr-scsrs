
// Selectors and global variables

const choices = ["Rock", "Paper", "Scissors"];
const compHead = document.querySelector(".computer-choice");
const userHead = document.querySelector(".user-choice");
const explanation = document.querySelector(".explanation");
const buttons = document.querySelectorAll("button");
let user;
let computer;

// Functions

function computerPlay() {
  computer = choices[Math.floor(Math.random() * 3)];
  compHead.textContent = computer;
  return computer;
}

function playerChoice(e) {
  user = e.target.innerText;
  userHead.textContent = user;
  computerPlay();
  winner();
  return user;
}

function winner() {
  console.log(user + " User");
  console.log(computer + " Computer");
  if (user === "Rock" && computer === "Paper") {
    explanation.textContent = "Paper covers Rock, You lost!";
  } else if (user === "Rock" && computer === "Scissors") {
    explanation.textContent ="Rock crushes Scissors, You Won!";
  } else if (user === "Paper" && computer === "Scissors") {
    explanation.textContent ="Scissors cut Paper, You Lost!";
  } else if (user === "Scissors" && computer === "Rock") {
    explanation.textContent ="Rock crushes Scissors, You Lost!";
  } else if (user === "Scissors" && computer === "Paper") {
    explanation.textContent ="Scissors cut Paper, You Won!";
  } else if (user === "Paper" && computer === "Rock") {
    explanation.textContent ="Paper covers Rock, You Won!";
  } else {
    explanation.textContent =("It's a TIE!");
  }
}

// Event listeners

buttons.forEach((button) => {
  button.addEventListener("click", playerChoice);
});
