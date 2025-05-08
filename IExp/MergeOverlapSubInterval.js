// Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.
// Example ->  intervals=[[1,3],[2,6],[8,10],[15,18]] && output -> [[1,6],[8,10],[15,18]]

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(bruteForce(intervals));


// Time Complexity: O(N*logN) + O(2*N), where N = the size of the given array.
function bruteForce(intervals) {
  //  doing this sort the matrix based on 0th index means 1 column of each row.
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    // skip all the merged intervals
    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }

    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[j][0] <= end) {
        end = Math.max(end, intervals[j][1]);
      } else {
        break;
      }
    }
    ans.push([start, end]);
  }
  return ans;
}
