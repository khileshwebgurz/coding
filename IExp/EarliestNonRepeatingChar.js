// Given a string s of lowercase English letters, the task is to find the first non-repeating character. If there is no such character, return ‘$’.
// Input: s = “geeksforgeeks” && Output: ‘f’ .Explanation: ‘f’ is the first character in the string which does not repeat.

const s = "aabbccc";
console.log(nonrepeatingChar(s));


// for this the time complexity is O(2n) and space is O(n)
function nonrepeatingChar(s) {
  let myMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (myMap.has(s[i])) {
      myMap.set(s[i], myMap.get(s[i]) + 1);
    } else {
      myMap.set(s[i], 1);
    }
  }
  for (let [key, value] of myMap) {
    if (value === 1) {
      return key;
    }
  }
  return "$";
}
