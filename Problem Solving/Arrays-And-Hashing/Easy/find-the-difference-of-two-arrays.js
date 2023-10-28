/* Question Link: https://leetcode.com/problems/find-the-difference-of-two-arrays/ */

/* Optimized Solution : 
   Time Complexity -> O(n) and
   Space Complexity -> O(n)
*/

const findDifference = (nums1, nums2) =>
{
    let nums1Set = new Set(nums1);
    let nums2Set = new Set(nums2);
    let onlyInNums1Arr = [];
    let onlyInNums2Arr = [];

    for (let value of nums1Set) {
        if (!nums2Set.has(value)) {
            onlyInNums1Arr.push(value);
        }
    }

    for (let value of nums2Set) {
        if (!nums1Set.has(value)) {
            onlyInNums2Arr.push(value);
        }
    }

    return [onlyInNums1Arr, onlyInNums2Arr];
    
}
