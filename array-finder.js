function findMissingNumber(arr, n) {
    // Calculate the sum of the first n natural numbers
    // It sums the [1,2,3,4,5,6] directly 
    const orgSum = (n * (n + 1)) / 2;
    
    // Calculate the sum of the array
    const sum = arr.reduce((init, curr) => init + curr, 0);
    
    // Return the difference between the expected sum and the actual sum
    return orgSum - sum;
 }
 
 const arr = [1, 2, 4, 5, 6];
 const n = 6;
 console.log(findMissingNumber(arr, n));  // Output: 3
 