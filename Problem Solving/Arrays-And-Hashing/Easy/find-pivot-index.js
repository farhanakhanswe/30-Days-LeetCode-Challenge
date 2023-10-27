/* Question Link: https://leetcode.com/problems/find-pivot-index/ */

/* Brute Force Solution 
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/

const pivotIndex = (nums) => {

    if (nums.length === 1) {
        return 0;
    }

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++)
        {
            leftSum += nums[j];
        }

        for (let k = nums.length - 1; k > i; k--) {
            rightSum += nums[k];
        }

        if (leftSum == rightSum) return i;

        leftSum = 0;
        rightSum = 0;

    }

    return -1;
};

