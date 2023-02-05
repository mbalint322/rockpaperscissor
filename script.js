const Choices = ["rock", "paper", "scissor"];

console.log(PlayRound(getPlayerChoice(), getComputerChoice()));

function PlayRound(PlayerChoice, ComputerChoice) {
    console.log(ComputerChoice);
    console.log(PlayerChoice);
    if (PlayerChoice == "rock") {
        if (ComputerChoice == "scissor") {
            return "You won! Rock beats Scissor";
        } 
        if (ComputerChoice == "rock") {
            return "It's a tie! You both chose Rock";
        }
        else return "You lose! Paper beats Rock";
    }
    if (PlayerChoice == "paper") {
        if (ComputerChoice == "rock") {
            return "You win! Paper beats Rock";
        } 
        if (ComputerChoice == "paper") {
            return "It's a tie! You both chose Paper";
        }
        else return "You lose! Scissor beats Paper";
    }
    if (PlayerChoice == "scissor") {
        if (ComputerChoice == "paper") {
            return "You won! Scissor beats Paper";
        } 
        if (ComputerChoice == "scissor") {
            return "It's a tie! You both chose Scissor";
        }
        else return "You lose! Rock beats Scissor";
    }
}

function getPlayerChoice() {
    let PlayerChoice = prompt("Choose your weapon! Rock, Paper or Scissor?").toLowerCase();
    return PlayerChoice;
}

function getComputerChoice() {
    let ComputerChoice = Choices[getRandomInt(3)];
    return ComputerChoice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}