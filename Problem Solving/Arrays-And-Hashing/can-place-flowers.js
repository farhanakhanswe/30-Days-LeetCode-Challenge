/* Question Link: https://leetcode.com/problems/can-place-flowers/ */

/* Optimized Solution:
Time Complexity: O(n)
Space Complexity: O(1)
*/

var canPlaceFlowers = function(flowerbed, n) {
    let maxCount = 0;
    
    for(let i = 0; i < flowerbed.length; i++) {
        let leftEl = flowerbed[i - 1];
        let rightEl = flowerbed[i + 1];
        let currentEl = flowerbed[i];
        
        if(currentEl === 0 && (leftEl === undefined || leftEl === 0) && (rightEl === undefined || rightEl === 0)) {
            maxCount++;
            flowerbed[i] = 1;
        }
    }
    
    return maxCount >= n;
}
