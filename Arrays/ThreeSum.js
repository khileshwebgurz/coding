// Given an array arr[] of size n and an integer sum, the task is to check if there is a triplet in the array which sums up to the given target sum.
// Input: arr[] = [1, 4, 45, 6, 10, 8], target = 13  &&   Output: true 
// Explanation: The triplet [1, 4, 8] sums up to 13

const arr = [1, 4, 45, 6, 10, 8]
const target =  13
console.log(optimisedthreeSum(arr,target))

// this is the brute force approach which gives us O(n3)time complexity and O(1) space complexity
function threeSum(arr,target){
    for(let i =0;i<arr.length-2;i++){
        for(let j =i+1;j<arr.length-1;j++){
            for(let k =j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k] === target){
                    return [arr[i],arr[j],arr[k]]
                }
            }
        }
    }
    return [-1,-1,-1]
}


// now the better approach using HashSet and combination with 2 sum solution. For this the time complexity will be O(n2) and space will be O(n) for using Hashset
function betterthreeSum(arr,target){
    let n = arr.length;
    for(let i =0;i<n;i++){
        let sets = new Set();
        for(let j=i+1;j<n;j++){
            let complement = target - arr[i]-arr[j]

            if(sets.has(complement)){
                return [complement, arr[i],arr[j]]
            }
            sets.add(arr[j])
        }
    }
    return [-1,-1,-1]
}


// most optimised approach is sorting the array and then apply two pointer approach.
// We first sort the array. After sorting, we traverse every element arr[i] in a loop. For every arr[i], use the Two Pointer Technique based solution
//  of 2 Sum Problem to check if there is a pair with sum equal to given sum – arr[i].
// And for this approach the time complexity will be (n logn ) + O(n2) and space complexity will be O(1)
function optimisedthreeSum(arr,target){
    let n = arr.length;
    arr.sort((a,b)=> a-b)
    for(let i =0;i<n-2;i++){
        let left = i+1 
        let right = n-1;
        let complement = target - arr[i]
        while(left<right){
            if(arr[left]+arr[right] === complement) return [arr[left], arr[right],arr[i]]
            else if(arr[left]+arr[right] < complement) left++;
            else right--;
        }
    }
    return [-1,-1,-1]
}