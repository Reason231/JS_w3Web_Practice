function checkPalindrom(input){

    // This regex removes the alphanumeric for eg: ma,dam => madam
    var string=input.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var count=0


    // Check whether the string is empty or not
    if (string === ''){
        console.log("Nothing found!")
        return false
    }
    

    // Check if the length of the string is even or odd 
    if((string.length) % 2 === 0){
        count = (string.length /2)  // It helps to compare from the first and last because 4 character strings will be first 2 and last 2 and it compares
        console.log(count)
    }
    else{
        if(string.length ===1){
            console.log("Entery is palindrome") // because 1 letter is always palindrome
            return true
        }
        else{
            // If the length of the string is makes the even by removing 1 character
            count = (string.length-1) / 2; // eg: madam / 2 => (madam - 1) /2 => mada /2 => 2
        }
    }

    // Loop through to check the first character to the last character and then move next

    for(var x=0;x<count;x++){
        // Comparision between first and last character
        if (string[x] != string.slice(-1-x)[0]){
            console.log("Entry is not a palindrome")
            return false;
        }
    }
    console.log("Entry is a palindrome")
    return true;

}

checkPalindrom("Madams")
checkPalindrom("Maam")

