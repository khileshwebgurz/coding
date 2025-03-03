// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
//Input: strs = ["act","pots","tops","cat","stop","hat"] && Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(optimalApproach(strs));

// this is not the optimal solution as we are sorting the array inside the for loop.Its time complexity is O(n * k log k) and Sc is O(nk)
// In this case sorting makes the more time
function groupAnagrams(strs) {
  let result = {};
  for (let word of strs) {
    // our keys will be the sorted string
    let cleansed = word.split("").sort().join("");
    if (result[cleansed]) {
      result[cleansed].push(word);
    } else {
      result[cleansed] = [word];
    }
  }
  //   returning only the value from the result objects.
  return Object.values(result);
}

// now the optimal approach : Instead of sorting the array we can create a frequency signature for each word using a
// fixed-length array of size 26 (since only lowercase letters are used). For this the time complexity will be O(nk) and space will be O(nk)
// where n is the size of array and k is length of word.
function optimalApproach(strs) {
  let result = {};
  for (let word of strs) {
    // creating an array filled with 0 of size 26.
    let count = new Array(26).fill(0);
    // now from each word take each characters one by one
    for (let char of word) {
      // for act , we Gets the ASCII (or Unicode) value of the character char that is 97 for a and subtracting  the ASCII (or Unicode) value of a
      // as a is smallest and return the difference and 97 -97 =0 so increment by 1 at 0th index.
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    // and rest part will be # and it will make a string
    let key = count.join("#"); // Unique key for anagrams

    // if the key doesn't exist in result array then push it there
    if (!result[key]) {
      result[key] = [];
    }
    // then push the word as a key in the key
    result[key].push(word);
  }
// return only the values
  return Object.values(result);
}
