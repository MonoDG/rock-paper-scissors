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