// To take input from user
var userInput = Number(prompt ("Please enter in digits."));


// Check the input is a number or not
if (isNaN(userInput)) {
    alert ("Invalid input. Please enter digits.");
} else {
    // Determine whether the number is positive, negative, or zero.
    if (userInput === 0) {
        alert ("The number is zero.");
    } else if (userInput > 0) {
        alert ("The number is positive.");
    } else if(userInput < 0) {
        alert ("The number is negative.");
    } 
}