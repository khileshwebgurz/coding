// Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum
// that we can get if we assume the array to be circular.

// Input: arr[] = [8,-8,9,-9,10,-11,12], output: 22
// Explanation: Starting from the last element of the array i.e 12 and moving in  a circular
// fashion, we have max subarray as 12, 8, -8, 9, -9, 10 which gives maximum sum as 22.

// Input: arr[] = [10,-3,-4,7,6,5,-4,-1], output: 23
// Explanation: Maximum sum of the circular subarray is 23. The subarray is [7,6,5,-4,-1,10]

// Input = [-1,40,-14,7,6,5,-4,-1], output: 52
// Explanation: [7,6,5,-4,-1,-1,40]

const arr = [8, -8, 9, -9, 10, -11, 12];
console.log(maxCircularSum(arr));

// Brute force approach , we need to iterate of array and consider creating a circular for each indexed element.
// for this the time complexity will be O(n2) and space is O(1)

function maxCircularSum(arr) {
  let n = arr.length;

  let maxSum = -Infinity;
  for (let i = 0; i < n; i++) {
    let currMax = 0;
    for (let j = 1; j <= n; j++) {
      let index = (i + j - 1) % n; // using modulus to track around
      currMax += arr[index];
      maxSum = Math.max(maxSum, currMax);
    }
  }
  return maxSum;
}
