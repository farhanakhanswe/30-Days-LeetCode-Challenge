/* Question Link: https://leetcode.com/problems/greatest-common-divisor-of-strings/  */

var gcdOfStrings = function(str1, str2)
{
    if(str1.length > str2.length){
        [str1,str2] = [str2,str1];
    }
    
    let gcd = '';
    
    for( let i = 1; i <= str1.length ; i++)
    {
        const substring = str1.substring(0,i);
        
        if(isDivisor(substring, str1) && isDivisor(substring, str2)){
            gcd = substring;
        }
    }

    return gcd;
}

function isDivisor(substring, str){
    const times = str.length / substring.length;
    
    return substring.repeat(times) === str;
}
