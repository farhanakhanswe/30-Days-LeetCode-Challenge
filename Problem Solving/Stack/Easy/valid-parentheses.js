/* Question link: https://leetcode.com/problems/valid-parentheses/ */

/* Optimized Solution :
   Time Complexity -> O(n) and 
   Space Complexity -> O(n)
 */


var isValid = function (s) {

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let firstChar = s[i];

        if (firstChar === "{" || firstChar === "(" || firstChar === "[") {
            stack.push(firstChar);
        } else {
            let lastChar = stack.pop();
            if (
                (firstChar === "}" && lastChar !== "{") ||
                (firstChar === ")" && lastChar !== "(") ||
                (firstChar === "]" && lastChar !== "[")
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}