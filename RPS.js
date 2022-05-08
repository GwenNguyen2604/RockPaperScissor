// ============================================================================
// This function compares the answers and determines the winner of a round. The
// result is announced on screen.
//     It takes 2 strings as arguement
//     Returns 0 if draw or invalid input, 1 if payer wins, 2 if computer wins.
// ============================================================================
function playRound(player, computer) {
    // Create a dictionary and assign number to rps strings
    var dict = { "paper": 0, "scissor": 1, "rock":2 };

    // If the inputs are valid
    if (player in dict) {
        // math. Basic but neat.
        var result = dict[player] - dict[computer];
        // Stalemate condition
        if(0 == result) {
            console.log("Both are " + computer + ". Draw.");
            return 0;
        }
        // Conditions where the player wins
        else if ((1 == result) || (-2 == result)) {
            console.log("player wins. " + player + " beats " + computer + ".");
            return 1;
        }
        // Condirions where computer wins
        else if ((-1 == result) || (2 == result)) {
            console.log("computer wins. " + computer + " beats " + player + ".");
            return 2;
        }
    }
    // If the input is invalid
    console.log("invalid input");
    return 0;
}



// ============================================================================
// This function determines the compputer's answer. The answer will be randome
//     It takes no arguement
//     Returns a string of either "rock", "paper", or "scissor". 
//     Returns "error" if the previous 3 strings cannot be generated
// ============================================================================
function computerPlay() {
    // Generate a randome number from 0-2
    var ranVal = Math.floor(Math.random() * 3);
    // 0 = rock, 1 = paper, 2 = scissor
    switch(ranVal) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            break;
    }
    // returns rock if the answer cannot be generated.
    return "rock";
}



// ============================================================================
// This function prompts the user to play the game and gets the input.
//     It takes no arguement
//     Returns the user input string.
// ============================================================================
function playerPlay() {
    // Prompt player for value
    let player = window.prompt(
                "Let's play for 5 rounds\nRock, paper, or scissor?");
    // returns the lowercased input
    return player.toLowerCase();
}



// ============================================================================
// This function plays the game out for 5 rounds and announces results on the  
// console's screen
//     It takes no arguement
//     Returns none
// ============================================================================
function game() {
    // Keep score on player and computer
    let playerScore = 0;
    let compScore = 0;

    // Iterate 5 times
    for (let i = 0; i < 5; i++) {
        // Call playRound(), which calls playerPlay() and computerPlay()
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
    }
    else {
        let x = playerScore > compScore ? "player":"Computer";
        console.log(x + " wins the game");
    }
}



// ============================================================================
// Calling game
// ============================================================================
game();