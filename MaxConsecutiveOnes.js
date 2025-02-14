// Given a binary array arr[] and an integer k, find the maximum length of a subarray containing all ones after flipping at most k zeroes to 1’s.
// Input: arr[] = {1, 0, 0, 1, 0, 1, 0, 1}, k = 2
// Output: 5
// Explanation: By flipping the zeroes at indices 4 and 6, we get the longest subarray from index 3 to 7 containing all 1’s.

const arr = [1, 0, 1];
const k = 2;
console.log(optimisedApproach(arr, k));

// this is the brute force approach .A simple approach is to generate all possible subarrays using two nested loops. Then, for each subarray,
//  count the number of zeroes. If the count is less than or equal to k, we can convert all the elements of the subarray to one by flipping all
// the zeroes. Finally, the length of longest subarray among all such subarrays will be our answer.
// for this Tc will be O(n2) and Sc will be O(1)
function maxconsOnes(arr, k) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] == 0) {
        count++;
      }
      if (count <= k) {
        res = Math.max(res, j - i + 1);
      }
    }
  }
  return res;
}

// optimised approach in O(n) Tc and O(1) Sc.

// Two Pointers (left and right) to Maintain a Window:
// right pointer moves forward through the array.
// left pointer moves forward only when the number of zeros in the window exceeds k.

// Expanding the Window:
// We keep adding elements to the window (right++).
// If we encounter a 0, we increase zeroCount.

// Shrinking the Window (if zeroCount > k):
// If the number of zeros exceeds k, we start shrinking the window from the left (left++).
// If arr[left] === 0, decrease zeroCount as we move left forward.

// Updating the Maximum Length:
// At each step, we update maxLength = Math.max(maxLength, right - left + 1), which stores the largest valid subarray length where we flipped at most 
// k zeros.
function optimisedApproach(arr, k) {
  let left = 0;
  let maxlength = 0;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] == 0) count++;
    while (count > k) {
      if (arr[left] == 0) {
        count--;
        left++;
      }
    }
    maxlength = Math.max(maxlength, right - left + 1);
  }
  return maxlength;
}

