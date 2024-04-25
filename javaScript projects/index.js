for (var i = 0; i < 8; i++){ 
if (i == 4) {
    break;
} 
console.log ("I = " + i);
}

for (var n = 8; n >= 0; n--) {
    if (n == 3) {
        continue;
    }
    console.log ("N = " + n);
}