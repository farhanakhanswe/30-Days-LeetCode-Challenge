/* leetcode not accepting this soln */


var thirdMax = function(nums) {
    nums = nums.sort((a, b) => a - b);

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], i);
        }
    }

    let mapKeysArr = Array.from(map.keys());

    if (mapKeysArr.length === 3) {
        return mapKeysArr[2];
    }

    return Math.max(...mapKeysArr);
};
