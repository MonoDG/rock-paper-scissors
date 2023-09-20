// Return the computer choice whether it's Rock, Paper or Scissors
function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3)) + 1;
    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Play a single round of Rock Paper Scissors
function playRound() {
    playerSelection = this.id.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    pSelections.textContent = `You selected [${playerSelection}] - Computer selected [${computerSelection}]`;

    if (playerSelection === computerSelection) {
        pResult.textContent = "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        pResult.textContent = "You Lose! Paper beats Rock";
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        pResult.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        pResult.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
    } else {
        pResult.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }

    pScores.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;

    if (playerScore === 5) {
        pScores.textContent = `You won 5 rounds! Final score -> Player score: ${playerScore} | Computer score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }

    if (computerScore === 5) {
        pScores.textContent = `Computer won 5 rounds! Final score -> Player score: ${playerScore} | Computer score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

const divResults = document.querySelector(".results");
const pSelections = document.createElement("p");
const pResult = document.createElement("p");
const pScores = document.createElement("p");

pResult.style.cssText = "color: green;";
pScores.style.cssText = "color: red;";

divResults.appendChild(pSelections);
divResults.appendChild(pResult);
divResults.appendChild(pScores);
