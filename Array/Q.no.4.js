// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]


function lastArray(a,n){
    console.log(a)
    console.log(n)
    const array=a.reverse()
    console.log(array)
    const newArray=[]

    if(n === undefined || n === null){
        console.log(a[0])
        return a
    }

    else if( a.length >= 0){
        for (let i = 0; i < n; i++) {
            newArray.push(a[i])
        }
        newArray.reverse()
        console.log(newArray)
    }
}


lastArray([7,9,0,-2],3)


// Method 2
function lastArray(a, n) {
    // If n is not provided, return the last element
    if (n === undefined || n === null) {
        return a[a.length - 1];
    }
    
    // If n is greater than the array length, return the entire array
    if (n > a.length) {
        return a;
    }
    
    // Return the last 'n' elements of the array
    return a.slice(-n);
}

console.log(lastArray([7, 9, 0, -2])); // Output: -2
console.log(lastArray([7, 9, 0, -2], 3)); // Output: [9, 0, -2]
console.log(lastArray([7, 9, 0, -2], 6)); // Output: [7, 9, 0, -2]