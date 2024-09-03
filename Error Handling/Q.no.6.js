// Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

function stringChecker(a){
    console.log(typeof a)
    try{
        if(a.length === 0 && typeof a==="string"){
            throw new Error("The string is empty")
        }
    }
    catch(e){
        console.log(e.message)
    }
}
stringChecker("")
