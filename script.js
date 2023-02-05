const Choices = ["rock", "paper", "scissor"];

let ComputerChoice = getComputerChoice();

function getComputerChoice() {
    let ComputerChoice = Choices[getRandomInt(3)];
    return ComputerChoice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);}