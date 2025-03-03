// Given an array and a number k , reverse the array in group of value of k.
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], K = 3
// Output: 3, 2, 1, 6, 5, 4, 9, 8, 7

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;
let newarr = reverseGroup(arr);
console.log(newarr.join(" "));


// Tc is O(n) and Sc is O(1)
function reverseGroup(arr) {
  for (let i = 0; i < arr.length; i = i + k) {
    let start = i;
    let end = Math.min(i + k - 1, arr.length - 1); // Ensure we don't exceed array length
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return arr;
}
