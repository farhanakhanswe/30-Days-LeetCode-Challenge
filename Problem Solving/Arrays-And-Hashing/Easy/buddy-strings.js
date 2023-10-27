/* Question Link : https://leetcode.com/problems/buddy-strings/ */

/* NOT ACCEPTED. NEEDS IMPROVEMENT */

var buddyStrings = function (s, goal) {

    s = s.toLowerCase();
    goal = goal.toLowerCase();

    if (s.length !== goal.length) {
        return false;
    }

    s = s.split("");

    let firstIndex = 0;
    let endIndex = s.length - 1;
    let newStr = "";

    while (firstIndex < endIndex) {
        let temp = s[firstIndex];
        s[firstIndex] = s[endIndex];
        s[endIndex] = temp;
        newStr = s.join('');

        if (newStr === goal) {
            return true;
        }

        firstIndex++;
        endIndex--;
    }

    return false;
}
