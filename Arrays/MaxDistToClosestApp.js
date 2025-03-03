// Find a seat with Distance between nearest Occupied Seats maximised
// Given a string (seats) of 1s and 0s, where 1 represents a filled seat and 0 represents an empty seat in a row. Find an empty seat with
//  maximum distance from an occupied seat. Return the maximum distance.
// Input: Seats = "1000101"  Output: 2 Explanation: Geek can take 3rd place and have a distance of 2 in left and 2 in right.
// Input: Seats = "1000" Output: 3 Explanation: Geek can take the rightmost seat to have a distance of 3.

const Seats = "0001";
console.log(maxDistance(Seats));


// this is brute force approach having O(n2) tc and O(1) Sc. The logic is simple we try to move in both direction of current element until we find 1 and from
// both left and right whichever is minimum we conisder that and compare it with maxDist whichever is max we get the answer . This is done for whole array and at the
// end the value of maxDist is final answer.
function maxDistance(Seats) {
  let maxDist = 0;
  for (let i = 0; i < Seats.length; i++) {
    if (Seats[i] === "0") {
      let leftDist = Infinity;
      let rightDist = Infinity;

      for (let j = i - 1; j >= 0; j--) {
        if (Seats[j] === "1") {
          leftDist = i - j;
          break;
        }
      }

      for (let j = i + 1; j < Seats.length; j++) {
        if (Seats[j] === "1") {
          rightDist = j - i;
          break;
        }
      }
      let nearest = Math.min(leftDist, rightDist);
      maxDist = Math.max(maxDist, nearest);
    }
  }
  return maxDist
}
