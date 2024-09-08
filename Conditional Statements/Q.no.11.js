//  Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers

function commonFactor(a,b){
    let common=[]

    // Loop only up to the smaller of the two numbers
    let limit = Math.min(a, b);

    for (let i = 1; i <= limit; i++) {        
        if (a % i === 0 && b %i ==0){
            common.push(i)
        }
    }
    console.log(common)  // Common Factor 
    console.log(common.slice(-1))   // Highest GCD
}
commonFactor(18,24)