// to take input from user
var firstNumber = Number(prompt("Enter the first number:"));

var operation = prompt ("Enter the operation:");

var secondNumber = Number (prompt("Enter the second number:"));

// operation and calculation
var result;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    result = "Invalid input. Please enter digits.";
} else {
    if (operation === "+") {
        result = firstNumber + secondNumber;
    }else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
    } else if (operation === "/") {
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            result = "Cannot divide by 0. please enter a non-zero second number.";
        }
    }else if (operation === "%" ) {
        if (secondNumber !== 0){
            result = firstNumber % secondNumber;
        } else {
            result ="Cannot find the reminder when divided by zero. Please enter a non-zero second number.";
        }
    } else {
        result = "Invalid operation. Please enter a valide operation (+, -, *, /, %).";
    }
}

//display the result
alert ("Result: " + result );
