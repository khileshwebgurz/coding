// Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array.
//  Find these two numbers.
// Example: Input: arr[] = {3, 1, 3} Output: Missing = 2, Repeating = 3 .Explanation: In the array, 2 is missing and 3 occurs twice

// Logic using visited array -> Create a temp array visited[] of size n+1 with all initial values as false. Note that array values go upto n, that is why we have
// taken size as n+1. Traverse the input array arr[], and do the following for each arr[i]
// if(visited[arr[i]] == false), set visited[arr[i]) = true;
// if(visited[arr[i]] == true) output “arr[i]” //repeating number
// Traverse visited[] and output ‘i’ corresponding to the element of array visited[] having value as false. (This is the missing number)

const arr = [4, 3, 6, 2, 1, 1];
optimised(arr);

//for this the Tc is O(2n) and Sc is O(n)
function repAndMiss(arr) {
  // created visited array of size n+1 filled with false
  const visited = new Array(arr.length).fill(false);
  let repeating = -1;
  let missing = -1;
  for (let i = 0; i < arr.length; i++) {
    if (visited[arr[i]]) {
      repeating = arr[i];
    } else {
      visited[arr[i]] = true;
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (!visited[i]) {
      missing = i;
      break;
    }
  }
  return repeating + " " + missing;
}

// In place and sum formula Logic -> Calculate the sum of the first size natural numbers. Traverse the array. While traversing, use the absolute value of every
//  element as an index and make the value at this index negative to mark it visited and subtract this value from the missing variable. If something is already
//  marked negative, then this is the repeating element. After traversing, the ‘missing’ variable holds the value of the missing element.
function optimised(arr) {
  let n = arr.length;
  let missing = n * (n + 1) / 2;
  for (let i = 0; i < n; i++) {
    let absValue = Math.abs(arr[i]);
    if (arr[absValue - 1] > 0) {
      arr[absValue - 1] = -arr[absValue - 1];
      missing -= absValue; 
    } else {
      console.log('repeating number is >>>>>>',absValue);
    }
  }
  console.log('missing number is >>>>>',missing)
}
