/* Question Link: https://leetcode.com/problems/is-subsequence/  */

var isSubsequence = function(s, t) {
    const string = t;
    const subSequence = s;
    
    let currentIndexOfString = 0;
    let currentIndexOfSubSquence = 0;
    
    while (currentIndexOfString < string.length && currentIndexOfSubSquence < subSequence.length) {
        if (string[currentIndexOfString] === subSequence[currentIndexOfSubSquence]) {
            currentIndexOfSubSquence++;
        }
        currentIndexOfString++;
    }
    
    return currentIndexOfSubSquence === subSequence.length;
};
