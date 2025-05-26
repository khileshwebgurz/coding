// arr = [1,3,3,1,2,4,4,4,2,7,7,6] . this is an array , you need to return an array which store only unique items and in sorted order.
//  don't use any in built method/function in js

const arr = [1, 3, 3, 1, 2, 3, 4, 4, 4, 2, 7, 7, 6];
console.log(bruteForce(arr));

// the brute force approach

function uniqueArr(arr) {
  let uniqueArr = [];

  // Step 1: Extract unique elements
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      uniqueArr.push(arr[i]);
    }
  }

  // now sorting those array inplace
  for (let i = 0; i < uniqueArr.length; i++) {
    for (let j = 0; j < uniqueArr.length - i - 1; j++) {
      if (uniqueArr[j] > uniqueArr[j + 1]) {
        let temp = uniqueArr[j];
        uniqueArr[j] = uniqueArr[j + 1];
        uniqueArr[j + 1] = temp;
      }
    }
  }
  return uniqueArr;
}


// using inbuilt methods, we can't directly apply .sort() in Set() bcz set is an object in js not an array and .sort() methods work on
// array. so we first convert set to an array using spread operator then sort it.
function bruteForce(arr) {
  let newarr = new Set();
  for (let i = 0; i < arr.length; i++) {
    newarr.add(arr[i]);
  }
  let myarray = [...newarr];
  return myarray.sort();
}
