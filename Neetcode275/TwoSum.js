// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.
const nums = [5,5]
const target = 10
console.log(optimalApproach(nums,target))

// the brute force approach
function twoSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j =0;j<nums.length;j++){
            if((nums[i]+nums[j] === target) && (i !==j)){
                return [i,j]

            }
        }
    }
    return [-1,-1]
}

// the better approach would be sorting the array and apply two pointer approach but this will give O(nlogn) + O(n) tc 
function betterApproach(nums,target){
    nums.sort((a,b)=> a-b);
    let left = 0;
    let right = nums.length-1;
    while(left < right){
        if(nums[left]+nums[right] === target) return [left,right]
        else if(nums[left]+nums[right]<target) left++;
        else right--;
    }
    return [-1,-1]
}

// the optimal approach is using HashMap , which gives us O(n) tc and O(n) Sc
function optimalApproach(nums,target){
    let maps = new Map();
    for(let num=0;num<nums.length;num++){
        let complement = target - nums[num];
        if(maps.has(complement)){
            return [maps.get(complement),num]
        }
        maps.set(nums[num],num)
    }
    return [-1,-1]
}