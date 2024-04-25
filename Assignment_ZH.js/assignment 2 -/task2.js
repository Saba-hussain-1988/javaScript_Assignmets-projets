
// get input value from user
var signalColor = prompt ("We should have to know about the traffic lights.\n What do they say? \n enter the color. ");

// check the input 
if (!signalColor){
    alert ("please enter the color name");
}
// Display the message based on the input color
else if(signalColor.toLowerCase() ==="red") {
    alert ("Must stop.");
} else if (signalColor.toLowerCase() ==="yellow") {
    alert ("Ready to move");
} else if (signalColor.toLowerCase() ==="green") {
    alert ("Move now");
} 
// if entery is invalid
else {
    alert ("Invalid entery. Please enter a valid color (red, yellow, green)");
}