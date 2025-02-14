// Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum.
// Example: Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.

let arr = [2, 3, -8, 7, -1, 2, 3]
console.log(bruteSubarray(arr))


// this is a brute force approach , which will provide us Tc as O(n2) and Sc as O(1)
function subarraySum(arr){
    let max =arr[0];
    for(let i =0;i<arr.length;i++){
        let sum =0;
        for(let j =i;j<arr.length;j++ ){
            sum += arr[j];
            max = Math.max(max,sum);
        }
    }
    return max;
}


// now the optimised approach is using Kadane's algorithm which will result us in O(n) Tc and O(1) Sc
// the logic is we will try to have 2 variables currentMax and maxGlobal. Here in currentMax we will store currently max value and in maxGlobal will store
// the maximum value till now and at the end the mxGlobal will have max sum of subarray.

function kadaneAlgo(arr){
    let currentMax = arr[0]
    let maxGlobal = arr[0]

    for(let i = 1;i<arr.length;i++){
        currentMax = Math.max(arr[i], currentMax+arr[i])

        if(currentMax > maxGlobal){
            maxGlobal = currentMax;
        }
    }
    return maxGlobal;
}


// in case we need to the return the subarray instead of the sum then we still use kadane algo with simple modification like have start , end variables, tempstart.
// and this is the optimised way too with Tc as O(n) and Sc as O(1)
function subarrays(arr){
    let currentMax = arr[0]
    let maxGlobal = arr[0]
    let start =0;
    let end =0;
    let tempstart = 0;

    for(let i =1;i<arr.length;i++){
        if(arr[i] > arr[i]+currentMax){
            currentMax = arr[i]
            tempstart = i;
        }else{
            currentMax += arr[i]
        }

        if(maxGlobal < currentMax){
            maxGlobal = currentMax;
            start = tempstart;
            end =i;
        }
    }

    return {
        maxArr: maxGlobal,
        arrays: arr.slice(start, end+1)
    }
}


// now the brute force approach for getting the subarray whose sum will be maximum, with Tc as O(n2) and Sc as O(1)

function bruteSubarray(arr){
    let maxSum = -Infinity
    let subarray = []
    for(let i =0;i<arr.length;i++){
        let sum =0;
        for(let j = i;j<arr.length;j++){
            sum += arr[j];
            if(sum > maxSum){
                maxSum = sum;
                subarray = arr.slice(i, j+1)
            }
        }
    }
    return {subarray,maxSum};
}