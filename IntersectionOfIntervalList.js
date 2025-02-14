// Find intersection of intervals given by two lists
// Given two 2-D arrays which represent intervals. Each 2-D array represents a list of intervals. Each list of intervals is disjoint and
//  sorted in increasing order. Find the intersection or set of ranges that are common to both the lists.
// Disjoint means no element is common in a list. 
// Example: arr1[][] = [[0, 4], [5, 10], [13, 20], [24, 25]] 
// arr2[][] = [[1, 5], [8, 12], [15, 24], [25, 26]] 
// Output: [[1, 4], [5, 5], [8, 10], [15, 20], [24, 24], [25, 25]]
// Explanation: [1, 4] lies completely within range [0, 4] and [1, 5]. Hence, [1, 4] is the desired intersection. Similarly, [24, 24] lies completely 
// within two intervals [24, 25] and [15, 24].

let arr1 = [[0, 4], [5, 10], [13, 20], [24, 25]]
let arr2 = [[1, 5], [8, 12], [15, 24], [25, 26]] 

console.log(intersectionOptimised(arr1,arr2))

// this will lead to O(n2) time complexity and O(1) space
function intersectionList(arr1,arr2){
    let result = []
    for(let i=0;i<arr1.length;i++){
        for(let j =0;j<arr2.length;j++){
            let start = Math.max(arr1[i][0],arr2[j][0])
            let end = Math.min(arr1[i][1],arr2[j][1])

            if(start <= end){
                result.push([start,end])
            }
        }
    }
    return result;
}

// the optimised approach would be using 2 pointer approach.  The idea is we try to take 2 pointers i and j and place in both array at starting and
// try to compare the 1st index element and 2nd index element from both the array to each other . And the condition is from 1st index we find max
// and from 2nd we find mini and store them in some varibale let say start and end , and if the start is smaller than end 
function intersectionOptimised(arr1,arr2){
    let i = 0;
    let j =0;
    let result =[]
    while(i < arr1.length && j < arr2.length){
        let start = Math.max(arr1[i][0],arr2[j][0])
        let end = Math.min(arr1[i][1],arr2[j][1])

        if(start <=end){
            result.push([start,end])
        }

        // Move the pointer with the smaller end value
        if (arr1[i][1] < arr2[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}