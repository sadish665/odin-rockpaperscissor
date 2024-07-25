function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];

    while (true) {
        const humanChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();

        if (validChoices.includes(humanChoice)) {
            return humanChoice;
        } 
        else {
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        const winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
        } 
        else if (winConditions[humanChoice] === computerChoice) {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
            humanScore++;
        } 
        else {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
            computerScore++;
        }
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        console.log("Human choice:", humanChoice)
        const computerChoice = getComputerChoice();
        console.log("Computer choice:", computerChoice)
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } 
    else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } 
    else {
        console.log("It's a tie game!");
    }
}

playGame();