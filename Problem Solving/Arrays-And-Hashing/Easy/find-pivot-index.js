/* Question Link: https://leetcode.com/problems/find-pivot-index/ */

var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let leftMostPivotIndex = -1;

    // Calculate the sum of all elements in the array (rightSum)
    for (let num of nums) {
        rightSum += num;
    }

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        
        if (leftSum === rightSum) {
            leftMostPivotIndex = i;
            break;
        }

        leftSum += nums[i];
    }

    return leftMostPivotIndex;
};
