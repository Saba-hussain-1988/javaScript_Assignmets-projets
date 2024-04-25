// initialize an array with color name
var color = [" Red", " Green", " Blue"];

//display the array elements
document.write("<h2>Color Array:</h2>");
document.write("<p>" + color + "</P>");

//add color to the beginning and display the updated array
var addAtBeginning = prompt("Enter a color to add to the beginning:");
color.unshift(addAtBeginning);
document.write("<h3>Updated Color Array: </h3><p>" + color + "</p>");

//add color to the end and diplay the updted array
var addInEnd = prompt("Enter a color to add to the end:");
color.push(addInEnd);
document.write("<p>" + color + "</p>");

//add two more colors to the beginning and display the updated array 
color.unshift(" Grey" , " Black");
document.write("<p>" + color + "</p>");

//delete the first color in the array and display the update
color.shift();
document.write("<p>" + color + "</p>");

//delete the last color and display the update
color.pop();
document.write("<p>" + color + "</p>");

//add a color at a specific index and display the update
var s_index = prompt("Enter the index");
var s_color = prompt("Enter the color");
color.splice(s_index, 0, s_color);
document.write("<p>" + color + "</p>");

// delete color(s) from spacific index and display the update
var index_delete = prompt("Enter the index you want to delete.");
var n_element = prompt ("Enter the number 0of element you want to delete.");
color.splice(index_delete, n_element);
document.write("<p>" + color + "</p>");