//declare and initialize the array
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// display the array
document.write("Cities list:<br> " + cities.join(", "));

// create the subset of the array
var selectedCities = cities.slice(2, 4);

//display the subset
document.write("<p>Selected cities list: <br> " + selectedCities.join(", ") + "<p>");