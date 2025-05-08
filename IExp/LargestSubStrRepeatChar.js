// Given a string s of size N. The task is to find the largest substring which consists of the same characters.
// Input : s = “abcdddddeff”  && Output : 5  && Substring is “ddddd”

const str = "aabceebeee";
console.log(optimisedCharApproach(str));


// This is the brute force approach, where we use 2 for loop for iteration over whole string to check if i and j are equal consitently. If then increment length
// variable and update the maxLength and also update maxChar with current str[i]. This will cause O(n2) time complexity and O(1) space complexity.
function longStrReapeatChar(str) {
  let maxLength = 0;
  let maxChar =0;
  for (let i = 0; i < str.length; i++) {
    let length = 1;
    for (let j = i + 1; j < str.length && str[i] === str[j]; j++) {
      length++;
    }
    if (length > maxLength) {
      maxLength = length;
      maxChar = str[i];
    }
  }
  return {maxLength, maxChar};
}

// Time complexity will be O(n) and space is O(1)
// now the optimised approach is to use two varibales temp and res, we will iterate from left to right and whenever the character matches the previous one increment
// the value of temp and then again compare temp with res , whichever will be max to be stored in res.But the thing is if prev is not as current then reassign temp 
// with 1
function optimisedCharApproach(str){
    let temp = 1, res = 1;
    for(let i =1;i<str.length;i++){
        if(str[i-1]===str[i]){
            temp++;
        }
        else{
            // case like -> abcdddddeff if i skip this -> res = Math.max(res,temp) in else condition then after making temp to 4 at last d, it will reset temp to
            // 1 again which at the end will return 1 not the longest.
            res = Math.max(res,temp)
            temp = 1
        }
    }
    // this is also necesaary for the case like -> aabceebeee, our longest contiunus character is at the end "eee", which will never go in else condition at the final
    // stage which makes our temp to 3 and res as 2, and without this -> res = Math.max(res,temp); , we are just returning res gives 2 as answer which is wrong.
    res = Math.max(res,temp);
    return res;
    
}