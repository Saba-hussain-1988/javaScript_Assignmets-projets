
var secretNumber = 7 ;

// to take input from user
var guessNumber = prompt ("Guess the secret number (between 1 and 10):");

//check if user`s guess is correct or close enough
if (Number(guessNumber)=== secretNumber) {
    alert ("Bingo! Correct answer");
} else if (Number(guessNumber)=== secretNumber +1 || Number(guessNumber)=== secretNumber - 1){
    alert ("Close enough to the correct answer");
} else {
    alert ("Sorry, incorrect guess.\n The correct answer was " + secretNumber);
}