// Define Variables
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var displayWinNumber = document.getElementById('winNumber');
var displayLossNumber = document.getElementById('lossNumber');
var displayGuessNumber = document.getElementById('guessNumber');
var displayGuessValues = document.getElementById('guessValues');
var computerLetter = "";
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guesses = [];


// console.log(computerLetter);

// Initializes a new game
var resetGame = function() {
	guessesLeft = 10;
	displayGuessNumber.textContent = guessesLeft;
        guesses = [];
        computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        // console.log(computerLetter);
        displayGuessValues.textContent = "";
};

//Initialize first game
resetGame();

// Listen for the user to press a key
document.onkeyup = function(event) {

        // Determines which key was pressed
        var userGuess = event.key;

        if (userGuess === computerLetter) {					
                // If the guess is correct 
                wins++;
                displayWinNumber.textContent = wins;
                resetGame();
        } else if (guesses.indexOf(userGuess + " ") === -1 && alphabet.indexOf(userGuess) !== -1) {  
                // If the guess isn't a match and hasn't been guessed already check to see if it was valid	
                guessesLeft --;
                displayGuessNumber.textContent = guessesLeft;
                guesses += userGuess + " ";
                displayGuessValues.textContent = guesses;
                if (guessesLeft === 0) { 						
                	// If all the guesses are used up reset the game
                	losses ++;
                	displayLossNumber.textContent = losses;
                	resetGame();
                }
        } 
};