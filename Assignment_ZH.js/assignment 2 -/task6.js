// to take input
var number = prompt ("Enter your digit :");

// check the input is given by user or not.
if (!number) {
    alert ("Please input the value.");
} else if (number == 0) {
    alert ( "The number is zero.");
//Check the number is even or odd
} else if  ((Number(number) % 2)=== 0) {
    alert (number + " is an EVEN number");
}else if ((Number(number) % 2) === 1) {
    alert (number + " is an ODD number");
} else {
    alert("Invalid input.");
}