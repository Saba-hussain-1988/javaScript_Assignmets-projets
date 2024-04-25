var A = ["cake", "apple pie", "cookies", "chips", "patties"];

var input = prompt("enter input.");

var found = false;
for (var i=0; i< A.length; i++) {
    if (A[i].toLowerCase() === input.toLowerCase()){
        document.write(input + " is available at index " + i + " in our bakery.");
        found = true;
        break;
    }
}
if (!found) {
    document.write("We are sorry. " + input + " is not available in our bakery.");
}