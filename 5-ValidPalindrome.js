/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

const isPalindrome = (s) => {
  const lower = s.toLowerCase();
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let i = 0;
  let j = 0;
  let valid = '';

  while (i < lower.length) {
    if (alphabet.includes(lower[i])) {
      valid += lower[i]
    }
  }

  while (j <= Math.floor(valid.length/2)) {
    if (valid[j] !== valid[valid.length - j - 1]) {
      return false
    }
    j++
  }
  return true;
}

[0, 1, 2, 3, 4, 5]

/*
Attempt 2: 8/31/2022
19:42 min

Could not solve

Key Takeways:
On the right track with alphabet.includes()
'terminate called after throwing an instance of 'std::bad_alloc'
  what():  std::bad_alloc'
*/

/*
Attempt 1: 8/29/2022
08:01 min

Could not solve

Key Takeways:
There are too many characters that are non-alphanumeric to consider
Need to study more on how to remove characters that do not fit constraints
*/