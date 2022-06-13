// ============================================================================
//  constances, global values
//============================================================================
/* Dictionary that assigns number to rps strings
   If a subtraction between 2 keys is 1 or -2, it's a 
   winning condition, -1 or 2 are losing condition */
const dict = { 'paper': 0, 'scissor': 1, 'rock': 2,
               0: 'paper', 1: 'scissor', 2: 'rock' };
// Player and Computer score
let playerScore = 0;
let compScore = 0;

// ============================================================================
// This function plays the game out for 5 rounds and announces results on the  
// console's screen
//     It takes no arguement
//     Returns none
// ============================================================================
function PlayRound(player) {
    /* Iterate as long as neither player has reached score of 5 */
    if(playerScore < 3 && compScore < 3) {
        /* Try catch block for error handling */
        try {
            // Call playRound()   
            switch(RoundCalc(player, computerPlay())) {
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
            // Anouncing current score
            writeToDoc('Player:   ' + playerScore); 
            writeToDoc('Computer: ' + compScore);
        } catch(err) {
            console.log('The game is terminated');
            return;
        }
    }

    if(playerScore == 3 || compScore == 3) {
        // Announcing the winner
        let x = playerScore > compScore ? 'Player':'Computer';
        writeToDoc('The winner is ' + x);
        return;
    }  
} // End of func


// ============================================================================
// This function compares the answers and determines the winner of a round. The
// result is announced on screen.
//     It takes 2 integers as arguement
//     Returns 0 if draw or invalid input, 1 if payer wins, 2 if computer wins.
// ============================================================================
function RoundCalc(playerNum, computerNum) { 
    // Variables
    let comp = dict[computerNum];       // string of computer's result
    let pl = dict[playerNum];           // string of player's result
    let result = playerNum - computerNum;   // math. Get the result
    
    switch(result) {
        // Stalemate condition
        case 0:
            writeToDoc('Both are ' + comp + '. This round is a draw!');
            return 0;
        // Conditions where the player wins
        case 1:
        case -2:
            writeToDoc('player wins this round. ' + pl + ' beats ' + comp + '.');
            return 1;
        // Conditions where computer wins
        case -1:
        case 2:
            writeToDoc('computer wins this round. ' + comp + ' beats ' + pl + '.');
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
//
// ============================================================================
function writeToDoc(str) {
    let container = document.getElementById('announce');
    let score = document.createElement('p');
    score.innerHTML = str;
    container.appendChild(score);
} // End of func


// ============================================================================
// Calling the game
// ============================================================================
/* Only run the game if neither player has reached 5 points */
const  ans = document.querySelectorAll("button");
ans.forEach(button => button.addEventListener("click", function() {
    if(playerScore < 3 && compScore < 3) {
        let player = this.getAttribute("name");
        PlayRound(dict[player]);
    }
}));
