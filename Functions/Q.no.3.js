//  Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g


function generateCombinations(str) {
    let combinations = [];
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Loop through the characters after the current character
        for (let j = i + 1; j <= str.length; j++) {
            // Extract the substring and push it to the combinations array
            combinations.push(str.slice(i, j));
        }
    }
    
    return combinations;
}

// Example usage
const result = generateCombinations('dog');
console.log(result); // Output: ['d', 'do', 'dog', 'o', 'og', 'g']


// Explanation:
// Outer Loop (i): This loop iterates over each character in the string, starting with the first character (i).
// Inner Loop (j): This loop starts from the next character after i and continues to the end of the string. It extracts substrings from i to j using slice(i, j).
// slice(i, j): The slice method extracts a part of the string from index i to j-1, which gives us all possible combinations starting from each character.
// Combinations Array: All combinations are stored in the combinations array, which is returned at the end.

// Example with 'dog':
// First iteration (i = 0):
// slice(0, 1) → 'd'
// slice(0, 2) → 'do'
// slice(0, 3) → 'dog'
// Second iteration (i = 1):
// slice(1, 2) → 'o'
// slice(1, 3) → 'og'
// Third iteration (i = 2):
// slice(2, 3) → 'g'
// The final result is ['d', 'do', 'dog', 'o', 'og', 'g'], which includes all the possible combinations of the string "dog".