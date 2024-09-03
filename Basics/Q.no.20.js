// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
const checker = (a, b) => {
    if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        console.log("One number is positive and the other is negative.");
    } else {
        console.log("Both numbers are either positive or negative.");
    }
}

checker(-5, 2); 
