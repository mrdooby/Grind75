// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

const maxProfit = (prices) => {
  let max = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      let dif = prices[i] - prices[j]
      if (dif > max) {
        max = dif
      }
    }
  }

  return max;
}

/*
Attempt 1: 8/29/2022
13:21 min

Could not solve

Key Takeways:
Time complexity was too long to be approved by LeetCode
Need to think of more time-conscious solution
*/