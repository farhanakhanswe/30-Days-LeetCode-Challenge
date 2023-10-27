/* Leetcode question link: https://leetcode.com/problems/third-maximum-number/ */


var thirdMax = function(nums){
    
    let set = new Set(nums);
    
    setArr = Array.from(set);

    setArr.sort((a,b) => (b - a ));
    
    if (setArr.length >= 3) {
        return setArr[2]; // return thirdMax
    }

    return Math.max(...setArr); // return maxNum;
    
}
