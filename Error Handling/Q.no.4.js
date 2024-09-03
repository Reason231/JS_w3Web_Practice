// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.
// Note: If the question ask to do with try and catch block , you can procced in this way else go on the easy way.


const positiveChecker=(a,b)=>{
    if(a <0 || b<0) {
        throw new Error("Error the numbers can't be in negative")
    }
    else{
        console.log("The number is positive")
    }
}

try{

    (positiveChecker(5,-5))
}
catch(e){
    console.log(e.message)
}
