// Write a JavaScript function to compute the factors of a positive integer.
// Note : Compute the factors doesn't mean, summing all the factors, it means listing all the factors of a given integer


const input = 2520
let count=[]


if(input <= 0){
    console.log("Factors can't be computed in the negative number and less or equal to 0")
}

for (let i = 1; i <= input; i++) {
        if (input % i === 0){
            count.push(i)
        }
    }
    console.log(count)
