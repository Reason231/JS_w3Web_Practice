// Write a JavaScript conditional statement to sort three numbers.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// Method 1
var x = 0;
var y = -1;
var z = 4;

// Checking the conditions to determine the order of variables
if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    } else {
        console.log(x + ", " + z + ", " + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    } else {
        console.log(y + ", " + z + ", " + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    } else {
        console.log(z + ", " + y + ", " + x);
    }
} 

// Method 2
var x = 0;
var y = -1;
var z = 4;

// Place variables in an array
var arr = [x, y, z];

// Sort the array in descending order
arr.sort((a, b) => b-a);

// Join the array into a string with commas and print
console.log(arr.join(", "));