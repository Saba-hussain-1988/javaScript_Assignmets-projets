// declared correctPassword
var correctPassword = "23.kl=DL";

//  to take from user
var password = prompt ("Enter your password.");

// check user input or not
if (!password) {
    alert ("Please enter your password");
} else {
    // check password is correct or not
    if (correctPassword === password) {
        alert ("Correct! The password you entered macthes the original password.");
    } else {
        alert ("Incorrect Password")
    }
}
