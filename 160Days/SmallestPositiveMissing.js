// Input: arr[] = {2, -3, 4, 1, 1, 7} && Output: 3
// Explanation: 3 is the smallest positive number missing from the array.

// Input: arr[] = {5, 3, 2, 5, 1} && Output: 4
// Explanation: 4 is the smallest positive number missing from the array.

// Input: arr[] = {-8, 0, -1, -4, -3} && Output: 1
// Explanation: 1 is the smallest positive number missing from the array.

const arr = [-8, 0, -1, -4, -3];
console.log(smallPost2(arr));

// this is the brute force approach with time complexity as O(n2) and space as O(1)
function smallPost(arr) {
  let smallPositive = 1;

  // Keep checking if smallPositive is in the array
  while (true) {
    let found = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === smallPositive) {
        found = true;
        break;
      }
    }

    // If not found in the array, return it
    if (!found) {
      return smallPositive;
    }

    // Otherwise, check the next number
    smallPositive++;
  }
}

// method2, in this method i am removing duplicates and negative number as they are not needed. and then array will have only unique and positive items which
// we can sort and implement logic of arr[i] matches with i+1 or not.So the time complexity is O(nlogn) and space complexity is O(n)
function smallPost1(arr) {
  arr = [...new Set(arr.filter(n=> n>0))].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return i + 1;
  }
  return arr.length + 1;
}


// optimised approach , with O(n) time complexity and O(1) space complexity.
function smallPost2(arr){
    const n = arr.length;
    
    //placing each number in its right position
    for(let i =0;i<n;i++){
        while(arr[i] >0 && arr[i] <= n && arr[arr[i]-1] !== arr[i]){
            const correctIndex = arr[i] -1;
            [arr[i], arr[correctIndex]] = [arr[correctIndex],arr[i]]
        }
    }
    // now finding the first missing elements are all(positive ) seems to be sorted
    for(let i =0;i<n;i++){
        if(arr[i] !== i+1){
            return i+1;
        }
    }
    return n+1;
}