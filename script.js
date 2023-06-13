const Choices = ["rock", "paper", "scissor"]; // Array containing possible choices
const weapons = Array.from(document.querySelectorAll('.weapon')); //Array of the weapon buttons

//Have to declare the monster images to preload them, otherwise they wouldn't appear when appending
const scissorMonster0 = document.createElement("img");
    scissorMonster0.src = "./pixelart/scissor_monsters/scissormonster0.jpeg";

    const scissorMonster1 = document.createElement("img");
    scissorMonster1.src = "./pixelart/scissor_monsters/scissormonster1.jpeg";

    const scissorMonster2 = document.createElement("img");
    scissorMonster2.src = "./pixelart/scissor_monsters/scissormonster2.jpeg";

    const scissorMonster3 = document.createElement("img");
    scissorMonster3.src = "./pixelart/scissor_monsters/scissormonster3.jpeg";

    const scissorMonsters = [scissorMonster0, scissorMonster1, scissorMonster2, scissorMonster3];

    scissorMonsters.forEach(element => element.classList.add('character')); //Adds the original css style to appended images

const rockMonster0 = document.createElement("img");
    rockMonster0.src = "./pixelart/rock_monsters/rockmonster0.jpeg";

    const rockMonster1 = document.createElement("img");
    rockMonster1.src = "./pixelart/rock_monsters/rockmonster1.jpeg";

    const rockMonster2 = document.createElement("img");
    rockMonster2.src = "./pixelart/rock_monsters/rockmonster2.jpeg";

    const rockMonster3 = document.createElement("img");
    rockMonster3.src = "./pixelart/rock_monsters/rockmonster3.jpeg";

    const rockMonsters = [rockMonster0, rockMonster1, rockMonster2, rockMonster3];

    rockMonsters.forEach(element => element.classList.add('character')); //Adds the original css style to appended images

const paperMonster0 = document.createElement("img");
    paperMonster0.src = "./pixelart/paper_monsters/papermonster0.jpeg";

    const paperMonster1 = document.createElement("img");
    paperMonster1.src = "./pixelart/paper_monsters/papermonster1.jpeg";

    const paperMonster2 = document.createElement("img");
    paperMonster2.src = "./pixelart/paper_monsters/papermonster2.jpeg";

    const paperMonster3 = document.createElement("img");
    paperMonster3.src = "./pixelart/paper_monsters/papermonster3.jpeg";

    const paperMonsters = [paperMonster0, paperMonster1, paperMonster2, paperMonster3];

    paperMonsters.forEach(element => element.classList.add('character')); //Adds the original css style to appended images

const messageField = document.querySelector('#messageField');

let playerScore = 0;
let computerScore = 0;


const gameButton = document.querySelector('#gameButton');
gameButton.textContent = "Start New Game";
gameButton.addEventListener ('click', () => {
    startNewGame();
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

playerHealth = document.querySelector('.player_health');
monsterHealth = document.querySelector('.monster_health');

characterContainer = document.querySelector('.character_container');

function createScissorMonster () {
    characterContainer.removeChild(characterContainer.lastElementChild);
    characterContainer.appendChild(scissorMonsters[getRandomInt(4)]);
}

function createRockMonster () {
    characterContainer.removeChild(characterContainer.lastElementChild);
    characterContainer.appendChild(rockMonsters[getRandomInt(4)]);
}

function createPaperMonster () {
    characterContainer.removeChild(characterContainer.lastElementChild);
    characterContainer.appendChild(paperMonsters[getRandomInt(4)]);
}

//Function to remove one health from player
function playerLoseHealth() {
    playerHealth.removeChild(playerHealth.lastElementChild);
}

//Function to remove one health from enemy
function monsterLoseHealth() {
    monsterHealth.removeChild(monsterHealth.firstElementChild);
}

//Function to reset the game for another match
function startNewGame () {
    if (playerScore == 5 || computerScore == 5) {
        document.location.reload();
    }
    else {
    playerScore = 0; 
    computerScore = 0;
    console.log(playerScore, computerScore);
    refreshScore();
    togglegameButton();
    toggleWeapons();
    messageField.textContent = "";
    }
}

//Function to make the "Play again!" button appear
function togglegameButton() {
    gameButton.toggleAttribute("hidden");
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
    togglegameButton()
    return
    }
if (computerScore >= 5) {
    resultField.textContent = `You lost :( Better luck next time!`;
    toggleWeapons();
    togglegameButton()
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
            createScissorMonster ();
            monsterLoseHealth();
            refreshScore();
            return
        } 
        if (ComputerChoice == "rock") {
            messageField.textContent = "It's a tie! You both chose Rock";
            refreshScore();
            createRockMonster ();
            return
        }
        else messageField.textContent = "You lose! Paper beats Rock";
            computerScore = computerScore +1;
            createPaperMonster ();
            playerLoseHealth();
            refreshScore();
            return
    }
    if (PlayerChoice == "paper") {
        if (ComputerChoice == "rock") {
            messageField.textContent = "You win! Paper beats Rock";
            playerScore = playerScore + 1;
            createRockMonster ();
            monsterLoseHealth();
            refreshScore();
            return
        } 
        if (ComputerChoice == "paper") {
            messageField.textContent = "It's a tie! You both chose Paper";
            refreshScore();
            createPaperMonster ();
            return
        }
        else messageField.textContent = "You lose! Scissor beats Paper";
            computerScore = computerScore +1;
            createScissorMonster ();
            playerLoseHealth();
            refreshScore();
            return
    }
    if (PlayerChoice == "scissor") {
        if (ComputerChoice == "paper") {
            messageField.textContent = "You won! Scissor beats Paper";
            playerScore = playerScore + 1;
            createPaperMonster ();
            monsterLoseHealth();
            refreshScore();
            return
        } 
        if (ComputerChoice == "scissor") {
            messageField.textContent = "It's a tie! You both chose Scissor";
            createScissorMonster ();
            refreshScore();
            return
        }
        else messageField.textContent = "You lose! Rock beats Scissor";
            computerScore = computerScore +1;
            createRockMonster ();
            playerLoseHealth();
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