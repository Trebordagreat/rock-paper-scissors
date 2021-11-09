// Game of Rock Paper Scissors
let playerSelection = "Scissors"
console.log(game())

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
    else {
        if (comp === "ROCK") {
            return("You Lost! Rock beats Scissors");
        }
        else {
            return("You Won! Scissors beats Paper")
        }
    }
    // I will have to add return value that can then be added to the total scores in the game
}

// Create a function that repeats all of the above steps 5 times
function game() {
    // Add variables to keep track of player and computer scores
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        let game = gameRound(playerSelection, computerPlay());
        console.log(game);
        // Grab the second word from gameRound string to get result.
        let result = game.split(" ")[1];

        // Based on second word, add score to player or computer variabler
        if (result === "Won!") {
            player = player + 1;
        }
        else if (result === "Lost!") {
            computer = computer + 1;
        }

    }
    // After the game has played out five times, compare scores and announce winner.
    if (player > computer) {
        return "You have won Rock Paper Scissors! Congratulations";
    }
    else if (player < computer) {
        return "You have lost Rock Paper Scissors. You're bad";
    }
    else {
        return "No winners or losers today";
    }
}

// In this function, create a prompt that asks user for their input.