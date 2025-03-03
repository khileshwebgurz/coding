// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
// Input: s = "Was it a car or a cat I saw?" && Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

const s = "tab a cat";
console.log(validPalindrome(s));

// this is the simple way of checking whether the given string is palindrome or not. We are checking whether each character is alphanumeric
// if yes then push them to s1 array and then create a copy this array and modify it then compare it
function validPalindrome(s) {
  let s1 = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (/[a-zA-Z0-9]/.test(ch)) {
      s1.push(ch.toLowerCase());
    }
  }
  // s1.slice() creates a copy of s1 to avoid modifying the original array.
  // reverse() is then applied to the copied array, not s1 itself.
  // Finally, join('') is used to compare the original and reversed strings.

  const ans = s1.slice().reverse().join("");

  return ans === s1.join("");
}


// now the optmised approach using Two Pointer, we will put 2 pointer i , j at start and end , if we find non alphabet on left do i++,
// for right do j--, if character matches do i++, j-- . Here time complexity will be O(n) and Sc is O(1)
function optimisedApproach(s){
    let i = 0;
    let j = s.length-1;
    while(i<j){
        if (!s[i].match(/[a-zA-Z0-9]/)) i++;
        else if(!s[j].match(/[a-zA-Z0-9]/)) j--;
        else if(s[i].toLowerCase() === s[j].toLowerCase()){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
} 