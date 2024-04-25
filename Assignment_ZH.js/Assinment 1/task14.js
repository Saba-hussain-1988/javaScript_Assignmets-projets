var a = 2;
document.write (a + "<br>");  //  2

var b = 1;
document.write (b + "<br>");   // 1
//--a
//  first decrease the value of a, than assign
// --a = 1
// --b,
// first decrease the value of b, than assign
// --b = 0 .
// ++b,
// first increase the value of b, it place 1,
// ++b = 1.

// + b--, 
// first assign the value of b and then it will be decrease.
// --a - --b + ++b + b--
//  1  -  0  +  1  + 1   = 3

var result = --a - --b + ++b + b--;
document.write (result );    // 3

