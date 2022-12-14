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
  let i = 0;
  let j = 0;
  let profit = 0;

  for (i; i < prices.length; i++) {
    if (prices[j] - prices[j] > profit) {
      profit = prices[j] - prices[j];
    }
  }
}

/*
Attempt 2: 08/31/2022
15:17 min

Could not solve

Key Takeways:
Still a time complexity problem.
Attempted while loops this time around
Need a way to filter array before finding difference (?)
*/

/*
Attempt 1: 8/29/2022
13:21 min

Could not solve

Key Takeways:
Time complexity was too long to be approved by LeetCode
Need to think of more time-conscious solution
*/