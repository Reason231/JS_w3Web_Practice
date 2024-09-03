// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output: 34223


// Method 1. Through the help of array
function reverse(input){


    const str=input.toString()  // input.toString() is used to convert the number into a string
   
    const array=str.split("")  // used to convert that string into an array of characters, allowing you to reverse the order of the digits.


    const reversedArray=array.reverse()


    const reversedNumber=reversedArray.join("")
    console.log(reversedNumber)  // output 321
}


reverse(123)

// Method 2. Through the help of loop
function reverseNumber(num) {
    let reversed = 0;
    let original = num;


    while (original > 0) {
        // Get the last digit
        const digit = original % 10;              // 789 % 10 = 9
        // Update reversed number
        reversed = reversed * 10 + digit;         // 0*10 + 9 = 9
        // Remove the last digit from the original number
        original = Math.floor(original / 10);     // (789/10)=78
    }


    return reversed;
}


const x =789;
console.log(reverseNumber(x));  // output 987
