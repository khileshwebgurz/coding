// Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.
// Input: arr = [-2,1,-3,4,-1,2,1,-5,4] && Output:6 
// Explanation: [4,-1,2,1] has the largest sum = 6. 

const arr =  [1]
console.log(optimisedSubarray(arr))


// time complexity will be O(n2) and space will be O(1)
function maxSubarr(arr){
    if(arr.length <2) return arr[0];
    let res =1;
    for(let i=0;i<arr.length;i++){
        let count =arr[i];
        for(let j = i+1;j<arr.length;j++){
            count += arr[j];
            res = Math.max(res,count);
        }
    }
    return res;
}
// if incase we need to return the subarray whose sum makes biggest sum
function maxbruteSubarr(arr){
    if(arr.length <2) return arr[0];
    let res = 1;
    let subarray =[]
    for(let i=0;i<arr.length;i++){
        let count = arr[i];
        for(let j =i+1;j<arr.length;j++){
            count += arr[j];
            if(count > res){
                res = count;
                subarray = arr.slice(i,j+1)
            }
        }
    }
    return {subarray,res}
}

// optimal approach ,here we will try to implement a logic such that whenever our sum becomes less than 0 ,we make it to 0. As any number less
// than 0 will make the sum minimum . For this the time complexity will be O(n) and space complexity is O(1)
function optimisedApproach(arr){
    let sum =0;
    let maxSum =1;
    
    for(let i=0;i<arr.length;i++){
        if(sum <0) sum =0;
        sum += arr[i];
        maxSum = Math.max(maxSum,sum);
        
    }
    return maxSum;
}

// if incase we need to return the subarray too including their sum
function optimisedSubarray(arr){
    let sum = 0;
    let maxSum = -Infinity;
    let start = 0, end = 0, tempStart = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (sum < 0) {
            sum = 0;
            tempStart = i;  // Reset temp start index
        }
    
        sum += arr[i];
    
        if (sum > maxSum) {
            maxSum = sum;
            start = tempStart; // Update start index
            end = i;  // Update end index
        }
    }
    
    return { maxSum, subarray: arr.slice(start, end + 1) };
}
