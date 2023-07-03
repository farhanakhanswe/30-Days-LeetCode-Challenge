/* Question link: https://leetcode.com/problems/contains-duplicate/ */

/* Brute Force Solution Time Complexity -> O(n^2) and Space Complexity -> O(1) */

var isAnagram = function (s, t) {
    s = s.toLowerCase();
    t = t.toLowerCase();

    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map();
    const tMap = new Map();

    // HashMap for s string
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        } else {
            sMap.set(s[i], 1);
        }
    }

    // HashMap for t string
    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1);
        } else {
            tMap.set(t[i], 1);
        }
    }

    for (let [key, value] of sMap) {
        if (tMap.get(key) !== value) {
            return false;
        }
    }

    return true;
};