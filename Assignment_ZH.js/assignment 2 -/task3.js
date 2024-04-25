 //given condition for variable a is true
 var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}


// given condition for variable b is false (postfix)
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


// condition 1 is false , first assign the value then increased
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}


// condition 2 is true ,
if (c === 13){
alert("condition 2 is true");
}


// condition 3 is false, prefix 
if (++c < 14){
alert("condition 3 is true");
}


// condition 4 is true.
if(c === 14){
alert("condition 4 is true");
}


// the cost equals
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

  // true, car smaller than cat
 if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
     if("car" < "cat"){
    alert("car is smaller than cat");
    }