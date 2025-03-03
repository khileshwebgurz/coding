// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
const arr = [1, 2, 3, 1];
console.log(mappingDuplicate(arr));

// the brute force approach with Tc as O(n2) and O(1)
function containsDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) return true;
    }
  }
  return false;
}

// better using Map , it gives time complexity as O(n) and space as O(n)
function mappingDuplicate(arr) {
  let store = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (store.has(arr[i])) {
      return true;
    }
    store.add(arr[i]);
  }
  return false;
}
