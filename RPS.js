// ============================================================================
//  constances, global values
//============================================================================
/* Dictionary that assigns number to rps strings
   If a subtraction between 2 keys is 1 or -2, it's a 
   winning condition, -1 or 2 are losing condition */
const dict = { "paper": 0, "scissor": 1, "rock": 2,
               0: "paper", 1: "scissor", 2: "rock" };



// ============================================================================
// This function asks the user if they wants to play a game of rock paper 
// scissor. Game() is called once it receives a confirmation
//     It takes no arguement
//     Returns none
// ============================================================================
function Prompter() {
    /* Ask the player to play a game. Exit if player doesn't play */
    if (window.confirm("Do you want to play rock paper scissor?")) {
        Game();
    } else {
        window.alert("Game not excecuted. Thank you");
        console.log("Game is terminated");
        return;
    }
} // End of func



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

    /* Iterate 5 times */
    for (let i = 0; i < 5; i++) {
        /* Try catch block for error handling */
        try {
            // Call playRound()   
            switch(playRound(playerPlay(), computerPlay())) {
                case 1:
                    // append player's score if the player wins,
                    playerScore += 1;
                    break;
                case 2:
                    // append computer's score if the computer wins
                    compScore += 1;
                    break;
                default:
                    break;
            }
        } catch(err) {
            console.log("The game is terminated");
            return;
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
} // End of func



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
        // Default. Throw an error 
        default:
            throw "Error calculating.";
    }   
} // End of func



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
} // End of func



// ============================================================================
// This function prompts the user to play the game and gets the input. It loops
// if the input is not appropriate
//     It takes no arguement
//     Returns an integer that relfects user's input.
// ============================================================================
function playerPlay() {
    // Prompt player for value
    let player = (window.prompt("Rock, paper, or scissor?")).toLowerCase();

    /* If the answer is not in dict, Loop until 
       the answer is right or function terminated */
    while (!(player in dict)) {
        // If the player hits cancel or gives null answer
        if(!player) {
            // Recursively calling the function if the player still wants to play
            if (window.confirm(
                "Do you still want to play?\nOK to play, Cancel to exit")){
                return playerPlay();
             // Throws an error otherwise
            } else {
                window.alert("The game is stopped. Thank you");
                throw "The game is stopped.";
            }
        }
        // Prompt for answer again otherwise
        player = (window.prompt(player + " is not valid. Please type again")).toLowerCase();
    }
    // Return the dictionary key
    window.alert("Your answer was " + player);
    return dict[player];
} // End of func



// ============================================================================
// Calling the game
// ============================================================================
Prompter();