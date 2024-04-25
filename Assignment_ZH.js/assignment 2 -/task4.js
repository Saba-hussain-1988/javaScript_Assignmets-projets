document.write ("<h1> Marks Sheet</h1>");

// take input and show the marks for subject 1
var English = prompt ("Marks obtained in English");
document.write ("English = " + English + "<br>");

// take input and show the marks for subject 2
var Mathematics = prompt ("Marks obtained in Mathematics");
document.write ("Mathematics = " + Mathematics + "<br>");

// take input and show the marks for subject 3
var Computer = prompt ("Marks obtained in Computer");
document.write ("Computer = " + Computer + "<hr>");
 
//check the input is given by user or not 
if (!English || !Mathematics || !Computer) {
   alert ("Please enter the marks.");
} else if ( isNaN(English) || isNaN(Mathematics) || isNaN(Computer)) {
    alert("Please enter the marks in figure.");
}

// take input and show total marks
var totalMarks = prompt ("Total Marks");
document.write ("Total marks : " + totalMarks + "<br>");

// calculate and show total obtained marks 
var totalObtainedMarks = Number(English) + Number(Mathematics) + Number(Computer) ;
document.write ("Marks obtained : " + totalObtainedMarks + "<br>");

// calculate and show percentage 
var percentage = (totalObtainedMarks / totalMarks ) * 100;
document.write ("Percentage : " + percentage + "% <br>" );

// show the grade and remarks
if  (percentage >= 80) {
    document.write("Grade : A-one <br>");
  
    document.write("Remarks : Excellent");
}
// grade A
else if (percentage >= 70) {
    document.write("Grade : A <br>");
   
        document.write("Remarks : Good");
}
//grade B
else if (percentage >= 60) {
    document.write ("Grade : B <br>");
    
        document.write ("Remarks : You need to improve");
}
// Fail
else if (percentage < 60 ) {
    document.write("Grade : Fail <br>");
    document.write("Remarks : Sorry");
} else {
   alert("Invalid input.");
}