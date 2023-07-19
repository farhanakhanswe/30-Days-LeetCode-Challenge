/* Question Link: https://leetcode.com/problems/move-zeroes/ */

var moveZeroes = function(nums){
    
    let nonZeroIndex = 0;
    let currentIndex = 0;
    
    while(currentIndex < nums.length)
    {
        if(nums[currentIndex] !== 0)
        {
            nums[nonZeroIndex] = nums[currentIndex];
            nonZeroIndex++;
        }
        
        currentIndex++;
    }
    
    for(let i = nonZeroIndex; i< nums.length ; i++)
    {
        nums[i]=0;
    }
    
    return nums;
}
