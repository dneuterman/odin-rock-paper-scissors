const gameMoves = ['rock', 'paper', 'scissors']

const computerSelection = () => gameMoves[Math.floor(Math.random() * 3)]

const playerSelection = () => {
  let playerAnswer = prompt("Rock, Paper or Scissors?").toLowerCase()
  while(true) {
    if (gameMoves.includes(playerAnswer)) {
      return playerAnswer
    } else {
      playerAnswer = prompt("That was not a valid answer. Please choose either rock, paper or scissors.")
    }
  }
}

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case 'rock':
      if (playerSelection === computerSelection) {
        return `It is a tie! ${playerSelection} and ${computerSelection}!`
      } else if (computerSelection === 'paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
      } else {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
      }
    case 'paper':
      if (playerSelection === computerSelection) {
        return `It is a tie! ${playerSelection} and ${computerSelection}!`
      } else if (computerSelection === 'scissors') {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
      } else {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
      }
    case 'scissors':
      if (playerSelection === computerSelection) {
        return `It is a tie! ${playerSelection} and ${computerSelection}!`
      } else if (computerSelection === 'rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
      } else {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
      }
  }
}

const game = () => {
  const numberOfRounds = prompt("How many rounds would you like to play?")
  let count = 1
  while (count <= numberOfRounds) {
    console.log(`Round: ${count}`)
    console.log(playRound(playerSelection(), computerSelection()))
    count += 1;
  }
  console.log("Thank you for playing!")
}

game()