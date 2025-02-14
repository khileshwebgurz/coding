// Given an array arr[] consisting of n integers, the task is to find all the array elements which occurs more than floor(n/3) times.
// Note: The returned array of majority elements should be sorted.

const arr = [2, 2, 3, 1, 3, 2, 1, 1]
const newarr = new Array();
console.log(optimisedApproach(arr,newarr))

// basic approach is to traverse the array 2 times to search for the elements count and check whether it is greater than n/3 . And the logic here is
// an array will always contains max of  only two elements whose count > n/3( it's just logic). And to avoid duplicate elements we applied its condition too.
// Tc will be O(n2) and Sc will be O(1)
function basicApproach(arr,newarr){
    let n = arr.length;
    for(let i =0;i<n;i++){
        let count =0;
        for(let j =0;j<n;j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }
        if(count > n/3){
            if (newarr.length === 0 || arr[i] !== newarr[0]) {
                newarr.push(arr[i]);
            }
        }
        if((newarr.length == 2) && (newarr[0] > newarr[1])){
            [newarr[0] , newarr[1]] = [newarr[1] , newarr[0]]
            break;
        }
    }
    return newarr;
}

// better approach as here we used Map for storing the number and their count in key -value pair  , and after this if count is greater than n/3 we push it to new array
// as there might some more element whose count > n/3 . And after this if 1st element is > 2nd element then swap them to get sorted array as answer.
// Tc will be O(n) and Sc will be O(n)
function hashmapMethod(arr){
    let n = arr.length;
    let newarr = [];
    let countMap = new Map();
    for(let item of arr){
        countMap.set(item, (countMap.get(item) || 0) + 1);
        if(countMap.get(item)> n/3){
            newarr.push(item)
        }
        if((newarr.length == 2) && (newarr[0] > newarr[1])){
            [newarr[0],newarr[1]] = [newarr[1],newarr[0]]
        }
    }
    return newarr;
}

// most optimised approach is moore voting algorithm.Since at most two elements can appear more than n/3 times, we use two candidate variables and their 
// corresponding count variables.
// Logic and Intituion -:
// Step 1: Find Potential Candidates
// Maintain two candidates (cand1, cand2) and their counts (count1, count2).
// Iterate through the array:
// If the element matches cand1, increment count1.
// Else if it matches cand2, increment count2.
// Else if count1 is 0, set cand1 to the current element and reset count1 to 1.
// Else if count2 is 0, set cand2 to the current element and reset count2 to 1.
// Otherwise, decrement both count1 and count2.
// Step 2: Verify Candidates
// After the first pass, cand1 and cand2 are potential majority elements but may not necessarily appear more than ⌊n/3⌋ times. So, we:

// Reset count1 and count2 to 0.
// Iterate through the array again to count occurrences of cand1 and cand2.
// If a candidate appears more than ⌊n/3⌋ times, include it in the result.
// Here Tc will be O(n) and Sc will be O(1)
function optimisedApproach(arr){
    let n = arr.length;
    let newarr = []
    let count1 =0;
    let count2 =0;
    let candidate1 = arr[0]
    let candidate2 = arr[0]
    for(let i =0;i<n;i++){
        if(arr[i] == candidate1) count1++;
        else if(arr[i] == candidate2) count2++;
        else if(count1 == 0){
            candidate1 = arr[i]
            count1 = 1
        }
        else if(count2 == 0){
            candidate2 = arr[i]
            count2 = 1
        }
        else{
            count1--;
            count2--;
        }
    }

    count1 = 0
    count2 =0;
    for(let i=0;i<n;i++){
        if(arr[i] == candidate1) count1++;
        else if(arr[i] == candidate2) count2++;
    }
    if(count1 > n/3) newarr.push(candidate1);
    if(count2 > n/3) newarr.push(candidate2);
    if(newarr.length == 2 && (newarr[0] > newarr[1])){
        [newarr[0],newarr[1]] = [newarr[1],newarr[0]]
    }
    return newarr;
    
}