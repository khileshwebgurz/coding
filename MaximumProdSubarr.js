// Given an integer array, the task is to find the maximum product of any subarray.
// Input: arr[] = {-2, 6, -3, -10, 0, 2}
// Output: 180
// Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180

let arr = [-2, 3, -1, 4, 0, 7, 6];
console.log(maxProductSubarrayOptimized(arr));

// for this brute force approach the Tc will be O(n2) and Sc will be O(1).
// We use two nested loops to generate all possible subarrays and compute their product:
// Outer loop (i): Iterates through each element, marking the starting point of the subarray.
// Inner loop (j): Expands the subarray by including more elements.
// Maintain a variable (prod) to store the current product.
// If prod is greater than our previously stored maximum (result), update result.
// here we are returning both the subarray and the max sum of the subarray.
function prodSubarray(arr) {
  let result = arr[0];
  let start = arr[0];
  let end = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let prod = 1;
    for (let j = i; j < arr.length; j++) {
      prod *= arr[j];
      if (result < prod) {
        result = prod;
        start = i;
        end = j;
      }
    }
  }
  return {
    result: result,
    range: arr.slice(start, end + 1),
  };
}

// now the optimised way is using kadane's algorithm. Instead of tracking just the maximum product , we also track the minimum product at each step, because:
// Negative × Negative = Positive, which might give a larger max product later.
// Using this approach the Tc will be O(n) and Sc will be O(1)
// we used maxProd and minProd bcz when 2 negative numbers are multiplied they can even form bigger product.
function maxProductSubarray(arr) {
  if (arr.length === 0) return 0; // Edge case: empty array

  let maxProd = arr[0],
    minProd = arr[0],
    result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) [maxProd, minProd] = [minProd, maxProd]; // Swap when negative

    maxProd = Math.max(arr[i], maxProd * arr[i]); // Max product ending at i
    minProd = Math.min(arr[i], minProd * arr[i]); // Min product ending at i

    result = Math.max(result, maxProd); // Update the global max product
  }

  return result;
}

// this function will return both the subarray and the max product of the subarray , it is the optimised code with Tc as O(n) and Sc as O(1)
// We maintain both maxProd and minProd since negatives can flip signs. When encountering a negative number, we swap them. We check if arr[i] itself 
// is better than continuing multiplication. Finally, we track the subarray indices while updating maxProd. This gives us the optimal subarray in O(n) time.
function maxProductSubarrayOptimized(arr) {
  if (arr.length === 0) return { maxProduct: 0, subarray: [] };

  let maxProd = arr[0],
    minProd = arr[0],
    result = arr[0];
  let start = 0,
    end = 0,
    s = 0; // 's' is a temporary start index

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      [maxProd, minProd] = [minProd, maxProd]; // Swap when negative
    }

    if (arr[i] > maxProd * arr[i]) {
      maxProd = arr[i];
      s = i; // Update potential start of subarray
    } else {
      maxProd *= arr[i];
    }

    minProd = Math.min(arr[i], minProd * arr[i]);

    if (maxProd > result) {
      result = maxProd;
      start = s;
      end = i;
    }
  }

  return { maxProduct: result, subarray: arr.slice(start, end + 1) };
}
