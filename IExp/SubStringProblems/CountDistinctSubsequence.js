// Given a string, find the count of distinct subsequences of it.
const str = "aaa";
console.log(bruteForce(str));


// we recursively find all the subsequence of a string and strore them in a set , so that only unique one should be added to it. And at the end we
// return the size of the set. This gives us Exponential time complexity O(2^n) and also the space complexity of recursive stack and the set.
// This backtracking approach is good for returning the subsequence if asked but for returning the count it become the brute force approach.
function bruteForce(s, index = 0, current = "", result = new Set()) {
  // let result = new Set();
  if (index === s.length) {
    result.add(current);
    return;
  }

  // Exclude the character
  bruteForce(s, index + 1, current, result);

  // Include the character
  bruteForce(s, index + 1, current + s[index], result);

  return result.size;
}

function dpApproach(s){
    
}
