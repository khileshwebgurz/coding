// Given an array arr[] of n integers, construct a product array res[] (of the same size) such that res[i] is equal to the product of all the
//  elements of arr[] except arr[i].
// Example: Input: arr[] = [10, 3, 5, 6, 2] and Output: [180, 600, 360, 300, 900]

let arr = [10, 3, 0, 6, 2];
console.log(optimisedArr(arr).join(" "));

// this is the most basic approach of solving this problem using two loops. Which result in O(n2) time complexity and O(1) space complexity.
function productarr(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        prod *= arr[j];
      }
    }
    newarr.push(prod);
  }
  return newarr;
}

// By the way this is the optimal approach if we don't consider extra space 
// another better approach is using prefix and suffix product but using this approach we will have extra space. So applying this will result in O(n) time complexity
// and O(n) space complexity
function prefSuffarr(arr) {
  let prefixArr = new Array(arr.length).fill(1);
  let suffixArr = new Array(arr.length).fill(1);
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    prefixArr[i] = prefixArr[i - 1] * arr[i - 1];
  }

  for (let j = arr.length - 2; j >= 0; j--) {
    suffixArr[j] = suffixArr[j + 1] * arr[j + 1];
  }

  for (let k = 0; k < arr.length; k++) {
    result[k] = suffixArr[k] * prefixArr[k];
  }
  return result;
}

// this doesn't seems to be optimised as division operateor on long run is not so good.
// now the most optimised approach , if array has no zero than for particular index we can find product by finding product of all elements in array and then dividing
// whole product by the item present in that index. If it has exactly one zero than product for that index will be product of all elements. If it has more than 1 zero
// then the whole array will be 0
function optimisedArr(arr) {
  let wholeProduct = 1;
  let countZeroes =0;
  let idx = 0;
  let res = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      countZeroes++;
      idx = i;
    } else {
      wholeProduct *= arr[i];
    }
  }
  if (countZeroes == 0) {
    for (let i = 0; i < arr.length; i++) {
      res[i] = Math.floor(wholeProduct / arr[i]);
    }
  } else if (countZeroes == 1) {
    res[idx] = wholeProduct;
  }
  return res;
}
