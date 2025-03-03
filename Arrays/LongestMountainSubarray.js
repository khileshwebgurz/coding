// Given an array arr[] with N elements, the task is to find out the longest sub-array which has the shape of a mountain.
// A mountain sub-array consists of elements that are initially in ascending order until a peak element is reached and beyond
//  the peak element all other elements of the sub-array are in decreasing order.

// Input: arr = [1, 3, 1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5]  && Output: 11
// Explanation:
// There are two sub-arrays that can be considered as mountain sub-arrays. The first one is from index 0 – 2 (3 elements) and next one is from
//  index 2 – 12 (11 elements).  As 11 > 2, our answer is 11.

const arr = [2,2,2];
console.log(longestMountainsubArray(arr));

function longestMountainsubArray(arr) {
  let max = 0;
  for (let i = 1; i < arr.length-1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let left = i - 1;
      let right = i + 1;
      while (left > 0 && arr[left] > arr[left - 1]) {
        left--;
      }
      while (right < arr.length - 1 && arr[right] > arr[right + 1]) {
        right++;
      }
      let length = right - left + 1;
      max = Math.max(length, max);
    }
  }
  return max;
}
