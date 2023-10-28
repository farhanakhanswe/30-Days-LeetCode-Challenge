/* Question Link: https://leetcode.com/problems/ransom-note/ */

/* Optimized Solution : 
   Time Complexity -> O(n) and
   Space Complexity -> O(n)
*/

const canConstruct = (ransomNote, magazine) => {
    let ransomNoteMap = new Map();
    let magazineMap = new Map();

    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i].toLowerCase();

        if (ransomNoteMap.has(char)) {
            let currCount = ransomNoteMap.get(char);
            ransomNoteMap.set(char, currCount + 1);
        } else {
            ransomNoteMap.set(char, 1);
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        let char = magazine[i].toLowerCase();

        if (magazineMap.has(char)) {
            let currCount = magazineMap.get(char);
            magazineMap.set(char, currCount + 1);
        } else {
            magazineMap.set(char, 1);
        }
    }

    for (let [char, count] of ransomNoteMap) {
        if (!magazineMap.has(char) || magazineMap.get(char) < count) {
            return false;
        }
    }

    return true;
}
