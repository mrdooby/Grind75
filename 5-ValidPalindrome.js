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
  const lowerCase = s.toLowerCase()
  const validString = lowerCase.split(' ');
  const result = true;

  for (let i = 0; i < validString.length; i++) {
    if (validString[i] === )
  }

  return true;
}

/*
Attempt 1: 8/29/2022
08:01 min

Could not solve

Key Takeways:
There are too many characters that are non-alphanumeric to consider
Need to study more on how to remove characters that do not fit constraints
*/