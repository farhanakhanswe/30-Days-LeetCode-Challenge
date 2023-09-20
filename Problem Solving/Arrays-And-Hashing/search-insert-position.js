/* Question Link: https://leetcode.com/problems/search-insert-position/ */

var searchInsert = function(nums, target) {
    
    let leftPtr = 0;
    let rightPtr = nums.length - 1;

  while (leftPtr <= rightPtr) {
    const mid = Math.floor((leftPtr + rightPtr) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      leftPtr = mid + 1;
    } else {
      rightPtr = mid - 1;
    }
  }

  return leftPtr;

};
