// To take input from user
var character = prompt ("Enter a letter.");


// check input is single 
if (!character) {
    alert ("Please enter the letter.");
} else if (character.length === 1) { 
   var match = character.toUpperCase();
    //check if letter is vowel
    if (match === "A" ||match === "E" || 
        match === "I" || match === "O" || 
        match === "U"  ) {
        alert ("True. It is a vowel.");
    } else {
        alert ("False, It`s a consonant.");
    }
} else {
    alert ("Invalid input. Please enter the single letter.");
}