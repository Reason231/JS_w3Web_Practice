// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function array(a){
    const numbers=a
    const sortNumbers=numbers.sort((a,b)=>b-a)

    console.log(sortNumbers)

    const secondGreatestNumber=sortNumbers[1]
    const secondLowestNumber=sortNumbers[a.length-2]

    console.log(secondLowestNumber)
    console.log(secondGreatestNumber)

}

array([-1,0,1,2,5,4,3,8,9,])