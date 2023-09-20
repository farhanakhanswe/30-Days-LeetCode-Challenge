/* Question Link: https://leetcode.com/problems/reverse-vowels-of-a-string/? */

var reverseVowels = function(s){
    
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    s = s.split('');
    
    let firstPtr = 0;
    let secondPtr = s.length - 1;
    
    while( firstPtr < secondPtr)
    {
        while( firstPtr< secondPtr && !vowels.has(s[firstPtr])) firstPtr++;
        
        while( firstPtr< secondPtr && !vowels.has(s[secondPtr])) secondPtr--;
        
        if( firstPtr < secondPtr)
        {
            let temp = s[firstPtr];
            s[firstPtr] = s[secondPtr];
            s[secondPtr] = temp;
            firstPtr++;
            secondPtr--;
        }
    }
    
    return s.join('');
}
