console.log("Welcome to Rock Paper Scissors game!");

function playerChoice() {
  let input = prompt("Choose your play: Rock, Paper, Scissors").toLowerCase();
  let answer;
  if (input === "rock") {
    answer = 0;
  } else if (input === "paper") {
    answer = 1;
  } else if (input === "scissors") {
    answer = 2;
  } else {
    return console.log("No such choice is available");
  }
  return answer;
}

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  const choices = ["Rock", "Paper", "Scissors"];
  playerSelection = playerChoice();
  computerSelection = computerPlay();
  playerAnswer = choices[playerSelection];
  computerAnswer = choices[computerSelection];

  if (playerSelection > computerSelection) {
    return (`You win: ${playerAnswer} beats ${computerAnswer}`);
  } else if (playerSelection < computerSelection) {
    return (`You loose: ${computerAnswer} beats ${playerAnswer}`);
  } else {
    return ("It's a tie!");
  }
}

console.log(playRound());
