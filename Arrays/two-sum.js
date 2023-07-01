/* Question link: https://leetcode.com/problems/two-sum/ */

/* Brute Force Solution */

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let b = nums[j];
            let sum = a + b;

            if (sum === target) {
                return [j, i]; 
            }
        }
    }

    return [];
};


