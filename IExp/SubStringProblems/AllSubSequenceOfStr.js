// You need to print all the subsequence of a given string.
// Input : ab && Output : “”, “a”, “b”, “ab”
// In computer programming, the process of modifying and utilizing binary representations of numbers or any other data is known as bitmasking.

const str = "abc"
console.log(optimisedApproach(str))


// brute force using bit manipulation. For a string of length n , we can form 2^n possible subsequence.
// Time complexity : O(2^n⋅n), since we iterate over 2^n subsets and check  n characters per subset.
function bruteForce(s) {
    let result = [];
    let n = s.length;

    // In binary, shifting left by 1 bit multiplies a number by 2. So, shifting 1 left by n bits gives you 2^n.if n is 2 (for a string of length 2), then 1 << 2 is 
    // 2^2 =4.
    // here we are doing left shift of ,and behind the scene this will do 2^n i.e 2^2 for str="ab" i.e 4
    let totalSubsequences = 1 << n; // 2^n

    // now we iterate 4 times as there will be 4 subsequence of "ab" string.
    for (let i = 0; i < totalSubsequences; i++) {
        let subseq = "";
        for (let j = 0; j < n; j++) {
            // It involves bitwise operations to check if a specific character in the string should be included in the current subsequence.
            if (i & (1 << j)) subseq += s[j]; //If the j-th bit of i is set, it means that we should include s[j] in the subsequence.
            // if not then skip it.
        }
        result.push(subseq);
    }

    return result;
}


// Optimised approach, using recursion with backtracking.
// Recursively choose whether to include or exclude each character.
// Backtracking helps avoid redundant calculations.
// Time Complexity: (2^n)(optimal for this problem).

// Try to make a recursive tree in copy for logically understanding.
function optimisedApproach(s, index =0,current="",result=[]){
    if (index === s.length) {
        result.push(current);
        return;
    }

    // Exclude the character
    optimisedApproach(s, index + 1, current, result);

    // Include the character
    optimisedApproach(s, index + 1, current + s[index], result);

    return result;
}