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
  let stack = [];
  let index = 0;
  let parentheses = ['()', '{}', '[]']

  while (index < s.length) {
    stack.push(s[index])
    index++;

    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];
    let paren = open + close
    if (parentheses.includes(paren)) {
      stack.pop();
      stack.pop()
    };
  };

  return stack.length === 0;
};

/*
Attempt 2: 8/31/2022
04:27 min

Runtime: 135 ms, faster than 10.98% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 42.1 MB, less than 83.47% of JavaScript online submissions for Valid Parentheses.

Key Takeways:
Remember data structures and decide which one to use (in this case stack)
.includes() is useful
This was ~4 hours after I watched a video.
*/

/*
Attempt 1: 8/29/2022
15:45 min

Could not solve

Key Takeways:
Was confused about what is considered a valid solution -- by the examples it looked to be consecutive parentheses
*/