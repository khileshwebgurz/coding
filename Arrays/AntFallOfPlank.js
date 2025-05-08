// Last Moment Before All Ants Fall Out of a Plank
// The problem is asking for the time when the last ant reaches either end of the plank and falls off. To find the answer,
// we calculate how long it takes for each ant to fall off, and the last moment will be the maximum time taken by any ant.
// Example: n = 4, left =[] , right = [0,1,3]
// here n is the length of plank, left array is the array of all ants moving to left and right for right direction.
// from here no ant is moving in left direction , 3 ants are moving in right direction, and are at 0, 1, 3 position.
// So 0th position ant will take 4s , 1st position will 3 sec and 3rd position will take 1s . So we have to find the longest time
// i.e 4

const n = 4;
const left = [];
const right = [0, 1, 3];

console.log(lastAnt(n, left, right));

// for this time complexity will be O(n) and Sc will be O(1)
function lastAnt(n, left, right) {
  let maxLeft = 0;
  let maxRight = 0;
  let ans = 0;
  for (let i = 0; i < left.length; i++) {
    maxLeft = Math.max(maxLeft, left[i]);
  }

  for (let j = 0; j < right.length; j++) {
    maxRight = Math.max(maxRight, n - right[j]);
  }

  ans = Math.max(maxLeft, maxRight);
  return ans;
}
