// Given a string str of length n (1 <= n <= 106) and a number k, the task is to find the kth non-repeating character in the string.
// Input : str = geeksforgeeks, k = 3 Output : r Explanation: First non-repeating character is f, second is o and third is r.

const s = "gkgkfor";
const k = 1
console.log(nonRepeatingChar(s,k));


function nonRepeatingChar(s,k){
  for(let i =0;i<s.length;i++){
    let count =0;
    for(let j =0;j<s.length;j++){
      if(s[i]===s[j]){
        count++;
      }

    }
    if(count === 1){
      k--;
    }
    if(k === 0){
      return s[i];
    }
  }
  return null
}


// this is not the best approach as it has O(n) space complexity and time complexity is O(2n).
function kthNonRepeatingChar(s,k){
    let myMap = new Map();
    for (let i = 0; i < s.length; i++) {
      if (myMap.has(s[i])) {
        myMap.set(s[i], myMap.get(s[i]) + 1);
      } else {
        myMap.set(s[i], 1);
      }
    }
    for (let [key, value] of myMap) {
      if (value === 1 && k > 0) {
        k--;
      }
      if(value === 1 && k ===0){
        return key;
      }
    }
    return "$";
}