let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0
let computerScore = 0 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      updateScore();
      return 'You win!';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      updateScore();
      return 'You win!';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      updateScore();
      return 'You win!';
    } else if (playerSelection === computerSelection) {
      return 'Tie.';
    } else { 
      computerScore++;
      updateScore();
      return 'You lose.';
    }
  }


function updateScore() {
    document.getElementById('playerScore').innerText = "Player Score: " + playerScore;
    document.getElementById('computerScore').innerText = "Computer Score: " + computerScore;
  }

document.getElementById('rock').addEventListener('click', function() {
  let playerSelection = 'rock';
  let computerSelection = getComputerChoice(choices);
  console.log(playerSelection)
  console.log(computerSelection)
  alert(playRound(playerSelection, computerSelection));
});

document.getElementById('paper').addEventListener('click', function() {
  let playerSelection = 'paper';
  let computerSelection = getComputerChoice(choices);
  console.log(playerSelection)
  console.log(computerSelection)
  alert(playRound(playerSelection, computerSelection));
});

document.getElementById('scissors').addEventListener('click', function() {
  let playerSelection = 'scissors';
  let computerSelection = getComputerChoice(choices);
  console.log(playerSelection)
  console.log(computerSelection)
  alert(playRound(playerSelection, computerSelection));
});

