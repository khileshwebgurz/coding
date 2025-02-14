// Given an array arr[] of n integers and a target value, the task is to find whether there is a pair of elements in the array whose sum is
//  equal to target. 
// Input: arr[] = [0, -1, 2, -3, 1], target = -2 and Output: true
// Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

const arr =  [0, -1, 2, -3, 1]
const target = -2
console.log(twoSumHashing(arr,target).join(' '))


// Time complexity is O(n2) and Sc as O(1)
function twoSums(arr,target){
    for(let i =0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return [arr[i],arr[j]]
            }
        }
    }
    return [-1,-1]
}


// Using sorting and binary search , while getting Tc as O(n logn) and Sc as O(1)
function sortAndSearch(arr, target){
    // always remember to sort an array in this way , as this helps in specifying -ve and +ve number and will sort correctly.
    // if we do normal arr.sort() it will sort on positive no basis.
    arr.sort((a, b) => a - b);

    let left = 0 , right = arr.length-1;
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === target) return [arr[left],arr[right]];
        else if(sum > target){
            right--;
        }else{
            left++;
        }
    }
    return [-1,-1]
}

// most optimised way is using Hashing. Using this we try to find the complement of a number and if it doesn't exist in set add it there else return the complement
// and the item as they will make the sum. This gives O(n) time complexity and O(n) space complexity

function twoSumHashing(arr, target){
    const set = new Set();
    for(let item of arr){
        let complement = target - item

        if(set.has(complement)) return [complement, item]
        set.add(item)
    }
    return [-1,-1]
}
