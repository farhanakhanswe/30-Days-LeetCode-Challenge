/* Question Link: https://leetcode.com/problems/roman-to-integer/ */

// Not correct

var romanToInt = function(s) {
    const map = {
        I : 1,
        V : 5,
        X : 10,
        L : 5,
        C : 100,
        D : 500,
        M : 1000
    }
    
    let res = 0;

    for (let i = 0; i < s.length; i++) {

    const currEl = map[s[i]];
    const nextEl = map[s[i + 1]];

    if (nextEl > currEl) {
      res += nextEl - currEl;
      i++; 
    } else {
      res += currEl;
    }
  }

  return res;

};
