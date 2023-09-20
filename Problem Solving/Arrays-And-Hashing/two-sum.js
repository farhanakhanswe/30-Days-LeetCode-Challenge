/* Question link: https://leetcode.com/problems/two-sum/ */

/* Brute Force Solution:
   Time Complexity -> O(n^2) and 
   Space Complexity -> O(1) 
*/

var twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let firstNum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let secondNum = nums[j];
            let sum = firstNum + secondNum;

            if (sum === target) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}


/* Optimized Solution using HashMap:
   Time Complexity -> O(n) and
   Space Complexity -> O(n)
*/

var twoSum = (nums, target) => {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        firstNum = nums[i];
        diff = target - firstNum;
        indexOfDiff = map.get(diff);

        if (indexOfDiff != undefined) {
            return [i, indexOfDiff];
        }

        map.set(nums[i], i);
    }
}


/* Optimized Solution using Two Pointers:
   Time Complexity -> O(n) and
   Space Complexity -> O(n)
*/

var twoSum = (nums, target) => {

    let sortedNums = [...nums].sort((a, b) => (a - b));
    let firstPtr = 0;
    let secondPtr = nums.length - 1;

    while (firstPtr < secondPtr) {
        let sum = sortedNums[firstPtr] + sortedNums[secondPtr];

        if (sum === target) {
            firstIndex = nums.indexOf(sortedNums[firstPtr]);
            secondIndex = nums.lastIndexOf(sortedNums[secondPtr]);

            return [firstIndex, secondIndex];
        } else if (sum < target) {
            firstPtr++;
        } else {
            secondPtr--;
        }
    }

    return [-1, -1];
}