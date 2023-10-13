/* Question link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */

/* Optimized Solution:
Time complexity: O(n)
Space complexity: O(1)
*/

var maxProfit = function (prices) {

    let maxProfit = 0;
    let lowestPrice = prices[0];
    let diffBetnPrices = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        } else {
            diffBetnPrices = prices[i] - lowestPrice;
            if (diffBetnPrices > maxProfit) {
                maxProfit = diffBetnPrices;
            }
        }
    }

    return maxProfit;
};