// We are given an array and we need to return the kth largest element from the end of an array.

const arr = [1, 23, 12, 9, 30, 2, 50]
const k = 3;
console.log(kthLargest(arr,k))

// the for loop is used for getting kth largest element from the end. If just kth largest element is asked then we don't need loop , return arr[k-1].
function bruteForce(arr,k){
    arr.sort();
    let count =0;
    for(let i=0;i<arr.length;i++){
        count++;
    }
    return arr[count - k];
}

// now the better approach is to avoid sorting the array, we can use MinHeap but in javascript it doesn't support minHeap . We have to implement
// the minHeap by ourself which is little bit complicated . But we can also use Quickselect approach from quick sort , which is a better approach.
function kthLargest(arr,k){
    return quickSelect(arr,0,arr.length-1,k-1);

   
}

function quickSelect(arr,start,end,k){
    let pivot = partition(arr,start,end);

    if(pivot === k) return arr[pivot];
    else if(pivot < k) return quickSelect(arr,pivot+1,end,k);
    else return quickSelect(arr,start,pivot-1,k);
    
}

function partition(arr,left,right){
    let pivot = arr[right];
    let i = left;

    for(let j = left; j<right;j++){
        if(arr[j]>= pivot){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++;
        }
    }
    [arr[i],arr[right]] = [arr[right],arr[i]]
    return i;
}