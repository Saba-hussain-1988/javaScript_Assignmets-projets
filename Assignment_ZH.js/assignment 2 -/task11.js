// TO take input from user
var userTime = prompt ("Enter time (24 hours formate)");

//check user input the time or not
if (!userTime) {
    alert ("Please enter the time.");
} else {
    // show the message according the time
    if (userTime >= "00:00" && userTime < "12:00") {
        alert ("Good Morning");
    } else if (userTime >= "12:00" && userTime < "17:00") {
        alert ("Good Afternoon");
    } else if (userTime >= "17:00" && userTime <"21:00") {
        alert ("Good Evening");
    } else if (userTime >= "21:00" && userTime < "23:59") {
        alert ("Good Night");
    } else {
        alert ("Incorrect time or formate.");
    }
}