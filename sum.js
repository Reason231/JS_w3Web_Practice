var twoSum = function(nums, target) {
    
    let a = (nums.length - 1);
    let result = [];  // To store the indices
    
    for (let i = a; i >= 0; i--) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] + nums[i] === target && j !== i) {  // Make sure i and j are not the same
                result.push(j, i);  // Store indices
                return result;      // Return result as soon as found
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
