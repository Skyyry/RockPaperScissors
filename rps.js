let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}


let computerSelection = getComputerChoice(choices);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log('You win!')
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log('You win!')
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log('You win!')
    } else if (playerSelection === computerSelection) {
        console.log ('Tie.')
    } else { console.log ('You lose.')
    }
};


let playerSelection = prompt("Choose").toLowerCase();




console.log(playerSelection);
console.log(computerSelection);
playRound(playerSelection, computerSelection);
playerSelection();
playerSelection();
playerSelection();