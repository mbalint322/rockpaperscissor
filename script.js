const Choices = ["rock", "paper", "scissor"]; // Array containing possible choices

const messageField = document.querySelector('#messageField');

let playerScore = 0;
let computerScore = 0;

const weapons = Array.from(document.querySelectorAll('.weapon'));
const playAgainButton = document.querySelector('#playAgain');
    playAgainButton.addEventListener ('click', () => {
    playAgain();
    });

const resultField = document.querySelector('#score');
resultField.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;

const rockButton = document.querySelector('#rock');
rockButton.addEventListener ('click', () => {
    PlayRound("rock", getComputerChoice());
    checkWinner();
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener ('click', () => {
    PlayRound("paper", getComputerChoice());
    checkWinner();
});

const scissorButton = document.querySelector('#scissor');
scissorButton.addEventListener ('click', () => {
    PlayRound("scissor", getComputerChoice());
    checkWinner();
    });

//Function to reset the game for another match
function playAgain (){
    playerScore = 0; 
    computerScore = 0;
    console.log(playerScore, computerScore);
    refreshScore();
    togglePlayAgainButton();
    toggleWeapons();
    messageField.textContent = "";
}

//Function to make the "Play again!" button appear
function togglePlayAgainButton(){
    playAgainButton.toggleAttribute("hidden");
}

//Function to hide all "weapon" buttons
function toggleWeapons () {
    weapons.forEach(weapon => weapon.toggleAttribute("hidden"));
}

//Checks if player or computer has 5 points and changes message field to say it, then hides weapons
function checkWinner () {
    if (playerScore >= 5) {
    resultField.textContent = `Congratulations! You won!`;
    toggleWeapons();
    togglePlayAgainButton()
    return
    }
if (computerScore >= 5) {
    resultField.textContent = `You lost :( Better luck next time!`;
    toggleWeapons();
    togglePlayAgainButton()
    return
    }
    
}
//refreshes the score in the message field
function refreshScore () {
resultField.textContent = `Player: ${playerScore}  Computer: ${computerScore}`; 

}

//Plays one round of Rock Paper Scissors
function PlayRound(PlayerChoice, ComputerChoice) {
    console.log(ComputerChoice);
    console.log(PlayerChoice);
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
//Computer randoms a number between 0-2, choosing Rock/Paper/Scissor from an Array
function getComputerChoice() {
    let ComputerChoice = Choices[getRandomInt(3)];
    return ComputerChoice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}