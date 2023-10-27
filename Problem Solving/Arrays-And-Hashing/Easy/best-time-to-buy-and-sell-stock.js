/* Question link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */

/* Optimized Solution:
Time complexity: O(n)
Space complexity: O(1)
*/

const maxProfit = (prices) => {

    if (prices.length === 0) {
        return 0; 
    }

    let maxProfit = 0;
    let lowestPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        } else {
            let diffBetnPrices = prices[i] - lowestPrice;
            if (diffBetnPrices > maxProfit) {
                maxProfit = diffBetnPrices;
            }
        }
    }

    return maxProfit;
}