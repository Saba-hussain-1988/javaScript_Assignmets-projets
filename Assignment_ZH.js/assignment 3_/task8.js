//a. to ganarate the counting
document.write("Counting: " );    

for (var i = 1; i <= 15; i++){
     document.write(i + ", ");    
}

//b.Reverse counting
document.write("<br>Reverse counting: ") 
for(var j = 10; j !== 0; j--) {
    document.write(j + ", ");
}

//c. Even numbers
document.write("<br>Even: ");
for (var k = 0; k <= 20; k++) {
    if ((k % 2) === 0) {
        document.write(k +", ");
    }
}


//d. Odd number
document.write("<br>Odd: ");
for (var l = 1; l <= 20; l++) {
    if ((l % 2) == 1) {
        document.write(l + ", " );
    }
}


// e. series of k(1000)
document.write("<br>Series: ");
for (var m = 1; m <= 20; m++) {
    if ((m % 2) === 0) {
        document.write(m +"k, ");
    }
}