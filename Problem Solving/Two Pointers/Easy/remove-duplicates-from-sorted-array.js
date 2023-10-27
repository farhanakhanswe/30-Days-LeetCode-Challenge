/* Question link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/ */

/* Optimized Solution : 
   Time Complexity -> O(n) and
   Space Complexity -> O(1)
*/

var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let i = 1;
    let j = 1;

    while (i < nums.length) {
        if (nums[i] !== nums[i - 1]) {
            nums[j] = nums[i];
            j++;
        }
        i++;
    }

    return j;
};