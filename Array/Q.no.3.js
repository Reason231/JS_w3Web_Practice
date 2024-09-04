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


// Method 1
function array(a, n) {
    console.log(a);
    console.log(n);
    console.log(a.length);
    const newArray = [];

    if (n === undefined || n === null) {
        console.log(a[0]);
        return a[0];
    }

    else if (n < 0) {
        console.log([]);
        return [];
    }

    else {
        for (let i = 1; i <= n && i <= a.length; i++) {
            newArray.push(a[i - 1]);
        }
        console.log(newArray);
        return newArray;
    }
}

array([7, 9, 0, -2]);  


// Method 2
function array(a, n) {
    // If n is not provided, return the first element
    if (n === undefined || n === null) {
        return a[0];
    }
    
    // If n is less than 0, return an empty array
    if (n < 0) {
        return [];
    }

    // Return the first 'n' elements of the array
    return a.slice(0, n);
}

// Test cases
console.log(array([7, 9, 0, -2]));         // Output: 7
console.log(array([], 3));                 // Output: []
console.log(array([7, 9, 0, -2], 3));      // Output: [7, 9, 0]
console.log(array([7, 9, 0, -2], 6));      // Output: [7, 9, 0, -2]
console.log(array([7, 9, 0, -2], -3));     // Output: []

