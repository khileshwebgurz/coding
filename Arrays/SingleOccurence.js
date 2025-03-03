// Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct elements appear at the beginning in sorted order.
//  Additionally, return the length of this distinct sorted subarray.
// Input: arr[] = [1, 2, 2, 3, 4, 4, 4, 5, 5] and Output: [1, 2, 3, 4, 5]

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

const newSize = optimiseOccur(arr);

console.log(arr.slice(0, newSize).join(" "));

// using HashSet to store only the unique element. This approach will also be helpfull when array is not sorted
// and Tc will O(n) and Sc will be O(n)
function occuresingle(arr) {
  const set = new Set();
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
      arr[index++] = arr[i];
    }
  }
  return index;
}

// since array is already sorted then we don't need to store it in hash we can just compare current and previous item.
// Since Tc is O(n) and Sc is O(1)
function optimiseOccur(arr) {
  const n = arr.length;
  if (n <= 1) return n;

  // Start from the second element
  let idx = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[idx++] = arr[i];
    }
  }

  return idx;
}
