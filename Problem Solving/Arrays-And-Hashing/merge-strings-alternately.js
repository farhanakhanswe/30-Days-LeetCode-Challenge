/* Question Link:  https://leetcode.com/problems/merge-strings-alternately/ */

var mergeAlternately = function(word1, word2){
    
    let indexOfSmallestStr = 0;
    let largestStr = word1;
    let smallestStr = word2 ;
    let mergedString = "";
    
    if(word2.length > word1.length)
    {
        largestStr = word2;
        smallestStr = word1;
    }
    
    while( indexOfSmallestStr < smallestStr.length)
    {
        mergedString += word1[indexOfSmallestStr ];
        mergedString += word2[indexOfSmallestStr ];
        indexOfSmallestStr++;
    }
    
        
    for(let i = indexOfSmallestStr; i < largestStr.length ; i++)
    {
        mergedString += largestStr[i];
    }
    
    return mergedString;
    
}
