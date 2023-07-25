/* Question Link: https://leetcode.com/problems/find-pivot-index/ */

// NOT CORRECT //

var pivotIndex = function(nums) {
    
    let leftSum = 0;
    let rightSum = 0;
    let leftMostPivotIndex = 0;

    for(let i = 0; i < nums.length; i++)
    {
        leftSum+= nums[i];
        rightSum -= nums[nums.length - 1 - i];
        
        if(leftSum === rightSum)
        {
            leftMostPivotIndex =  i;
            break;
        }
    }

    if(leftMostPivotIndex != 0)
    {
        return leftMostPivotIndex;
    }
    
    return -1;
}
