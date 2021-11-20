// Game of Rock Paper Scissors


// Edit a div to display the results of a game
const results = document.querySelector('#results');
results.textContent = "Press a button to begin";

// Running Scores than announce winner at end
const playScore = document.querySelector('#playerScore');
playScore.textContent = "Player Score: 0";
const compScore = document.querySelector('#computerScore');
compScore.textContent = "Computer Score: 0"; 
const buttons = document.querySelectorAll('button');
let player = 0;
let computer = 0;


// Test area

buttons.forEach(button => {
    button.addEventListener('click', () => {
        scoreUpdate(button.id);
    });
});

function scoreUpdate(button) {
    if (player < 5 && computer < 5) {
        gameResult = gameRound(button, computerPlay());
        results.textContent = gameResult;
        let result = gameResult.split(" ")[1];
        if (result === "Won!") {
            player = player + 1;
            playScore.textContent = `Player Score: ${ player }`;
        }
        else if (result === "Lost!") {
            computer = computer + 1;
            compScore.textContent = `Computer Score: ${ computer }`;
        }
    }
    if (player === 5) {
        results.textContent = "The player has won the game.  Congratulations!";
    }
    else if (computer === 5) {
        results.textContent = "The computer has won the game.  Try harder next time";
    }
    return 0;    
}

// Compare the random computer answer with an input from the player to see who wins.
function gameRound(playerSelection, computerSelection) {

    // Declare variables for case-insensitive so I can quickly use them later
    let play = playerSelection.toUpperCase();
    let comp = computerSelection.toUpperCase();


    // If selections are the same we can make a case for all of them
    if (play === comp) {
        return(`You Tied! Both opponents chose ${ computerSelection }`);
    }
    // With different selections, each one will be given its own condition and text
    else if (play === "ROCK") {
        if (comp === "PAPER") {
            return("You Lost! Paper beats Rock");
        }
        else {
            return("You Won! Rock beats Scissors");
        }
    }
    else if (play === "PAPER") {
        if (comp === "ROCK") {
            return("You Won! Paper beats Rock");
        }
        else {
            return("You Lost! Scissors beats Paper");
        }
    }
    else if (play === "SCISSORS") {
        if (comp === "ROCK") {
            return("You Lost! Rock beats Scissors");
        }
        else {
            return("You Won! Scissors beats Paper")
        }
    }
    // Condition for invalid player entry
    else {
        return "has error";
    }
}

// Have the computer randomly choose either rock, paper, or scissor
function computerPlay() {
    // Select random number where each number equates to a position
    id = Math.floor(Math.random() * 3);
    
    // Match number to position and return position as a string
    if (id === 0) {
        return "Rock";
    }
    else if (id === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}