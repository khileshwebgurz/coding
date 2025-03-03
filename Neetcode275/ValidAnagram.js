// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
const s = "aabb";
const t = "abab";
console.log(optimisedApproach(s, t));

// this is the brute force approach with Time complexity as O(nlogn + mlogm) and space complexity as O(1)
function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  const str1 = s.split("").sort().join("");
  const str2 = t.split("").sort().join("");
  //    ok doing str1=== str2 compares object references, not their contents.they are different objects in memory
  if (str1 == str2) return true;

  return false;
}

// better approach would be without using sorting technique. But in some cases this will gives us incorrect output. Using this the Tc will be
// O(n) and Sc will be O(n). This approach can't handle repeated characters.
function betterApproach(s,t){
    if(s.length !== t.length) return false;
    let store = new Set();
    for(let i =0;i<s.length;i++){
        store.add(s[i])
    }
    for(let j =0;j<t.length;j++){
        if(!store.has(t[j])) return false;
    }
    return true;
}

// now the optmisied approach, using frequency counter approach. Here time complexity is O(n) and space complexity is O(k)
// Why O(k) instead of O(n)
// Since we're only storing characters (not entire strings), the space used is at most 26 (if all lowercase letters appear).
// This means that both approaches are technically O(1) (constant space) in practical use, because k does not scale with n (input size).

function optimisedApproach(s,t){
    if(s.length !== t.length) return false;
    let freq = {}
    // here we are storing the character as key and their frequency as value in freq array. 
    for(let char of s){
        freq[char] = (freq[char] || 0 )+1
    }
    // here we are finding char of t and checking in freq if exist then decrement its value if at some point it doesn't find the particular char of t
    // in freq array then just return false , else they are anagram.
    for(let char of t ){
        if(!freq[char]) return false;
        freq[char]--;
    }
    return true;
}