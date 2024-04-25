var num = Number (prompt ("Please enter your"));
var isPrime = true;
for (i = 2; i < num; i++) {
    var result = num % i;
    if (result == 0) {
        document.write ("Number is not Prime."+ num + " I " + i + "<br>");
        isPrime = false;
        break;
    }
} 
if (isPrime) {
    document.write("Number is Prime." + num + " I " + i);
}