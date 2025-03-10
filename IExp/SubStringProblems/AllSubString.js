// Given a string s, containing lowercase alphabetical characters. The task is to print all non-empty substrings of the given string.

// Input :  s = “abc” && Output :  “a”, “ab”, “abc”, “b”, “bc”, “c”
// Input :  s = “ab” && Output :  “a”,  “ab”,  “b”
// Input :  s = “a” && Output :  “a”

const s = "abc";
console.log(usingRecursion(s));

// this approach is just getting all the substring using 2 for loop and Extracting substrings (substring(i, j)) takes O(n) in worst case.
// So the time complexity will be O(n3) and space will be O(n)
function bruteForce(s) {
  let newStr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      newStr.push(s.substring(i, j + 1));
    }
  }
  return newStr;
}

// In this optimised approach instead of using substring loop , we can do it with only 2 loops. So the time complexity is O(n2) and space will be O(n)
function optimisedApproach(s) {
  let subStrings = [];

  for (let i = 0; i < s.length; i++) {
    let temp = "";
    for (let j = i; j < s.length; j++) {
      temp += s[j];
      subStrings.push(temp);
    }
  }
  return subStrings;
}


// this is the recursive approach, total complexity is O(n2) and space complexity is O(1)
function usingRecursion(s, start = 0, result = []) {
    if (start === s.length) return result; // Base case

    let current = ""; // Reset current for each new start position
    for (let i = start; i < s.length; i++) {
        current += s[i]; // Expand substring
        result.push(current); // Store the valid substring
    }

    return usingRecursion(s, start + 1, result); // Move to the next start position
}

