// We are given an array Arr[] of length n. It represents the price of a stock on ‘n’ days. The following guidelines need to be followed:

// We can buy and sell the stock any number of times.
// In order to sell the stock, we need to first buy it on the same or any previous day.
// We can’t buy a stock again after buying it once. In other words, we first buy a stock and then sell it. After selling we can buy and sell again.
//  But we can’t sell before buying and can’t buy before selling any previously bought stock.
const arr = [100, 180, 260, 310, 40, 535, 695];
console.log(buySellItemBruteForceMultiple(arr));

// the logic behind the solution is the greedy approach of solving it.Instead of trying to predict the best single buy-sell pair, we treat each increasing
//  step as an opportunity to make a profit. This ensures we capture all upward trends in the price movement.
// How to Think About It
// Break Down the Problem Statement:

// You can buy and sell multiple times to maximize profit.
// Instead of buying at the absolute lowest and selling at the absolute highest (which would require foresight), you take profit whenever there's an increase in price.
// Recognizing the Pattern in Data:

// If price[i] > price[i-1], this means the stock price increased → profit opportunity.
// If price[i] < price[i-1], ignore it (since selling at a lower price results in a loss).

// for this Tc will be O(n) and Sc will be O(1)
function buySellItem(arr) {
  let profit = 0;
  let n = arr.length;
  //   traversing only once to get the max profit , if doing for all posibility(means 2 loop) it will provvide highest profit which is incorrect.

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      profit = Math.max(profit, arr[i] - arr[i - 1] + profit);
    }
  }
  return profit;
}


// Why This Works?
// Instead of waiting for the absolute lowest and highest points, we capture all small profits.
// This greedy strategy ensures that we take advantage of every opportunity where the price goes up.
// Since we only iterate once through the array, the approach is O(n) in time complexity.
// How to Develop This Thinking in General
// Whenever you encounter a problem related to maximization or optimization, think about:

// Can I break this problem into smaller problems?

// Here, every price increase is a small profit, which contributes to the final answer.
// Can I make local decisions that lead to a global solution?






// Now the brute force approach for finding all the buy sell possibility that can cause us exponential  time complexity.As we might be using recusrive approach
// to get multiple buy sell stock profit.
// The brute force method explores all possible buy-sell pairs and finds the maximum possible profit by checking every combination.

// Logic Behind the Brute Force Approach
// Try every possible pair of days (i, j) where i < j.
// Compute the profit as profit = arr[j] - arr[i] (i.e., sell on j, buy on i).
// Keep track of the maximum profit found.

// Tc will be O(2^n) and Sc will be O(1)
function buySellItemBruteForceMultiple(arr) {
  let n = arr.length;
  let maxProfit = 0;

  // Check every possible buy and sell day combination
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        maxProfit = Math.max(maxProfit, arr[j] - arr[i] + buySellItemBruteForceMultiple(arr.slice(j + 1))); 
      }
    }
  }

  return maxProfit;
}
