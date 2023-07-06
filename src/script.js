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
  if (playerSelection === computerSelection) {
    return "Draw !";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
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

// Display winner
if (playerScore > computerScore) {
  console.log("Player won!");
} else if (playerScore < computerScore) {
  console.log("Computer won!");
} else {
  console.log("Computer won!");
}
