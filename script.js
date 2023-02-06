const Choices = ["rock", "paper", "scissor"];

game();

function game() {
    let PlayerWon = 0;
    let ComputerWon = 0;
    for (let i = 0; i < 5; i++) {
        console.log(i);
        let result = PlayRound(getPlayerChoice(), getComputerChoice());
        if (result == 1) {
            PlayerWon += 1;
        }
        if (result == undefined) {
            PlayerWon += 1;
            ComputerWon += 1;
        }
        if (result == 0) {
            ComputerWon += 1;
        }
        console.log("player: " + PlayerWon);
        console.log("computer: " + ComputerWon);
        console.log(result);
    }
    if (PlayerWon > ComputerWon) {
        alert("You won with a score of " + PlayerWon + "points versus the computer's " + ComputerWon + " points.");
    }
    else {
        alert("The computer won with a score of " + ComputerWon + " points versus your " + PlayerWon + " points.");
    }
}

function PlayRound(PlayerChoice, ComputerChoice) {
    console.log(ComputerChoice);
    console.log(PlayerChoice);
    if (PlayerChoice == "rock") {
        if (ComputerChoice == "scissor") {
            alert("You won! Rock beats Scissor")
            return 1;
        } 
        if (ComputerChoice == "rock") {
            alert("It's a tie! You both chose Rock")
            return undefined;
        }
        else alert("You lose! Paper beats Rock")
        return 0;
    }
    if (PlayerChoice == "paper") {
        if (ComputerChoice == "rock") {
            alert("You win! Paper beats Rock")
            return 1;
        } 
        if (ComputerChoice == "paper") {
            alert("It's a tie! You both chose Paper")
            return undefined;
        }
        else alert("You lose! Scissor beats Paper")
        return 0;
    }
    if (PlayerChoice == "scissor") {
        if (ComputerChoice == "paper") {
            alert("You won! Scissor beats Paper")
            return 1;
        } 
        if (ComputerChoice == "scissor") {
            alert("It's a tie! You both chose Scissor")
            return undefined;
        }
        else alert("You lose! Rock beats Scissor")
        return 0;
    }
    else return "Please enter a valid choice.";
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