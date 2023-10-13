/* Question Link: https://leetcode.com/problems/word-pattern/ */

var wordPattern = function(pattern, s) {
    
  const words = s.split(' ');

  if (pattern.length !== words.length) {
    return false;
  }

  const charToWordMap = new Map();
  const wordToCharMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (charToWordMap.has(char) && charToWordMap.get(char) !== word) {
      return false;
    }

    if (wordToCharMap.has(word) && wordToCharMap.get(word) !== char) {
      return false;
    }

    charToWordMap.set(char, word);
    wordToCharMap.set(word, char);
  }

  return true;

};
