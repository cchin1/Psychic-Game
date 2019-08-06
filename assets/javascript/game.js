//Array of possible computer choices
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variables for tracking
var guessSoFar = [];
var guessLeft = 9;
var numGuesses = 10;
var numWins = 0;
var losses = 0;

//reset all to default and start new game
function reset (){
    guessLeft = 9;
    guessSoFar = [];
    computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log (computerGuess);
}
reset();



// function to capture user's keyboard input and make the input lowercase
document.onkeyup = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //document.getElementById('guess').innerHTML = keyPress;
    addLetter(keyPress);

}

//function to catch repeat letter and/or add players guess to lettersGuessed
function addLetter (usersKeypress) {

    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
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

