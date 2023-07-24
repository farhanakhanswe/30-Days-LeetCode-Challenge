/* Question Link: https://leetcode.com/problems/find-the-highest-altitude/ */

var largestAltitude = function(gain) {
    
    let highestAlt = 0;
    let currentAlt = 0;

    for( let i = 0 ; i < gain.length ; i++)
    {
        currentAlt += gain[i];

        if( currentAlt > highestAlt)
        {
            highestAlt = currentAlt;
        }
    }

    return highestAlt;
};
