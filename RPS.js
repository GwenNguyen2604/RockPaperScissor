
// ============================================================================
//  constances
//============================================================================
/* Dictionary that assigns number to rps strings
   If a subtraction between 2 keys is 1 or -2, it's a 
   winning condition, -1 or 2 are losing condition */
const dict = { "paper": 0, "scissor": 1, "rock": 2,
               0: "paper", 1: "scissor", 2: "rock" };


// ============================================================================
// This function compares the answers and determines the winner of a round. The
// result is announced on screen.
//     It takes 2 integers as arguement
//     Returns 0 if draw or invalid input, 1 if payer wins, 2 if computer wins.
// ============================================================================
function playRound(playerNum, computerNum) { 
    // Variables
    let computer = dict[computerNum];       // string of computer's result
    let player = dict[playerNum];           // string of player's result
    let result = playerNum - computerNum;   // math. Get the result
    switch (result) {
        // Stalemate condition
        case 0:
            console.log("Both are " + computer + 
                         ". This round is a draw!");
            return 0;
        // Conditions where the player wins
        case 1:
        case -2:
            console.log("player wins this round. " + 
                         player + " beats " + computer + ".");
            return 1;
        // Conditions where computer wins
        case -1:
        case 2:
            console.log("computer wins this round. " + 
                         computer + " beats " + player + ".");
            return 2;
        // Default
        default:
            console.log("Error calculating.");
            return;
    }   
}



// ============================================================================
// This function determines the compputer's answer. The answer will be randome
//     It takes no arguement
//     Returns 0, 1 or 2
// ============================================================================
function computerPlay() {
    // Generate a randome number from 0-2
    var ranVal = Math.floor(Math.random() * 3);
    // 0 = paper, 1 = scissor, 2 = rock
    return ranVal;
}



// ============================================================================
// This function prompts the user to play the game and gets the input. It loops
// if the input is not appropriate
//     It takes no arguement
//     Returns an integer that relfects user's input.
// ============================================================================
function playerPlay() {
    // Prompt player for value
    let player = window.prompt("Rock, paper, or scissor?");
    /* Compare lowercased input to dictionary. Keep asking 
       til the right answer is given */
    while (!(player.toLowerCase() in dict)) {
        player = window.prompt(player + " is not valid. Please type again");
    }
    // Return the dictionary key
    alert("Your answer was " + player.toLowerCase());
    return dict[player.toLowerCase()];
}



// ============================================================================
// This function plays the game out for 5 rounds and announces results on the  
// console's screen
//     It takes no arguement
//     Returns none
// ============================================================================
function Game() {
    // Keep score on player and computer
    let playerScore = 0;
    let compScore = 0;

    // Iterate 5 times
    for (let i = 0; i < 5; i++) {
        // Call playRound()
        // append player's score if the player wins,
        // append computer's score if the computer wins
        switch(playRound(playerPlay(), computerPlay())) {
            case 1:
                playerScore += 1;
                break;
            case 2:
                compScore += 1;
                break;
            default:
                break;
        }
    }

    // Anouncing total score
    console.log("Player's score:   " + playerScore + 
                "\nComputer's score: " + compScore);
    // Announcing the winner, or if it's a draw
    if(playerScore == compScore) {
        console.log("It's a draw!");
    } else {
        let x = playerScore > compScore ? "player":"Computer";
        console.log(x + " wins the game");
    }
}



// ============================================================================
// This function asks the user if they wants to play a game of rock paper 
// scissor. Game() is called once it receives a confirmation
//     It takes no arguement
//     Returns none
// ============================================================================
function Prompter() {
    // Ask the player to play a game
    if (confirm("Do you want to play rock paper scissor?")) {
        Game();
    } else {
        alert("Game not excecuted. Thank you");
        return;
    }
}

// ============================================================================
// Calling the game
// ============================================================================
Prompter();