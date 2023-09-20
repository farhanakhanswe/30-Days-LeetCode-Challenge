/* Question Link: https://leetcode.com/problems/majority-element/ */

var majorityElement = function(nums) {
    
    let map = new Map();
    
   for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    let majorityCount = 0;
    let majorityEl = null;

    map.forEach((count, element) => {
        if (count > majorityCount) {
            majorityCount = count;
            majorityEl = element;
        }
    });

    return majorityEl;
    
};
