// Write a JavaScript function that accepts an argument and returns the type.


function typeChecker(a){
    console.log(typeof a)
}
typeChecker("a")
typeChecker(123);        // Output: "number"
typeChecker(true);       // Output: "boolean"
typeChecker([1, 2, 3]);  // Output: "object" (arrays are objects in JavaScript)
typeChecker({a: 1});     