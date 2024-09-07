// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.


function checkRangeError(a, n) {
    try {
        if (typeof n === "number" && n >= 0 && n < a.length) {
            console.log(a[n]);
            console.log("The index access is in the range");
        } else {
            throw new RangeError("The index is out of range");
        }
    } catch (e) {
        if (e instanceof RangeError) {  // checks if the error object (e) is an instance of the RangeError class.
            console.log(e.message);
        } else {
            console.log("An unexpected error occurred:", e.message);
        }
    }
}

checkRangeError([1, 2, 3], 3);
