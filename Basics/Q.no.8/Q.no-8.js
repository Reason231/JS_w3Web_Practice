// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
guessNumber=()=>{
    const Guess=document.getElementById("Guess")
    const GuessValue=Guess.value
    console.log(GuessValue)

    const RandomNumber=Math.ceil(Math.random()*10)
    console.log(RandomNumber)
    
    if(RandomNumber == GuessValue){
        alert("You have guessed right")
    }
    else{
        alert("You haven't guessed right")
    }
}