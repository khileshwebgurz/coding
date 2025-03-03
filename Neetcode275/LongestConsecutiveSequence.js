// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have
//  to be consecutive in the original array.
// Input: nums = [2,20,4,10,3,4,5] && Output: 4 , Explaination: [2,3,4,5]

const nums = [2,20,4,10,3,4,5]
console.log(longestConsecutiveSequence(nums))

function longestConsecutiveSequence(nums){
    let res =0;
    for(let i=0;i<nums.length;i++){
        let count =0;
        for(let j =i+1;j<nums.length;j++){
            for(let k =j+1;k<nums.length;k++){
                if(nums[k]> nums[j] && nums[j]> nums[i]){
                    count++;
                }
                res = Math.max(res,count)
            }
        }
    }
    return res;
}