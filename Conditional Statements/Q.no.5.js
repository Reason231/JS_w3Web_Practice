// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.

function evenoddChecker(){
    for (let index = 0; index <=15; index++) {
        if(index % 2 === 0){
            console.log(`${index} is even`)
        }
        else{
            console.log(`${index} is odd`)
        }
        
    }
}
evenoddChecker()