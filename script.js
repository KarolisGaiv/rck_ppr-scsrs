console.log("Welcome to Rock Paper Scissors game!");

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  let number = Math.floor(Math.random() * 3);
  let computerChoice = choices[number];
  return computerChoice;
}

console.log(computerPlay());