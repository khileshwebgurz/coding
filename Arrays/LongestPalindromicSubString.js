// Given a string str, the task is to find the longest substring which is a palindrome. If there are multiple answers, then return the first
//  appearing substring.
// Input: str = “forgeeksskeegfor”   Output: “geeksskeeg”
// Explanation: There are several possible palindromic substrings like “kssk”, “ss”, “eeksskee” etc. But the substring “geeksskeeg” is the longest
//  among all.
const str = "forgeeksskeegfor";
console.log(expandFromCentre(str));

function isPalindrome(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true
}

// this is the brute force approach where we iterate over whole string and check whether the substring is palindrome or not, if it is then
// update the max length. Doing this we will get O(n3) time complexity and O(1) space complexity.
function longestPalindrome(str) {
  let n = str.length;
  let maxLen = 1;
  let start = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isPalindrome(str, i, j) && (j - i + 1) > maxLen) {
        start = i;
        maxLen = j - i + 1;
      }
    }
  }
  return str.substring(start, start + maxLen);
}


// now the better approach is expanding from the center. We will consider every possible item and try to expand it from the center. if the condition
// satisfy that it is in the range and also equal then expand it more like left-- and right++ and when the condition satify calculate the difference.
// this gives us the time complexity of O(n2) and space complexity of O(1)
// there is also a Manachar’s Algorithm for optimised solution which only solves this problem and gives us O(n) time complexity and O(n) space
// if space is not the issue
function expandFromCentre(str){
    let start =0;
    let n = str.length;
    let maxLen =0;
    for(let i=0;i<n;i++){
        // this len1 will check for the str of length odd -> aba , here mid is b and we consider it as both left and right.
        let len1 = expandfromcentre(str,i,i)
        // this len2 will check for the str of length even -> abba . so the mid lie in between b and b , so we consider both b as our left and right
        let len2 = expandfromcentre(str,i,i+1)
     
        // this will give us the max length of the palindromic substring expanding from the center
        let len = Math.max(len1,len2)

        if(len > maxLen){
            maxLen = len
            start = i- Math.floor((len-1)/2);
        }
    }
    // this is closure
    function expandfromcentre(str, left, right){
        // here we check left should not be lesser than 0 and right should not be bigger than length and should expand until they become unequal.
        while(left >=0 && right < str.length && str[left] === str[right]){
            left--;
            right++;
        }
        return right-left-1;
    }

    return str.substring(start,start+maxLen)
}
