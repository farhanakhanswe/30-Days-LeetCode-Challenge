/* Question Link: https://leetcode.com/problems/majority-element/ */

/* Optimized Solution :
   Time Complexity -> O(n) and 
   Space Complexity -> O(n)
 */


var majorityElement = function (nums) {

    if (nums.length == 1) {
        return nums[0];
    }

    let map = new Map();
    let maxCount = 0;
    let majorityEl = null;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
            if (map.get(nums[i]) > maxCount) {
                maxCount = map.get(nums[i]);
                majorityEl = nums[i];
            }
        } else {
            map.set(nums[i], 1);
        }
    }

    return majorityEl;

};
