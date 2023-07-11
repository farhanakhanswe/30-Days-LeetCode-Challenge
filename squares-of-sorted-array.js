/* Question link: https://leetcode.com/problems/squares-of-a-sorted-array/ */

/* Optimized  Solution:
   Time Complexity -> O(n logn)
   Space Complexity -> O(n) 
*/

var sortedSquares = function (nums) {

    sortedOutput = [];

    for (let i = 0; i < nums.length; i++) {
        squaredValue = Math.pow(nums[i], 2);

        sortedOutput.push(squaredValue);
    }

    return sortedOutput.sort((a, b) => a - b);
}