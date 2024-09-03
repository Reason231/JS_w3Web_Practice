// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5 and "e,u,i,o,o"

// Method 1
function vowelChecker(a) {
    let vowels = a.toLowerCase();
    let count = 0;
    console.log(vowels);

    let array = vowels.split("");

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u") {
            count = count + 1;
            console.log(array[i])
        }
    }
    console.log(count);
}

vowelChecker("The quick brown fox");

// Method 2
function vowelChecker2(a) {
    const matches = a.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowelChecker2("The quick brown fox"));  // Output: 5

