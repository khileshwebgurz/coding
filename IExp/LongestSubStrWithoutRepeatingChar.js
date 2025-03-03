// Input: s = “geeksforgeeks” Output: 7
// Explanation: The longest substrings without repeating characters are “eksforg” and “ksforge”, with lengths of 7.

const s = "geeksforgeeks";
console.log(mostOptimised(s));

// brute force approach
function longestNonRepeatChar(s) {
  let max = 0;
  let startIndex = 0; // Corrected variable to track longest substring start

  for (let i = 0; i < s.length; i++) {
    let seen = new Set();
    let count = 0;

    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) {
        break;
      }
      seen.add(s[j]);
      count++;

      // Update max and start index if new longest substring is found
      if (count > max) {
        max = count;
        startIndex = i; // Update correct start index
      }
    }
  }
  return s.slice(startIndex, startIndex + max);
}

// now the better approach
function longSubSlidingWindow(s) {
  let max = 0;
  let seen = new Set();
  let left = 0;
  let start = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    if (right - left + 1 > max) {
      max = right - left + 1;
      start = left;
    }
    //   max = Math.max(max, right - left + 1);
  }
  return s.slice(start, start + max);
}


// now the most optimised approach
function mostOptimised(s) {
    let start = 0;
    let max = 0;
    let startIndex = 0;  // To store the start of the longest substring
    let lastIndex = new Map();
    for (let i = 0; i < s.length; i++) {
      if (lastIndex.has(s[i]) && lastIndex.get(s[i]) >= start) {
        start = lastIndex.get(s[i]) + 1;
      }
      lastIndex.set(s[i], i); // Update the last index of the character

      if (i - start + 1 > max) {
        max = i - start + 1;
        startIndex = start;  // Store the correct start index
    }
    //   max = Math.max(max, i - start + 1); // Update max length
    }
    return s.slice(startIndex, startIndex + max);
  }

