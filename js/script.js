const gameMoves = ['rock', 'paper', 'scissors']
const resultsDiv = document.querySelector('.results')
const playerScore = document.querySelector('.player-score')
const cpuScore = document.querySelector('.cpu-score')
const buttons = document.querySelectorAll('button')
let roundCount = 1
let cpuScoreValue = 0
let playerScoreValue = 0;

const updateScore = () => {
  playerScore.textContent = `Player Score: ${playerScoreValue}`
  cpuScore.textContent = `CPU Score: ${cpuScoreValue}`
}

const checkWinner = () => {
  if (playerScoreValue > cpuScoreValue) {
    return `Player Wins the game! ${playerScoreValue} to ${cpuScoreValue}.`
  } else if (cpuScoreValue > playerScoreValue) {
    return `CPU Wins the game! ${cpuScoreValue} to ${playerScoreValue}.`
  } else {
    return `Game ended with a tie! ${playerScoreValue} to ${cpuScoreValue}.`
  }
}

const updateResults = (gameResult) => {
  if (roundCount === 5) {
    resultsDiv.textContent = `${checkWinner()} Select a weapon to start a new game of 5.`
    cpuScoreValue = 0
    playerScoreValue = 0
    roundCount = 1
    updateScore()
  } else {
    resultsDiv.textContent = `Round ${roundCount}: ${gameResult}`
    roundCount++
  }
}

const computerSelection = () => gameMoves[Math.floor(Math.random() * 3)]
const playerSelection = (e) => {
  const gameResult = playRound(e, computerSelection())
  updateResults(gameResult)

}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    playerSelection(btn.className);
  })
})

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case 'rock':
      if (playerSelection === computerSelection) {
        return `It is a tie! ${playerSelection} and ${computerSelection}!`
      } else if (computerSelection === 'paper') {
        cpuScoreValue++
        updateScore()
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
      } else {
        playerScoreValue++
        updateScore()
        return `You Win! ${playerSelection} beats ${computerSelection}!`
      }
    case 'paper':
      if (playerSelection === computerSelection) {
        return `It is a tie! ${playerSelection} and ${computerSelection}!`
      } else if (computerSelection === 'scissors') {
        cpuScoreValue++
        updateScore()
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
      } else {
        playerScoreValue++
        updateScore()
        return `You Win! ${playerSelection} beats ${computerSelection}!`
      }
    case 'scissors':
      if (playerSelection === computerSelection) {
        return `It is a tie! ${playerSelection} and ${computerSelection}!`
      } else if (computerSelection === 'rock') {
        cpuScoreValue++
        updateScore()
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
      } else {
        playerScoreValue++
        updateScore()
        return `You Win! ${playerSelection} beats ${computerSelection}!`
      }
  }
}


// game()