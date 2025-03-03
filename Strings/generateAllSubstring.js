// Given a string s, containing lowercase alphabetical characters. The task is to print all non-empty substrings of the given string.
// Input :  s = “abc” && Output :  “a”, “ab”, “abc”, “b”, “bc”, “c”

const str = "abc"
console.log(allSubstring(str))

// this approach gives us time complexity of O(n2) and space complexity of O(n2)
// Since each substring is stored in the array, the number of substrings is:O(n2)
function allSubstring(str){
    let res = [];
    for(let i =0;i<str.length;i++){
        for(let j = i;j<str.length;j++){
            res.push(str.substring(i,j+1))
        }
    }
    return res
}