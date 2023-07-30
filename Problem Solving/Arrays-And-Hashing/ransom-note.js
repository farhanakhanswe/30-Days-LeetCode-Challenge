/* Question Link: https://leetcode.com/problems/ransom-note/ */

// NOT accepted on leetcode

var canConstruct = (ransomNote, magazine) => {
    
    let magazineSet = new Set(magazine);
    
    for( let i = 0 ; i < ransomNote.length ; i++)
    {
        currEl = ransomNote[i];
        
        if(!magazineSet.has(currEl))
        {
            return false; 
        }
        
        magazineSet.delete(currEl);
        
    }
    return true;
    
}
