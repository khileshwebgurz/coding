//sort the array without using any inbuilt methods. As the array contains 0,1,2 which are red,blue,green color sort in the order, such that
// all the similar numbers comes together
// Input: nums = [2,0,2,1,1,0] && Output: [0,0,1,1,2,2]

const nums = [2, 0, 2, 1, 1, 0];
console.log(sortArr(nums));

// the brute force approach is using any sorting algo like bubble sort, selection , etc. Here i used bubble sort with Tc as O(n2)
// and Sc as O(1)
function sortArr(arr) {
  let i = 0;
  while (i < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    i++;
  }
  return arr;
}

// this is the better  approach having time complexity as O(n) for 1st loop and O(n) = {C0+C1+C2} as all these three makes total n.
// hence total Tc will be O(2n) and Sc as O(1)
function sortColors(nums) {
  let C0 = 0,
    C1 = 0,
    C2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) C0++;
    else if (nums[i] == 1) C1++;
    else C2++;
  }
  let index = 0;
  for (let i = 0; i < C0; i++) {
    nums[index++] = 0;
  }
  for (let i = 0; i < C1; i++) {
    nums[index++] = 1;
  }
  for (let i = 0; i < C2; i++) {
    nums[index++] = 2;
  }
  return nums;
}

// the most optimised approach is using Dutch national flag algorithm. Here the time complexity is O(n) and space complexity as O(1)
function optimisedApproach(nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    } else if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else {
      mid++;
    }
  }
  return nums;
}
