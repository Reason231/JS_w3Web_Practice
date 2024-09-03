// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word to uppercase.

function uppercase(str) {
    var array1 = str.split(' ');
    console.log(array1)
  
    var newarray1 = [];
  
    // Iterate through each word in the array
    for (var x = 0; x < array1.length; x++) {
      // Push the word with its first letter capitalized and the rest of the letters unchanged
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));   // chartAt(0) is used to get the firstLetter of first array
    }
  
    // Join the modified words into a single string, separated by spaces
    return newarray1.join(' ');
  }
  
  // Log the result of calling uppercase with the input string "the quick brown fox" to the console
  console.log(uppercase("the quick brown fox")); 
  