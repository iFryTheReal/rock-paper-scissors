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
  const roundResult = document.getElementById("round-result");
  const playerScoreDiv = document.querySelector("#score .player");
  const computerScoreDiv = document.querySelector("#score .computer");

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
}

function game() {
  let computer;
  let player;
  for (let index = 1; index <= 5; index++) {
    console.log(`Round n°${index}`);

    computer = getComputerChoice();

    do {
      player = getPlayerChoice();
    } while (player === -1);

    console.log(playRound(player, computer));

    console.log(`Player : ${playerScore} | Computer : ${computerScore}`);
  }
}

let computerScore = 0;
let playerScore = 0;

// Game loop
//game();

btnRock = document.getElementById("rock");
btnRock.addEventListener("click", () => playRound("ROCK", getComputerChoice()));

btnPaper = document.getElementById("paper");
btnPaper.addEventListener("click", () =>
  playRound("PAPER", getComputerChoice())
);

btnScissors = document.getElementById("scissors");
btnScissors.addEventListener("click", () =>
  playRound("SCISSORS", getComputerChoice())
);

// Display winner
if (playerScore > computerScore) {
  console.log("Player won!");
} else if (playerScore < computerScore) {
  console.log("Computer won!");
} else {
  console.log("Computer won!");
}
