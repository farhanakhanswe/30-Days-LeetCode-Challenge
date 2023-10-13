/* Question Link: https://leetcode.com/problems/find-the-difference-of-two-arrays/ */

var findDifference = function(nums1, nums2)
{
    let nums1Set = new Set(nums1);
    let nums2Set = new Set(nums2);
    
    let distinctNums1Set = [...nums1Set].filter(value => !nums2Set.has(value));
    
    let distinctNums2Set =[...nums2Set].filter(value => !nums1Set.has(value));
    
    return [distinctNums1Set, distinctNums2Set];
    
}
