// Input: N = 5, array[] = {1,2,3,4,5} && Output: 2,3,4,5,1
const arr = [1, 2, 3, 4, 5];
let k = 4;
console.log(leftRotate(arr, k));

function leftRotate(arr, k) {
  while (k > 0) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    k--;
  }
  return arr;
}
