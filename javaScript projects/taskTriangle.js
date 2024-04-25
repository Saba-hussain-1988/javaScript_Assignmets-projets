

function generateTriangle(hieght) { 
for (var i =1; i <= hieght; i++) {
     row= '';
  for ( var j = 0; j< (hieght - i); j++){
    row = ' ';
  }
  for (var k = 0; k < 2 * i - 1 ; k++){
   row = ' * ';
  }
 
}
console.log(row);
}
generateTriangle(7);