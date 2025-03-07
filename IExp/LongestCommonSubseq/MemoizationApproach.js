// This is better solution for the longestcommonsubsequence ,the issue in brute force approach was that it was recomputing some values multiple times which might
// not be a good idea . So what we will do whenever there is any computition , we will store that computed value in some 2D array let say dp. So whenever we encounter
// that particualr character again we can access the value stored in it instead of recomputing.

// The reason of using 2D array instead of 1D -> We compare two strings (X and Y) character by character. Each cell dp[i][j] represents the LCS length of X[0...i-1]
// and Y[0...j-1]. We need past results to compute new ones. If we used 1D, we would overwrite values we still need. Since dp[i][j] depends on dp[i-1][j-1],
//  we need to store previous row results. So, we need 2D to remember past values and avoid recomputation!

//  Memoization(Top down Approach) helps by storing the results of already solved subproblems in a 2D table (DP array). This prevents redundant calculations, reducing time complexity
// from O(2^N) (exponential) to O(M × N) (polynomial).

// Time Complexity → O(m * n)
// ✅ Space Complexity → O(m * n) (for memoization storage)

const s1 = "brute";
const s2 = "groot";
const dp = Array(s1.length + 1)
  .fill(null)
  .map(() => Array(s2.length + 1).fill(-1));
console.log(LCs(s1, s2, s1.length, s2.length, dp));

function LCS(s1, s2, x, y, dp) {
  if (x === 0 || y === 0) return 0;
  if (dp[x][y] !== -1) {
    return dp[x][y];
  }
  if (s1[x - 1] === s2[y - 1]) {
    dp[x][y] = 1 + LCS(s1, s2, x - 1, y - 1, dp);
    return dp[x][y];
  }

  // if no match then
  dp[x][y] = Math.max(LCS(s1, s2, x - 1, y, dp), LCS(s1, s2, x, y - 1, dp));
  return dp[x][y];
}

// returning the subsequence itself
function LCs(s1, s2, x, y, dp) {
  if (x === 0 || y === 0) return "";
  if (dp[x][y] !== -1) {
    return dp[x][y];
  }
  if (s1[x - 1] === s2[y - 1]) {
    dp[x][y] =  LCs(s1, s2, x - 1, y - 1, dp)+s1[x - 1] ;
    return dp[x][y];
  } else {
    let lcs1 = LCs(s1, s2, x - 1, y, dp);
    let lcs2 = LCs(s1, s2, x, y - 1, dp);
    dp[x][y] = lcs1.length > lcs2.length ? lcs1 : lcs2;
    return dp[x][y];
  }
 
  
}
