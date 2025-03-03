// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"] && Output: "fl"

const strs = ["flower", "flight", "flow"];
console.log(optimisedApproach(strs));

// this approach require sorting the array of string and then check only the 1st and last item as if they are not equal at even 1st index then there will
// be no common longest prefix, and if even 1 is present then it is sure it will be present between each item of 1st and last element as they are sorted.
// this will give tc as O(nlogn)+ O(n) and O(1) space complexity
function longestCommonPrefix(strs) {
  strs.sort();
  let str1 = strs[0];
  let str2 = strs[strs.length - 1];
  let i = 0;
  while (i < str1.length) {
    if (str1[i] !== str2[i]) {
      break;
    }
    i++;
  }
  return str1.slice(0, i);
}

// now the optimised approach is using binary search with time complexity as O(n log m) and space complexity as O(1)
function optimisedApproach(strs) {
  if (!strs.length) return "";
  let minLen = Math.min(...strs.map((str) => str.length));
  let low = 0,
    high = minLen;
  while (low < high) {
    let mid = Math.floor((low + high + 1) / 2);
    if (isCommonPrefix(strs, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  //   Since low keeps track of the longest valid prefix length found, it represents the correct answer.
  // high does not necessarily point to a valid prefix.
  // If a prefix of length mid is common, we increase low to check for a longer prefix.
  // If a prefix of length mid is NOT common, we decrease high to check for a shorter prefix.
  return strs[0].slice(0, low);
}
// helper function
function isCommonPrefix(strs, length) {
  let prefix = strs[0].slice(0, length);
//   this every method is like looping over the whole strs array and check whether each element startswith the prefix if yes then it will
// return true , if even one of the item doesn't start with prefix it will return false and we need to decrease the high 
  return strs.every((str) => str.startsWith(prefix));
}
