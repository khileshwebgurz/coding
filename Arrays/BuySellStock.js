// Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by
//  buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell.
// Example1 : Input: prices[] = {7, 10, 1, 3, 6, 9, 2} and  Output: 8 and Explanation: Buy for price 1 and sell for price 9.
// Example2 : prices[] = {7, 6, 5,4} and  Output: 0. all the in desc order as stock must be buyed before selling

const arr = [7, 10, 1, 3, 6, 9, 2];
console.log(stockoptimise(arr));

// basic approach which has O(n2) time complexity and O(1) space complexity.
function stockbuy(arr) {
  let maxprofit = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        maxprofit = Math.max(maxprofit, arr[j] - arr[i]);
      }
    }
  }
  return maxprofit;
}

// Expected Approach -> In order to maximize the profit, we need to minimize the cost price and maximize the selling price. So at every step, we keep track 
// of the minimum buy price of stock encountered so far. For every price, we subtract with the minimum so far and if we get more profit than the current 
// result, we update the result.

function stockoptimise(prices){
    let minSoFar = prices[0];
    let res = 0;

    // Update the minimum value seen so far 
    // if we see smaller
    for (let i = 1; i < prices.length; i++) {
        minSoFar = Math.min(minSoFar, prices[i]);

        // Update result if we get more profit                
        res = Math.max(res, prices[i] - minSoFar);
    }
    return res;
}