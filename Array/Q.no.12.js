// Write a JavaScript program to compute the sum and product of an array of integers.


const array = [1,2,3,4];

const computeSum=array.reduce((prevValue,currentValue)=>{
    return prevValue+currentValue  
})
console.log(computeSum)

const computeProduct=array.reduce((prevValue,currentValue)=>{
    return(prevValue*currentValue)
})
console.log(computeProduct)
