// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let sum = nums[0]
  let i = 0;

  while (i < nums.length) {
    let total = 0
    for (let j = i; j < nums.length; j++) {
      total += nums[j]
      if (total > sum) {
        sum = total;
      }
    }
    i++;
  }

  return sum;
};

/*
Attempt 1: 09/01/2022
10:19 min

Could not solve

Key Takeways:
Time Limit Exceeded
Solution works but needs to be faster, look up Divide and Conquer
*/