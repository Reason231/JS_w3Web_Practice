// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.


// Define a function named test_prime that checks whether a given number n is a prime number
function test_prime(n){
    if (n ===1){
        return false
    } else if(n===2){
        return true
    }
    else {
        for (let x = 2; x < n; x++) {
            // Here it checks the n, it it can be divisible by any other numbers. if it can be divisble then it is not a prime number
                if (n % 2 === 0){
                    return false
                }
                else{
                    return true
                }            
        }
    }
}
  
  // Log the result of calling test_prime with the input number 37 to the console
  console.log(test_prime(2));
  