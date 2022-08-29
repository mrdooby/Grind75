// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const isValid = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' && s[s.length - i] !== ')') {
      return false;
    }
    if (s[i] === '[' && s[s.length - i] !== ']') {
      return false;
    }
    if (s[i] === '{' && s[s.length - i] !== '}') {
      return false;
    }
  }

  return true;
}

/*
Attempt 1: 8/29/2022
15:45 min

Could not solve

Key Takeways:
Was confused about what is considered a valid solution -- by the examples it looked to be consecutive parentheses
*/