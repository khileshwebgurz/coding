// Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.
const A = [4, 9, 6, 5, 2, 3];
// console.log("Minimum element is: " + setMini(A));
// console.log("Maximum element is: " + setMaxi(A));
console.log(findMinMax(A));

// Basic approach
// function setMini(A){
//     let mini = Infinity
//     for(let i = 0;i<A.length;i++){
//         if(A[i]< mini){
//             mini = A[i]
//         }
//     }
//     return mini;
// }

// function setMaxi(A){
//     let maxi = -Infinity
//     for(let i =0;i<A.length;i++){
//         if(A[i]> maxi){
//             maxi = A[i]
//         }
//     }
//     return maxi;
// }

// Optimised approach
// Logic first assign min and max based on the length of array, if even then 0 as min and 1 as max for odd , 0 should be min and max.
// now i should increment by 2 and it will iterate till it is smaller than length of an array. with i increasing compare value at i and i+1 with min and max
// and update it accordingly.
function findMinMax(arr){
    let n = arr.length;

    // if array has only 1 element
    if(n==1){
        return {min: arr[0],max: arr[0]};
    }

    let min , max;
    let i =0;

    // if array has even number of elements
    if(n%2 == 0){
        // initialize min and max by comparing first two elements
        if(arr[0] < arr[1]){
            min = arr[0];
            max = arr[1]
        }else{
            min = arr[1];
            max = arr[0];
        }
        i=2; //start from 3rd element
    }
    else{
        // if arr has odd number of elements, initalize both min and max
        min = max = arr[0];
        i = 1;
    }

    // Process pairs
    while(i < n - 1){
        if(arr[i] < arr[ i+1]){
            min = Math.min(min, arr[i]);
            max = Math.max(max, arr[i+1]);
        }else{
            min = Math.min(min, arr[i+1]);
            max = Math.max(max, arr[i])
        }
        i += 2
    }
    return {min, max}

}
