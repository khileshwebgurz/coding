// Given a non-negative number represented as an array of digits, add 1 to the number ( increment the number represented by the digits ).
// The digits are stored such that the most significant digit is the first element of the array.
// Example => [1,2,3] will become [1,2,4] and [9,9,9] will become [1,0,0,0]
const arr = [9, 9, 9];
console.log(AddToarr(arr).join(" "));

// iterating from last index if equals 9 then go inside while loop and make it 0 until index 1 and make it +1. if arr[i] seems 9
// if not then return arr with incrementing 1 on last index element.
// Tc will O(n) and Sc is O(1) and this is the best approach only.
function AddToarr(arr) {
  let i = arr.length - 1;

    // Loop through the array from the end to the start
  while (arr[i] === 9) {
    arr[i] = 0;
    i--;
  }

  // if there's a non 9 digit , increment it
  if (i >= 0) {
    arr[i] = arr[i] + 1;
  } else {
    // if all are 9 then add a leading 1 at the beginning
    arr.unshift(1);
  }

  return arr;
}
