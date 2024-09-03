// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  

const number=15
const givenNumber=13

if(number>givenNumber){
    let c=(number-givenNumber)*2
    console.log(c)
}
else{
    console.log(givenNumber-number)
}