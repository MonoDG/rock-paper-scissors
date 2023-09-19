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
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("Tie!");
        return;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock");
        return "computer";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return "computer";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return "computer";
    } else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return "player";
    }
}

// Play a 5 round game that keeps score and reports a winner or loser at the end
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Loop 5 times
    for (let i = 0; i < 5; i++) {
        // Ask player for a choice
        let playerSelection = prompt("Choose between rock, paper or scissors: ");
        // Ask computer for a choice
        let computerSelection = getComputerChoice();
        // Play round and determine winner
        let winner = playRound(playerSelection, computerSelection);
        // Increase score of winner
        if (winner) {
            if (winner === "computer") {
                computerScore++;
            } else {
                playerScore++;
            }
        }
        // Show round played (already done inside playRound)
    }

    console.log(`Final score is: ${playerScore} (Player) - ${computerScore} (Computer)`);
    if (playerScore === computerScore) {
        console.log("Tie.");
    } else if (playerScore > computerScore) {
        console.log("The winner is Player!");
    } else {
        console.log("The winner is Computer!");
    }
}