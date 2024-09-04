// Write a JavaScript program to find the sum of squares of a numerical vector / inside array numbers.

const array=[1,2,3,4]

const squareArray=array.map((value)=>{
    return Math.pow(value,2)
})
console.log(squareArray)


const squareComputeArray=squareArray.reduce((accumulator,current)=>{
    return accumulator+current
})
console.log(squareComputeArray)