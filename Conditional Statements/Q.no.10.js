// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * * 


for (let i = 1; i <= 5; i++) { // Loop to control the number of rows
    let row = '';
    
    // Add '*' to the row, repeating based on the current value of i
    for (let j = 1; j <= i; j++) {
        row = row + '* ';
    }
    
    console.log(row); 
}
