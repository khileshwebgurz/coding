// Given an array arr[] of non-negative integers, where each element arr[i] represents the height of the vertical lines, find the maximum amount of
//  water that can be contained between any two lines, together with the x-axis.
// Input: arr[] = [1, 5, 4, 3] && Output: 6
// Explanation: 5 and 3 are 2 distance apart. So the size of the base = 2. Height of container = min(5, 3) = 3. So total area = 3 * 2 = 6.

const arr =  [3, 1, 2, 4, 5]
console.log(optimisedmostWater(arr));

// this is brute force approach which gives us O(n2) time complexity and space complexity as O(1). The logic is we find the minimum of both the
// items and the difference of their index position and then product them , the biggest product will be or answer.
function mostWater(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let difference = Math.min(arr[i], arr[j]) * (j - i);

      max = Math.max(max, difference);
    }
  }
  return max;
}

// now the most optimised approach is using two pointer approach , where we try to traverse from left and right 
// the logic is simple we are comparing the 2 building everytime and choose the shorter one bcz let say we choose bigger height due to which the amount of
// water will be less as if we choose shorter height then find the max distance of that shorter height then water will be max in terms of width. but choosing
// bigger height we try to thinking max water in height/vertically which at the end can cause less water.
// for this the time complexity is O(n) and Sc is O(1)
function optimisedmostWater(arr){
    let left = 0;
    let right = arr.length -1;
    let result =0;
    while(left < right){
        let difference = Math.min(arr[left],arr[right]) * (right - left)
        result = Math.max(result,difference)

       if(arr[left] > arr[right]) right--;
       else if(arr[left] < arr[right]) left++;
    }
    return result;
}
