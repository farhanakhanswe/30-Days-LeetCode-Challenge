/* Question Link: https://leetcode.com/problems/majority-element/ */

/* Optimized Solution :
   Time Complexity -> O(n) and 
   Space Complexity -> O(n)
 */

const majorityElement = (nums) => {

    let numsMap = new Map();
    let majorityEl = null;
    let highestCount = 0;
    let condition = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            let currCount = numsMap.get(nums[i]);
            numsMap.set(nums[i], currCount + 1);
        } else {
            numsMap.set(nums[i], 1);
        }
    }

    for (let [value, count] of numsMap) {
        if (count > highestCount && count > condition) {
            highestCount = count;
            majorityEl = value;
        }
    }

    return majorityEl;

};