/* Leetcode question link: https://leetcode.com/problems/reverse-string/ */

/* Optimized solution:
Time Complexity: 0(n)
Space Complexity: 0(1)
*/

var reverseString = function(s){
    
    firstIndex = 0;
    endIndex = s.length - 1;
    
    while( firstIndex < endIndex){
        
        let temp = s[firstIndex];
        s[firstIndex] = s[endIndex];
        s[endIndex] = temp;
        
        firstIndex++;
        endIndex--;
    } 
    
    return s;
}
