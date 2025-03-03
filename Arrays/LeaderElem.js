// Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal
//  to all the elements to its right side.
// Note: The rightmost element is always a leader.

const arr = [12, 17, 2, 4, 5, 3];
const newarr =[]
console.log(betterleader(arr,newarr).join(' '));


// Tc is O(n2) and Sc is O(1)
function leaderElement(arr,newarr) {
    let j;
  for (let i = 0; i < arr.length; i++) {
    for ( j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        break;
      }
    }
    if(j == arr.length){
        newarr.push(arr[i])
    }
  }
  return newarr;
}

// Optimised approach -> The idea is to scan all the elements from right to left in an array and keep track of the maximum till now. When the maximum 
// changes its value, add it to the result. Finally reverse the result 
// here it's Tc will be O(n) and Sc will be O(1)
function betterleader(arr){
    const result = [];
    const n = arr.length;

    // Start with the rightmost element
    let maxRight = arr[n - 1];

    // Rightmost element is always a leader
    result.push(maxRight);

    // Traverse the array from right to left
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            result.push(maxRight);
        }
    }

    // Reverse the result array to maintain
    // original order
    result.reverse();

    return result;

}