// Given an integer array arr[], the task is to divide the array into three non-empty contiguous segments with equal sum.
// In other words, we need to return an index pair [i, j], such that sum(arr[0…i]) = sum(arr[i+1…j]) = sum(arr[j+1…n-1]).
// Note: If it is impossible to divide the array into three non-empty contiguous segments, return [-1, -1].

const arr = [1,3,4,0,4];
console.log(optimisedApproach(arr));

// this function is for finding the sum from particualar subarray.
function findSum(arr, start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }
  return sum;
}

// it is said that we need to divide array in 3 parts, so we needed sum1,sum2,sum3. For this the time complexity will be O(n3) and Sc will be O(1)
function bruteForce(arr) {
  if (arr.length < 3) return [-1, -1];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      let sum1 = findSum(arr, 0, i);
      let sum2 = findSum(arr, j, i + 1);
      let sum3 = findSum(arr, j + 1, arr.length - 1);

      if (sum1 == sum2 && sum2 == sum3) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

// now it's time for optimised approach ,To solve the problem of dividing the array into three contiguous subarrays with equal sums, we first calculate
//  the total sum of the array. If this total sum is not divisible by 3, it's impossible to split it into three equal parts, so we return false right
// away.
// Next, we calculate the target sum for each subarray, which is simply the total sum divided by 3. Then, we traverse the array and maintain a running sum.
//  While iterating, we check when this running sum equals the target sum, marking the first partition. Once we find the first partition, we reset the
//  running sum and continue to find the second partition. If we find both partitions, the remaining elements of the array automatically form the third
//  subarray.
// This approach only requires one pass through the array, making it efficient with a time complexity of O(N). If at any point we can't find the required
// partitions, we return false.

function optimisedApproach(arr) {
  // find the total sum of the array
  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  // If totalSum is not divisible by 3, it's not possible to split
  if (totalSum % 3 !== 0) return false;

  const targetSum = totalSum / 3;
  let currentSum = 0,
    count = 0,
    partitions = []; //this will be my final answer like for this case we have [1,2]

    // we calculate current sum and verify is it equal to targetSum , if yes then push it to partitions array and count increment as count signify the 3 equal
    // parts
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    // When a partition of target sum is found
    if (currentSum === targetSum) {
      partitions.push(i);
      currentSum = 0;
      count++;

      // If we already found 2 partitions, remaining elements form the last part
      if (count === 2 && i < arr.length - 1) {
        //this returns this array index whose sum is equal and are 3 parts. arr[0…1], arr[2…2] and arr[3…4] 
        // return [
        //   arr.slice(0, partitions[0] + 1),
        //   arr.slice(partitions[0] + 1, partitions[1] + 1),
        //   arr.slice(partitions[1] + 1),
        // ];
        // this returns partitons array like [1,2]
        return partitions;
      }
    }
  }

  return false; // If unable to split
}
