/* Question link: https://leetcode.com/problems/valid-parentheses/ */

/* Optimized Solution :
   Time Complexity -> O(n) and 
   Space Complexity -> O(n)
 */


var isValid = function (s) {

    let arr = s;

    let stack = [];

    for (i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }

    for (i = 0; i < arr.length; i++) {
        let lastEl = stack.pop();
        let secondLastEl = stack.pop();

        if (lastEl === "}" && secondLastEl !== "{") return false

        if (lastEl === ")" && secondLastEl !== "(") return false

        if (lastEl === "]" && secondLastEl !== "[") return false

    }

    return true;
}