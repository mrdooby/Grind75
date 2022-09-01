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

var isPalindrome = function(s) {
  const lower = s.toLowerCase()
  const alphanumeric = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let validString = '';

  for (let i = 0; i < lower.length; i++) {
    if (alphanumeric.includes(lower[i])) {
      validString += lower[i]
    }
  }

  if (validString === validString.split('').reverse().join('')) {
    return true;
  } else {
     return false;
  }
};

/*
Attempt 3: 8/31/2022
-- min

Runtime: 164 ms, faster than 9.02% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 48.7 MB, less than 20.68% of JavaScript online submissions for Valid Palindrome.

Key Takeways:
On the right track with alphabet.includes()
Read instructions carefully (included numbers as a string) --> add to alphanumeric reference
Did not need to do a data structure, could've just reversed array and joined as string
*/

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