// The problem is longest common subsequence , where we are given 2 strings and we need to find the longest common subsequence present in both the string.
// Input: s1 = “ABC”, s2 = “ACD” && Output: 2
// Explanation: The longest subsequence which is present in both strings is “AC”.

// Input: s1 = “AGGTAB”, s2 = “GXTXAYB” && Output: 4
// Explanation: The longest common subsequence is “GTAB”.

// Input: s1 = “ABC”, s2 = “CBA” && Output: 1
// Explanation: There are three longest common subsequences of length 1, “A”, “B” and “C”.

const s1 = "brute";
const s2 = "groot";

console.log(LCS(s1, s2, s1.length, s2.length));

// This approch has the time complexity of O(2^n) and space complexity is O(N) due to recursive call stack.

// the most brute force approach is finding all the subsequence using recursion. We starts from the  end of both the string , when character matches decrese the length
// of both the string and add 1 to the recursive call of (m-1, n-1), where m is length of s1 and n is length of s2. When character doesn't match then max (fun(m-1,n), fun(m,n-1))
// and at the end we will get the length of longest subsequence
function longsubsequence(s1, s2, x, y) {
  if (x === 0 || y === 0) return 0;
  if (s1[x - 1] === s2[y - 1]) {
    return 1 + longsubsequence(s1, s2, x - 1, y - 1);
  } else {
    return Math.max(
      longsubsequence(s1, s2, x - 1, y),
      longsubsequence(s1, s2, x, y - 1)
    );
  }
}

// What if we need to print the subsequence itself instead of printing just the length
function LCS(X, Y, m, n) {
  if (m === 0 || n === 0) {
    return "";
  }

  if (X[m - 1] === Y[n - 1]) {
    // if the character matches then we just add it instead of 1 like in previous and recursively call the function by decreasing both str length.
    return LCS(X, Y, m - 1, n - 1) + X[m - 1];
  } else {
    // if the character doesn't matches then break that in to 2 part where (m-1, n) and (m, n-1) and recurviely call them and get the max one.
    let lcs1 = LCS(X, Y, m - 1, n);
    let lcs2 = LCS(X, Y, m, n - 1);

    return lcs1.length > lcs2.length ? lcs1 : lcs2;
  }
}


