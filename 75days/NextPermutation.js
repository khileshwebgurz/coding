// Given an array arr[] of size n, the task is to print the lexicographically next greater permutation of the given array. If there does not exist any
// greater permutation, then find the lexicographically smallest permutation of the given array.
// Example: [2,4,1,7,5,0] output will be [2,4,5,0,1,7]

// Logic -> Traversing from last index and try to find at particualr index , all the elements are smaller then it if not then this will be the point arr[i] .
// where we need to stop and again traverse from last element and check any element greater than element at point and swap them. After swapping
// the arr[i] take arr[i+1] till n-1 and reverse them and that will be the answer.


// .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)) this sorting technique is useful for sorting the string, and something that cannot be subtracted like number, 

// If a < b, return -1 → means a comes before b
// If a > b, return 1 → means a comes after b
// If equal, return 0 → keep their order

// .sort((a,b)=> a-b) is useful for numbers.

// Time complexity was O(2n) and space complexity was O(1)
const arr = [2, 4, 1, 7, 5, 0];
console.log(nextPermut(arr).join(" "));


// this has Tc of O(n) and Sc will be O(1)
function nextPermut(arr) {
  let n = arr.length; // size of the array.

  let ind = -1;

//   using this loop we find the break point i.e 1 for the given array in this case. as 1 is smaller than 7.
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      ind = i;
      break;
    }
  }

//   this means we didn't find any break point or the array is in descending order, so there will be no next permutate. So we restart it as a circle.
  if (ind == -1) {
    arr.reverse();
    return arr;
  }

  for (let i = n - 1; i > ind; i--) {
    if (arr[i] > arr[ind]) {
      // swapping 
      [arr[i], arr[ind]] = [arr[ind], arr[i]];
      break;
    }
  }

//   to understand this start from end i.e slice part, here ind = 2 and n = 6. So we slice element from 2nd index till end and reverse those, as this part is 
// the number to be added in the array
// example -> [2,4,5,7,1,0] will be [0,1,7]
// now n-ind-1 will remove these number of items starting from ind +1 i.e from 3rd index remove 3 ,(6-2-1) items 
// so updated array will become -> [2,4,5,0,1,7]
  arr.splice(ind + 1, n - ind - 1, ...arr.slice(ind + 1).reverse());

  return arr;
}