/* Question Link : https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/ */

/* Optimized Solution:
Time Complexity : 0(n)
Space Complexity: 0(n)
*/

const kidsWithCandies = (candies, extraCandies) => {
    let largestNum = 0;
    let totalCandies = 0;
    let result = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > largestNum) {
            largestNum = candies[i];
        }
    }

    for (let i = 0; i < candies.length; i++) {
        totalCandies = candies[i] + extraCandies;

        totalCandies >= largestNum ? result.push(true) : result.push(false);
    }

    return result;
}
