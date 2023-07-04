/* Question link: https://leetcode.com/problems/contains-duplicate/ */

/* Brute Force Solution :
   Time Complexity -> O(n^2) and
   Space Complexity -> O(1)
*/

var containsDuplicate = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let b = nums[j];

            if (a === b) {
                return true;
            }
        }
    }

    return false;
};

/* Optimized Solution : 
   Time Complexity -> O(n) and
   Space Complexity -> O(n)
*/

var containsDuplicate = function (nums, map = new Map()) {

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let indexOfnum = map.get(num);

        if (indexOfnum !== undefined) return true;

        map.set(num, i);
    }

    return false;
};
