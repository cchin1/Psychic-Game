/*
1. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
2. Guess what letter I'm thinking of
3. Wins: (# of times the user has guessed the letter correctly)
4. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
5. Guesses Left: (# of guesses left. This will update)
6. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
7. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
8. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
*/

//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables for tracking
var playersGuess = [];
var computerGuess = [];
var numGuesses = 10;
var numWins = 0;
var losses = 0;

// using Math.random method along with String.fromCharCode method to generate random selection of random letter
var computerGuess = 
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
    );

console.log(computerGuess);

// function to capture user's keyboard input and make the input lowercase
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    //document.getElementById('guess').innerHTML = keyPress;
    addLetter(keyPress);

}

//function to catch repeat letter and/or add players guess to lettersGuessed
function addLetter (usersKeypress) {

    var repeatGuess = lettersGuessed.some(function(item){
        return item ===usersKeypress;
    })

    //alert player if the above code is true.
    if (repeatGuess) {
        alert(usersKeypress + " already guessed. try again");

        //if it is not a repeat guess, check if it's in word
    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);

        //show user's input in browser
        showLettersGuessed();

        //is user's input a match to computer guess
        guessMatch(usersKeypress);
    }

}

//function to show letters guessed in browser
function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("playersGuess".innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You win!");
        wins = wins + 1;
        showWins();
        //toggleGame();

    } else if (guessesLeft === 0) {
        
        alert("Sorry, need to start over.");
        resetVariables ();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }   
}

//function to show wins
function showWins() {
        document.getElementById("numWins").innerHTML = wins;
}
    
//function to show guesses remaining
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}

function resetVariables () {
    lettersGuessed = []
    guessesLeft = 10;
}

function startGame() {
    showGuessesRemaining();
    showWins();
}
// to make the computer guess another random letter once game is reset
startGame();
