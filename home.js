function getComputerChoice(){
    var choices = ["rock","paper","scissors"];
    var randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice())

function getHumanChoice() {
    // Prompt the user for their choice
    var choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice! Please enter either rock, paper, or scissors").toLowerCase();
    }
    return choice;
}
var humanChoice = getHumanChoice();
console.log("Human choice:", humanChoice); 

var humanScore = 0;
var computerScore = 0;
