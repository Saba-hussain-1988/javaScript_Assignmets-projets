function generateTriangle(height) {
    for (let i = 1; i <= height; i++) {
        // Print spaces before the stars
        for (let j = 0; j < height - i; j++) {
            process.stdout.write(" ");
        }
        // Print stars
        for (let k = 0; k < 2 * i - 1; k++) {
            process.stdout.write("*");
        }
        // Move to the next line after each row
        console.log();
    }
}

// Example: Generating a triangle with height 5
generateTriangle(3);

function generateTriangle(height) {
 
    for ( i = 1; i <= height; i++) {
         row = '';
        
        // Add spaces before the stars
        for ( j = 0; j < height - i; j++) {
            row += ' ';
        }
        
        // Add stars
        for ( k = 0; k < 2 * i - 1; k++) {
            row += '*';
        }

        // Print each row
        document.write(row + "<br>");
    }
}

// Example: Generating a triangle with height 5
generateTriangle(7);