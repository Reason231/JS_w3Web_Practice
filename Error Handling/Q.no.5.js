// Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

let arrayChecker=(a)=>{
    if( a.length === 0){
        throw new Error("Array is empty")
    }
    else{
        console.log("The array is not empty")
    }
}
arrayChecker([])