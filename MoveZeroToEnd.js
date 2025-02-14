// Given an array move all the zeroes from the array to the end of the array

let arr = [1, 0, 0, 3, 4, 0, 7, 9, 0];
let newarr = moveZeroes(arr);
// to print in a single row with some space
console.log(newarr.join(" "));

// approach 1 will be sort in desc order to get all 0s to end.

// Optimised approach , Tc is O(n) and Sc is O(1)
function moveZeroes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        // for swapping the numbers
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }

  return arr;
}
