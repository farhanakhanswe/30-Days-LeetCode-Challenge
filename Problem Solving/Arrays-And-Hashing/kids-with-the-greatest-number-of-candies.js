/* Question Link : https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/ */

/* Optimized Solution:
Time Complexity : 0(n)
Space Complexity: 0(n)
*/

var kidsWithCandies = function(candies, extraCandies)
{
    
    let childCandiesMap = new Map();
    let result = [];
    
    for( let i = 0 ; i < candies.length ; i++ )
    {
        childCandiesMap.set(i, candies[i],);
    }    

    for( let n = 0 ; n < candies.length ; n++)
    {
        numOfCandiesOfNthKid = childCandiesMap.get(n);
        
        numOfCandiesOfNthKid += extraCandies;
        
        if( numOfCandiesOfNthKid >= Math.max(...childCandiesMap.values()))
        {
            result.push(true);
        }else
        {
            result.push(false)
        }
    }
    
    return result;
}
