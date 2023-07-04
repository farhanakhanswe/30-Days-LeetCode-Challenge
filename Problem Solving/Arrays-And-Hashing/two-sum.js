/* Question link: https://leetcode.com/problems/two-sum/ */

/* Brute Force Solution:
   Time Complexity -> O(n^2) and 
   Space Complexity -> O(1) 
*/

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

/* Optimized Solution:
   Time Complexity -> O(n) and
   Space Complexity -> O(n)
*/

var twoSum = function (nums, target, map = new Map()) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = (target - num);
        let indexOfDiff = map.get(diff);

        if (indexOfDiff !== undefined) {
            return [i, indexOfDiff];
        }

        map.set(num, i);
    }

    return []; // Return an empty array if no pair is found
};