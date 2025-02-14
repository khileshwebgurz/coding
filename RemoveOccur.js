// Given an integer array arr[] and an integer ele the task is to the remove all occurrences of ele from arr[] in-place and return the number of
//  elements which are not equal to ele. If there are k number of elements which are not equal to ele then the input array arr[] should be modified
// such that the first k elements should contain the elements which are not equal to ele and then the remaining elements.
// Input: arr[] = [0, 1, 3, 0, 2, 2, 4, 2], ele = 2 Output: 5
// Explanation: The answer is 5 because there are 5 elements which are not equal to 2 and arr[] will be modified such that the first 5 elements contain
//  the elements which are not equal to 2 and remaining elements can contain any element. So, modified arr[] = [0, 1, 3, 0, 4, _, _, _]
const arr = [0, 1, 3, 0, 2, 2, 4, 2];
const ele = 2;
console.log(removeOccur(arr, ele));

function removeOccur(arr, ele) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // Place the element which is not
    // equal to ele at the kth position
    if (arr[i] !== ele) {
      arr[count] = arr[i];
      // Increment the count of
      // elements not equal to ele
      count++;
    }
  }
  return count;
}
