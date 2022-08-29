// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

const TwoSum = (nums, target) => {
  const result = []
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  };

  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i]
    if (obj[dif] && obj[dif] !== i) {
      result.push(obj[dif], i)
      break;
    }
  }

  return result;
};

/*
11:39 min

Runtime: 104 ms, faster than 69.12% of JavaScript online submissions for Two Sum.
Memory Usage: 45.3 MB, less than 6.96% of JavaScript online submissions for Two Sum.

Key Takeways:
Pay more attention to edge cases, in this case it was duplicates and having only one pair as the solution.
Could have been faster, spend more time reading.
Keep track of which number is to push to result (object key or object value)
*/