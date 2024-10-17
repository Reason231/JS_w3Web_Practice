// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
arr1.sort()
console.log(arr1)
let frequency=0
let mostFrequency=1
let item;

for (let i = 0; i < arr1.length; i++) {
    
    for (let j = 1; j <= arr1.length; j++) {
        if(arr1[i] == arr1[j]){
            frequency++
        }

        // If the new item frequency is greater than the previous item frequency then it updates the new frequency 
        if (frequency>mostFrequency){
            mostFrequency=frequency
            item=arr1[i]
        }
    }
    
    // Reset the current item's frequency for the next iteration
    frequency=0
}
console.log(`item (${item}) => ${mostFrequency} times repeated`)