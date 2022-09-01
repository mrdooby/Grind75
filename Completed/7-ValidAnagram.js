// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  let sortedS = s.split('').sort().join('');
  let sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
};

/*
Attempt 1: 09/01/2022
01:08 min

Runtime: 173 ms, faster than 13.86% of JavaScript online submissions for Valid Anagram.
Memory Usage: 48.2 MB, less than 23.57% of JavaScript online submissions for Valid Anagram.

Key Takeways:
This was pretty easy, just check sorted string
*/