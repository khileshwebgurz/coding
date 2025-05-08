// We are given an array and a k element , and we have to return the kth element from the end. 

const arr = [3,1,8,5,2,4]
const k = 4

console.log(kthelement(arr,k))

function kthelement(arr,k){
    let n = arr.length;
    
    let fromFirst = n - k;
    return arr[fromFirst];

}