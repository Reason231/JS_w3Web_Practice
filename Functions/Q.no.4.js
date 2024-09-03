// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'


// Method 1
function alphaOrder(a){
    const order=a.split("").sort().join("")
    console.log(order)
}
alphaOrder("abdc")

// Note => Use of Array.from()
// Array.from() is a versatile method in JavaScript that creates a new, shallow-copied array instance from an array-like or iterable object. It allows you to easily convert other types of data into an array and can also be used with a mapping function to modify elements during the conversion.

// Method 2
function sortAlphabetically(str) {
    const input= Array.from(str)
    const sortedInput=input.sort()
    const orderInput=sortedInput.join("")
    console.log(orderInput)
}

let value = "aefg193";
let sortedString = sortAlphabetically(value);
