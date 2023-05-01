const Choices = ["rock", "paper", "scissor"]; // Array containing possible choices

const messageField = document.querySelector('#messageField');

const rockButton = document.querySelector('#rock');
rockButton.addEventListener ('click', () => {
    PlayRound("rock", getComputerChoice());
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener ('click', () => {
    PlayRound("paper", getComputerChoice());
});

const scissorButton = document.querySelector('#scissor');
scissorButton.addEventListener ('click', () => {
    PlayRound("scissor", getComputerChoice());
});

function PlayRound(PlayerChoice, ComputerChoice) {
    console.log(ComputerChoice);
    console.log(PlayerChoice);
    if (PlayerChoice == "rock") {
        if (ComputerChoice == "scissor") {
            messageField.textContent = "You won! Rock beats Scissor";
            return 1;
        } 
        if (ComputerChoice == "rock") {
            messageField.textContent = "It's a tie! You both chose Rock";
            return undefined;
        }
        else messageField.textContent = "You lose! Paper beats Rock";
        return 0;
    }
    if (PlayerChoice == "paper") {
        if (ComputerChoice == "rock") {
            messageField.textContent = "You win! Paper beats Rock";
            return 1;
        } 
        if (ComputerChoice == "paper") {
            messageField.textContent = "It's a tie! You both chose Paper";
            return undefined;
        }
        else messageField.textContent = "You lose! Scissor beats Paper";
        return 0;
    }
    if (PlayerChoice == "scissor") {
        if (ComputerChoice == "paper") {
            messageField.textContent = "You won! Scissor beats Paper";
            return 1;
        } 
        if (ComputerChoice == "scissor") {
            messageField.textContent = "It's a tie! You both chose Scissor";
            return undefined;
        }
        else messageField.textContent = "You lose! Rock beats Scissor";
        return 0;
    }
}

function getComputerChoice() {
    let ComputerChoice = Choices[getRandomInt(3)];
    return ComputerChoice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}