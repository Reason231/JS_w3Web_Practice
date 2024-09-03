// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

function divisonNumbers(a,b){
    if(b===0){
        throw new Error("Custom Error")
    }
    else{
        console.log(a/b)

    }
}

divisonNumbers(5,0)