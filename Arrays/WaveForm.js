// Sort the array in wave form where arr[i] >= arr[i+1] <= arr[i+2] >= arr[3] <= arr[4] >= …..
// Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
// Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80} 
// this can have multiple answers
let arr = [10, 5, 6, 3, 2, 20, 100, 80]
console.log(highwave(arr).join(' '))

// logic is sort the array and swap i and i+1 indexed element and traverse by +2. Tc is O(n log n) and Sc is O(1)
function wavey(arr){
    arr.sort();
    for(let i =0;i<arr.length-1;i+=2){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
    }
    return arr;
}

// better approach is traverse the array in such a way that all the even positioned element > odd positioned element.
// Tc will be O(n) and O(1)

function highwave(arr){
    for(let i =0;i<arr.length;i+=2){
        if (i>0 && arr[i-1] > arr[i] )
           [arr[i],arr[i-1]] = [arr[i-1],arr[i]]

        // If current even element 
        // is smaller than next
        if (i<arr.length-1 && arr[i] < arr[i+1] )
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
    }
    return arr;
}