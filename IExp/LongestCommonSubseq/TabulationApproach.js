// Now we will be using Tabulation Approach , which is more optimised way of memoization. In this Approach we follows the same steps as of  memoization, but
// it is more better way as here instead of recursion call we do normal iteration. So our time complexity reduces as recursion call is no more and no recusion stack too.
//  Memoization (Top-Down) => Uses recursion + caching. Can have high memory usage due to recursive stack.
// Tabulation (Bottom-Up) => Uses an iterative DP table. Avoids recursion overhead & is generally faster.
// Both methods give the same result, but Tabulation is preferred for large inputs due to its efficiency! 

// This optimise the extra recurive approach which reduce the extra stack space complecity from exponential to polynomial.

const s1 = "brute";
const s2 = "groot";
const dp = Array(s1.length + 1).fill(null).map(() => Array(s2.length + 1).fill(0));
console.log(LCs(s1, s2, s1.length, s2.length, dp));

// ince dp[i][j] stores the LCS length for s1[0...i-1] and s2[0...j-1], the bottom-right dp[x][y] contains the LCS length for the entire strings after
//  processing all characters. 

function LCS(s1,s2,x,y,dp){
    for(let i =1;i<=x;i++){
        for(let j =1;j<=y;j++){
            if(s1[i-1] === s2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[x][y];
}



// now if in case i want to print the longest subseuqnece too
function LCs(s1,s2,x,y,dp){
    for(let i =1;i<=x;i++){
        for(let j =1;j<=y;j++){
            if(s1[i-1] === s2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }

        }
    }


    // Start at the bottom-right corner of the DP table (dp[x][y]) by i = x and j = y bcz this cell contains the length of the longest common subsequence.
    // From here, we will trace back to find the actual LCS sequence.
    let i = x, j = y;
    let lcs = "";
    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            lcs = s1[i - 1] + lcs;  
            // we decrement i and j bcz we alread
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;  
        } else {
            j--;  
        }
    }
    return lcs;
}