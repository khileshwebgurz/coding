// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for
//  0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.
const nums = [1,2,1]
console.log(optimalApproach(nums))

// the time complexity will be O(n) and space complexity is O(n)
function concatenationArray(nums){
    const n = nums.length;
    let ans = new Array(2 * n);
    for(let i =0;i<n;i++){
        ans[i] = nums[i]
        ans[i+n] = nums[i]
    }
    return ans;
}


// the optimal approach is push back the elements at the end of array. Here Tc is O(n) and Sc is O(1)
function optimalApproach(nums){
    const n = nums.length;
    for(let i =0;i<n;i++){
        nums.push(nums[i])
    }
    return nums;
}