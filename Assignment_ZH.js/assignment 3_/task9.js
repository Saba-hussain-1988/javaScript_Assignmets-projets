var A = [24, 53, 78, 91, 12];

//Assume the first element is largest
var largest = A[0];

//Iterate through the array to find the largest number
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.write("The larg3est number in the array is: " + largest);