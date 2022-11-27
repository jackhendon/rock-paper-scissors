// Randomly generate a computer answer

function getComputerAnswer() {
  const randonNumber = Math.floor(Math.random() * 3)
    if (randonNumber === 0) {
      return 'rock'
    } else if (randonNumber === 1) {
      return 'paper'
    } else if (randonNumber === 2) {
      return 'scissors'
    }
}

function getUserAnswer() {
  return window.prompt('What is your guess?')
}

function getWinner(user, computer) {
  if (user === computer) {
    return 'tie'
  } else if (user === 'rock' && computer === 'scissors') {
    return 'user win'
  } else if (user === 'paper' && computer === 'rock') {
    return 'user win'
  } else if (user === 'scissors' && computer === 'paper') {
    return 'user win'
  } else return 'computer win'
}

function playRound() {
  const userInput = getUserAnswer()
  const computerChoice = getComputerAnswer()
  const winner = getWinner(userInput, computerChoice)
  if (winner === 'tie') {
    return `You both chose ${userInput}. This round is a tie.`
  } else if (winner === 'user win') {
    return `You chose ${userInput} and the computer chose ${computerChoice}. You win this round!`
  } else if (winner === 'computer win') {
    return `You chose ${userInput} and the computer chose ${computerChoice}. The computer wins this round.`
  }
  }

  playRound()
// Take a user input answer
// Run the rules of rock paper scissors and add +1 to the score of the winner
// Have the ability to start a new round
// Track the cumulative scores across rounds