/* Question link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */

var maxProfit = function (prices) {

    let leftPtr = 0;
    let rightPtr = 1;
    let maxProfit = 0;

    while (rightPtr < prices.length) {
        let moveRight = prices[rightPtr] <= prices[leftPtr];
        if (moveRight) {
            leftPtr = rightPtr;
        }

        let newProfit = prices[rightPtr] - prices[leftPtr];

        maxProfit = Math.max(maxProfit, newProfit);
        rightPtr++;
    }

    return maxProfit;
};