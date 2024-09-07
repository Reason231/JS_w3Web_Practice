// Write a JavaScript conditional statement to find the sign of the product of three numbers.

function signChecker(a,b,c){
    const product=a*b*c

    if(product > 0){
        console.log("The sign is +")
    }
    else{
        console.log("The sign is -")
    }
}
signChecker(3,7,2)