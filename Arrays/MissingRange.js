// Input: arr[] = [14, 15, 20, 30, 31, 45], lower = 10, upper = 50
// Output: [[10, 13], [16, 19], [21, 29], [32, 44], [46, 50]]
// Explanation: These ranges represent all missing numbers between 10 and 50 not present in the array
// Note: Array is in Sorted order.

// Logic : Since the array is sorted ,we can efficiently identify gaps between consecutive elements. By iterating through arr[], we check the difference
//  between adjacent numbers : If the difference is greater than one, the numbers in between form a missing range.
// Additionally, we handle edge cases where the missing range starts before the first element or ends after the last element of arr[].

// for this Tc will be O(n) and Sc will be O(1)
const arr = [14, 15, 20, 30, 31, 45];
const lower = 10;
const upper = 50;
console.log(missingRange(arr, lower, upper));

function missingRange(arr, lower, upper) {
  const n = arr.length;
  const res = [];

  // Check for missing range before the first element , this will only execute one time
  if (lower < arr[0]) {
    res.push([lower, arr[0] - 1]);
  }

  // Check for missing ranges between consecutive elements
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      res.push([arr[i] + 1, arr[i + 1] - 1]);
    }
  }

  // Check for missing range after the last element
  if (upper > arr[n - 1]) {
    res.push([arr[n - 1] + 1, upper]);
  }

  return res;
}
