const Choices = ["rock", "paper", "scissor"]; // Array containing possible choices

const messageField = document.querySelector('#messageField');

let playerScore = 0;
let computerScore = 0;

const resultField = document.querySelector('#score');
resultField.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;

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


function refreshScore () {
resultField.textContent = `Player: ${playerScore}  Computer: ${computerScore}`; 
}
function PlayRound(PlayerChoice, ComputerChoice) {
    console.log(ComputerChoice);
    console.log(PlayerChoice);
    if (playerScore >= 5) {
        resultField.textContent = `Congratulation! You won!`;
        return
    }
    if (computerScore >= 5) {
        resultField.textContent = `You lost :( Better luck next time!`;
        return
    }
    if (PlayerChoice == "rock") {
        if (ComputerChoice == "scissor") {
            messageField.textContent = "You won! Rock beats Scissor";
            playerScore = playerScore + 1;
            refreshScore();
            return
        } 
        if (ComputerChoice == "rock") {
            messageField.textContent = "It's a tie! You both chose Rock";
            refreshScore();
            return
        }
        else messageField.textContent = "You lose! Paper beats Rock";
            computerScore = computerScore +1;
            refreshScore();
            return
    }
    if (PlayerChoice == "paper") {
        if (ComputerChoice == "rock") {
            messageField.textContent = "You win! Paper beats Rock";
            playerScore = playerScore + 1;
            refreshScore();
            return
        } 
        if (ComputerChoice == "paper") {
            messageField.textContent = "It's a tie! You both chose Paper";
            refreshScore();
            return
        }
        else messageField.textContent = "You lose! Scissor beats Paper";
            computerScore = computerScore +1;
            refreshScore();
            return
    }
    if (PlayerChoice == "scissor") {
        if (ComputerChoice == "paper") {
            messageField.textContent = "You won! Scissor beats Paper";
            playerScore = playerScore + 1;
            refreshScore();
            return
        } 
        if (ComputerChoice == "scissor") {
            messageField.textContent = "It's a tie! You both chose Scissor";
            refreshScore();
            return
        }
        else messageField.textContent = "You lose! Rock beats Scissor";
            computerScore = computerScore +1;
            refreshScore();
            return
    }
}

function getComputerChoice() {
    let ComputerChoice = Choices[getRandomInt(3)];
    return ComputerChoice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}