// Declare and initialize an array with education qualifications.
var educationQualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// display the qualifictions in the browser
document.write("<h2>Qualifications<h2>");
document.write("<ol>");

// display the array through loop
for (var i =0; i <educationQualifications.length; i++) {
    document.write ("<li>" + educationQualifications[i] + "</li>");
}

document.write("</ol>");