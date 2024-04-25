//array to store students names
var s_name = ["Michael", "John", "Tony"];

// array to store scores of each student
var s_score = [230, 320, 480]; //assume out of 500


//display the name , score and percentage through loop
document.write("<h2>Student Scores and Percentage:</h2>");
document.write("<ul>");

for (var i = 0; i < s_name.length; i++) {
    
     //calculate percentage
    var percentage = (s_score[i] / 500) * 100;
    document.write("<li>");
    document.write("Score of " + s_name[i] + " is " + s_score[i] + ". Percentage: " + percentage +"%");
    document.write("</li>");
}
document.write("</ul>");