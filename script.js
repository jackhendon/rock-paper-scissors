let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function computerPlay() {
  let choiceNumber = Math.floor(Math.random() * 3);
  switch (choiceNumber) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
      break;
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection.toUpperCase() === "SCISSORS"
  ) {
    roundWinner = "Player";
    playerScore++;
  } else if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection.toUpperCase() === "ROCK"
  ) {
    roundWinner = "Player";
    playerScore++;
  } else if (
    playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection.toUpperCase() === "PAPER"
  ) {
    roundWinner = "Player";
    playerScore++;
  } else if (
    computerSelection.toUpperCase() === "ROCK" &&
    playerSelection.toUpperCase() === "SCISSORS"
  ) {
    roundWinner = "Computer";
    computerScore++;
  } else if (
    computerSelection.toUpperCase() === "PAPER" &&
    playerSelection.toUpperCase() === "ROCK"
  ) {
    roundWinner = "Computer";
    computerScore++;
  } else if (
    computerSelection.toUpperCase() === "SCISSORS" &&
    playerSelection.toUpperCase() === "PAPER"
  ) {
    roundWinner = "Computer";
    computerScore++;
  } else {
    roundWinner = "Draw";
  }
  updateScore();
}

function updateScore() {
  if (roundWinner === "Draw") {
    console.log("It's a draw!");
    console.log("Score = " + playerScore + ":" + computerScore);
  } else if (roundWinner === "Player") {
    console.log("You win!");
    console.log("Score = " + playerScore + ":" + computerScore);
  } else if (roundWinner === "Computer") {
    console.log("Computer wins!");
    console.log("Score = " + playerScore + ":" + computerScore);
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper, scissors?");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    console.log("Player wins the game!")
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!")
  } else {
    console.log("The game is a draw!")
  }
}

game()
