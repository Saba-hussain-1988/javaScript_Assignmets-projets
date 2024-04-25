document.write("<h1>Currency in PKR</h1>")
// Given values
var usDollars = 10;
var saudiRiyals = 25;

// Exchange rates
var usdToPkrRate = 155;
var sarToPkrRate = 41;

// Conversion in a single expression
var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Display the result
document.write("Total currency in PKR: " + totalPkr + " PKR");
