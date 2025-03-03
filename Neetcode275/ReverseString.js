// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Input: s = ["h","e","l","l","o"] && Output: ["o","l","l","e","h"]

const str = ["h","e","l","l","o"]
console.log(reverseStr(str))

// time complexity is O(n) and space is O(1)
function reverseStr(str){
    for(let i =0;i<str.length/2;i++){
        [str[i],str[str.length-1-i]] = [str[str.length-1-i],str[i]]
    }
    return str;
}