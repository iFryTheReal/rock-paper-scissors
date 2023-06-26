function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
      break;
    case 1:
      return "PAPER";
      break;
    case 2:
      return "SCISSORS";
      break;
    default:
      console.log("Something went wrong with the random number generation");
  }
  return;
}

function getPlayerChoice() {
  let playerChoice = prompt(
    "Choose your weapon (type in rock, paper or scissors)"
  );

  if (
    playerChoice === null ||
    (playerChoice.toUpperCase() !== "ROCK" &&
      playerChoice.toUpperCase() !== "PAPER" &&
      playerChoice.toUpperCase() !== "SCISSORS")
  ) {
    alert("Wrong entry !");
    return -1;
  } else {
    return playerChoice.toUpperCase();
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw !";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const computer = getComputerChoice();
const player = getPlayerChoice();

console.log(computer);
console.log(player);

if (player !== -1) {
  console.log(playRound(player, computer));
}
