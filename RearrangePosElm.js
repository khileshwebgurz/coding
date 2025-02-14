// Given an array arr[] of size n, the task is to rearrange it in alternate positive and negative manner without changing the relative order
// of positive and negative numbers. In case of extra positive/negative numbers, they appear at the end of the array.
// Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8} and Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}
// Input:  arr[] = {1, 2, 3, -4, -1, 4} and Output: arr[] = {1, -4, 2, -1, 3, 4}

const arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
console.log(rearrPosAndNeg(arr).join(" "));


// for this case both Time complexity and space complexity is O(n)
function rearrPosAndNeg(arr) {
  // split the positive and negative number in separate array
  const positives = arr.filter((num) => num >= 0);
  const negatives = arr.filter((num) => num < 0);

  const result = [];
  let i = 0,
    j = 0;
  while (i < positives.length && j < negatives.length) {
    result.push(positives[i++]);
    result.push(negatives[j++]);
  }

  while (i < positives.length) {
    result.push(positives[i++]);
  }

  // Append remaining negative numbers
  while (j < negatives.length) {
    result.push(negatives[j++]);
  }

  return result;
}
