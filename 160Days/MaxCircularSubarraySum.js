// Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum
// that we can get if we assume the array to be circular.

// Input: arr[] = [8,-8,9,-9,10,-11,12], output: 22
// Explanation: Starting from the last element of the array i.e 12 and moving in  a circular
// fashion, we have max subarray as 12, 8, -8, 9, -9, 10 which gives maximum sum as 22.

// Input: arr[] = [10,-3,-4,7,6,5,-4,-1], output: 23
// Explanation: Maximum sum of the circular subarray is 23. The subarray is [7,6,5,-4,-1,10]

// Input = [-1,40,-14,7,6,5,-4,-1], output: 52
// Explanation: [7,6,5,-4,-1,-1,40]

const arr = [10, -3, -4, 7, 6, 5, -4, -1];
console.log(maxCircularSum1(arr));

// Brute force approach , we need to iterate of array and consider creating a circular for each indexed element.
// for this the time complexity will be O(n2) and space is O(1)

// function maxCircularSum(arr) {
//   let n = arr.length;

//   let maxSum = -Infinity;
//   for (let i = 0; i < n; i++) {
//     let currMax = 0;
//     for (let j = 1; j <= n; j++) {
//       let index = (i + j - 1) % n;
//       currMax += arr[index];
//       maxSum = Math.max(maxSum, currMax);
//     }
//   }
//   return maxSum;
// }

// optimised way, the logic is we find the maxsubarray sum , then we find the totalSUm
function maxCircularSum1(arr) {
  const n = arr.length;
  let currMaxSum = 0,
    currMinSum = 0;
  let maxSum = arr[0],
    minSum = arr[0];
    let totalSum =0;

  for (let i = 0; i < n; i++) {
    // kadane's to find the maximum subarray sum
    currMaxSum = Math.max(currMaxSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currMaxSum);
    

    // kadane's to find the minimum sum subarray
    currMinSum = Math.min(currMinSum + arr[i], arr[i]);
    minSum = Math.min(minSum, currMinSum);
    

    // sum of all elements of input array
    totalSum += arr[i];
    
  }

  let normalSum = maxSum;
  let circularSum = totalSum - minSum;
  

  if (minSum === totalSum) {
    return normalSum;
  }
  return Math.max(normalSum, circularSum);
}


// This approach is similar to the previous one, but the key difference is that we're using Kadane's algorithm to find the circular
// subarray sum as well. The maximum sum of a circular subarray can be defined as the total sum of the array minus the sum of a 
// subarray in the middle. So, to maximize the circular subarray sum, we need to minimize the subarray sum. 