// Given a string s having lowercase characters, find the length of the longest substring without repeating characters.

// Input: s = “geeksforgeeks” Output: 7
// Explanation: The longest substrings without repeating characters are “eksforg” and “ksforge”, with lengths of 7.

const s = "geeksforgeeks";
console.log(mostOptimised(s));

// for this the Tc will be O(n2) and Sc will be O(n) as using extra space.

function longestNonRepeatChar(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let seen = new Set();
    let count = 0;
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      count++;

      max = Math.max(count, max);
    }
  }
  return max;
}

// the better approach will be using sliding window approach .
// How Sliding Window Works:
// Expands the window by adding new characters.
// Shrinks the window when a duplicate is found.
// Uses a Set to track unique characters.
// for this the time complexity will be O(n) and Sc as O(min(n, 26))
// Reason for Tc as O(n) instead of O(n2)
// Each character is processed at most twice
// The outer for loop runs n times (right moves from 0 to n-1).
// The while loop only runs when there’s a duplicate.
// left only moves forward, never backward.
// Thus, each character is added to and removed from the Set at most once, leading to a total of 2n operations in the worst case.

// The for loop adds characters (O(1) per character).
// The while loop removes characters from Set (O(1) per character).
// Each character is added once and removed once, totaling O(n) + O(n) = O(2n) = O(n).
function longSubSlidingWindow(s) {
  let max = 0;
  let seen = new Set();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

// now most optimised code using the combination of sliding window + last index Tc is O(n) and Sc is O(n)
function mostOptimised(s) {
  let start = 0;
  let max = 0;
  let lastIndex = new Map();
  for (let i = 0; i < s.length; i++) {
    if (lastIndex.has(s[i]) && lastIndex.get(s[i]) >= start) {
      start = lastIndex.get(s[i]) + 1;
    }
    lastIndex.set(s[i], i); // Update the last index of the character
    max = Math.max(max, i - start + 1); // Update max length
  }
  return max;
}

// Logic
// How This Works:
// Sliding Window Technique: Similar to the first solution, but here we use a Map to store the last index where each character was found.
// Map for Efficient Index Lookup: The Map allows us to quickly access the last index of a character and adjust the start pointer accordingly without 
// needing to remove characters one by one.
// Outer Loop (end pointer): The end pointer moves forward, expanding the window. If a duplicate character is found, instead of shifting left and 
// removing characters, we simply adjust start to the position after the last occurrence of the duplicate character.

// Steps in Action:
// We initialize max = 0, start = 0, and lastIndex = new Map().
// For each character s[end]:
// If s[end] was seen before and its last occurrence is greater than or equal to start, we move the start pointer to lastIndex.get(s[end]) + 1
//  (this skips the duplicate).
// Otherwise, we add the character's last index to the Map (lastIndex.set(s[end], end)).
// The max variable keeps track of the largest window size we encounter.

// Why This is More Optimized:
// Efficient Updates to start: Instead of deleting characters one by one from the Set, we jump directly to the position after the duplicate 
// using the Map. This avoids unnecessary removals.
// Direct Access: The Map allows us to instantly get the last index of any character in O(1) time, reducing overhead.