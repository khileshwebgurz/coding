// Given an array and a val integere , you need to remove all the occurence of the val from the array and return the size of the array till that
// point where all the items are there which are not equals to val and after that it doesn't matter what is present.
// Input: nums = [3,2,2,3], val = 3 && Output: 2, nums = [2,2,_,_], output is the size of updated array

const nums =[3,2,2,3]
const val = 3
console.log(removeELement(nums,val))

// this is the optimal approach using the two pointer. With Time complexity as O(n) and Sc as O(1)
function removeELement(nums,val){
    let k =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++;
        }
    }
    for(let i =k;i<nums.length;i++){
        nums[i] = "_"
    }
    return nums;
}
