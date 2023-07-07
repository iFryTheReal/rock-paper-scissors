function getComputerChoice() {
  // Generation d'un nombre entier aleatoire  0<= n < 3
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
  let playerChoice = prompt("Choose your weapon (type in rock, paper or scissors)");

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
    roundResult.style.color = "black";
    roundResult.textContent = "Draw!";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    roundResult.style.color = "green";
    roundResult.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    roundResult.style.color = "red";
    roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  playerScoreDiv.textContent = `${playerScore}`;
  computerScoreDiv.textContent = `${computerScore}`;

  checkWinner();
}

function checkWinner() {
  if (playerScore >= 5) {
    roundResult.style.color = "green";
    roundResult.textContent = `Player won!`;
  } else if (computerScore >= 5) {
    roundResult.style.color = "red";
    roundResult.textContent = `Computer won!`;
  } else return;

  hideButtons();
}

function initialize() {
  computerScore = 0;
  playerScore = 0;

  playerScoreDiv.textContent = `${playerScore}`;
  computerScoreDiv.textContent = `${computerScore}`;
  roundResult.textContent = "";

  showButtons();
}

function hideButtons() {
  btnRock.style.display = "none";
  btnPaper.style.display = "none";
  btnScissors.style.display = "none";
}

function showButtons() {
  btnRock.style.display = "inline";
  btnPaper.style.display = "inline";
  btnScissors.style.display = "inline";
}

let computerScore;
let playerScore;

// Getting DOM elements
const roundResult = document.getElementById("round-result");
const playerScoreDiv = document.querySelector("#score .player");
const computerScoreDiv = document.querySelector("#score .computer");
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnReset = document.getElementById("reset");

// Binding events
btnRock.addEventListener("click", () => playRound("ROCK", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("PAPER", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("SCISSORS", getComputerChoice()));
btnReset.addEventListener("click", initialize);

initialize();
