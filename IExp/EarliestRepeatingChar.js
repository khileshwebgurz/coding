// Given a string S of length n, the task is to find the earliest repeated character in it. The earliest repeated character means, the character that occurs 
// more than once and whose second occurrence has the smallest index.
// Input: s = “geeksforgeeks”  && Output: e 
// Explanation: e is the first element that repeats

const s = "geeksforgeeks";
console.log(optimisedApproach(s));

// Tc is O(n2) and Sc is O(1)
function earliestRepeat(s){
    let pos = Infinity;
    for(let i =0;i<s.length;i++){
        for(let j =i+1;j<s.length;j++){
            if(s[i] === s[j]){
                pos = Math.min(pos,j);
                
            }
        }
    }
    return s[pos];
}

// now the optimised way. Also can use Set().

function optimisedApproach(s){
    let newArr = new Map();
    for(let i =0;i<s.length;i++){
        if(!newArr.has(s[i])){
            newArr.set(s[i],i);
        }
        else{
            return s[i];
        }
    }
}