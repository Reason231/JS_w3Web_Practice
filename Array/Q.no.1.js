//  Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


function firstarray(inputarrays, n) {
    if (inputarrays == null || inputarrays.length === 0) {
        return [];
    }
    if (n == null) {
        return inputarrays[0];
    }
    if (n < 0) {
        return [];
    }
    return inputarrays.slice(0, n);
}

console.log(firstarray([7, 9, 0, -2]));        // Output: 7
console.log(firstarray([], 3));               // Output: []
console.log(firstarray([7, 9, 0, -2], 3));    // Output: [7, 9, 0]
console.log(firstarray([7, 9, 0, -2], 6));    // Output: [7, 9, 0, -2]
console.log(firstarray([7, 9, 0, -2], -3));   // Output: []
