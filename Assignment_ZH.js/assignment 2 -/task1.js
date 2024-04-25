/* To take input from user
var city = prompt ("Enter your city name.");

//check the input is given by user or not
if (!city) {
    alert (" Please enter the city name.");

    // show the result according the input
} else if (city.toLowerCase() == "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Invalid entery");
}
*/


var num = 5;
for (var i = 1; i <=20; i++) {
    var result =num * i;
    console.log (num + " * " + i + " = " + result);
}