// sort an array without built in function/methods
const arr = [34,12,45,10,1,2,3]
console.log(quickSort(arr))

// the brute force approach for sorting without built in method , but this will cause us O(n2) time complexity and O(1)space complexity.
// This approach is also a Bubble sort.As it repeatedly swaps adjacent elements if they are out of order. 
function sortArr(arr){
    let i =0;
    while(i<arr.length){
        for(let i =0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            }
        }
        i++;
    }
    return arr;
    
}

// this is the most optimised approach as Tc is O(nlogn) and Sc as O(n)
function quickSort(arr){
    // these edge cases are necesaary for Maximum call stack size and also range of i from 0 to n-1 else the same issue.
    if(arr.length<=1) return arr;
    let left =[]
    let right = []
    let pivot = arr[arr.length-1]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot) left.push(arr[i]);
        else{
            right.push(arr[i]);
        }
    }
    // recursively calling the left and right array and at the end merge all of them to get sorted one.
    return [...quickSort(left), pivot, ...quickSort(right)]
}