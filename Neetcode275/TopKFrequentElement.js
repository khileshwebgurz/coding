// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// Input: nums = [1,2,2,3,3,3], k = 2 && Output: [2,3]

const nums = [1,2,2,3,3,3];
const k = 2;
console.log(kfrequentElement(nums, k));

// this is the brute force approach gives Tc as O(n2) and Sc as O(n)
function kfrequentElement(nums, k) {
  let newArr = new Set();
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
      if (count >= k) {
        newArr.add(nums[i]);
      }
    }
  }
//   converting set to array
  return [...newArr];
}

// now the better approach be using single loop and some extra space with Tc as O(n) and Sc as O(n)
function betterApproach(nums, k) {
    let freqMap = new Map();

    // Count occurrences
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Filter out keys with count < k and return only values
    return [...freqMap.keys()].filter(value => value >= k);
}

