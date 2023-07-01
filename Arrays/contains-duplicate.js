/* Question link: https://leetcode.com/problems/contains-duplicate/ */

/* Brute Force Solution */

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

