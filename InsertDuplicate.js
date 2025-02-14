// Given an array arr consisting of N integers and an integer K, the task is to insert an adjacent K for every occurrence of it in the original
//  sequence and then truncate the array to the original length using an O(1) auxiliary space.
// Example1: Input: arr[] = {1, 0, 2, 3, 0, 4, 5, 0}, K = 0  Output: {1, 0, 0, 2, 3, 0, 0, 4} 
// The given array {1, 0, 2, 3, 0, 4, 5, 0} is modified to {1, 0, 0, 2, 3, 0, 0, 4] after insertion of two 0’s and truncation of extra elements.
// Example2: Input: arr[] = {7, 5, 8}, K = 8  Output: {7, 5, 8} 
// After inserting an adjacent 8 into the array, it got truncated to restore the original size of the array.  

const arr = [1, 0, 2, 3, 0, 4, 5, 0]
const k =0;
console.log(insertdup(arr,k).join(' '))
// Tc will be O(n) and Sc will be O(1)
function insertdup(arr,k){
    var N = arr.length;
    for(var i=0;i<N;i++)
    {
        if(arr[i] == k)
        {
            // Insert an adjacent k
            arr.splice(i+1, 0, k);
            i++;
 
            // Pop the last element
            arr.pop();
        }
    }
     
    return arr;
}


// for 1st step in the arrray -> [1, 0, 2, 3, 0, 4, 5, 0]
// arr.splice(2,0,0) will do these things-:
// splice(start, deleteCount, ...items)
// start (2): The index at which to begin modifying the array.
// deleteCount (0): The number of elements to remove starting from start. Since this is 0, no elements are removed.
// ...items (0): The items to insert into the array at the start index. In this case, a single 0 is being inserted.

// Output:
// The array is modified directly (in-place).
// A new element 0 is inserted at index 2.
// The length of the array increases by the number of items inserted.

// Note:  When you use splice to insert elements into an array, it shifts all subsequent elements to the right to make room for the new element(s).
//  This ensures that the array maintains its order.