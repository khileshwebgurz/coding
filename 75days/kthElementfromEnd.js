// We are given an array and a k element , and we have to return the kth element from the end. 

const arr = [3,1,8,5,2,4]
const k = 2

console.log(kthelement(arr,k))

function kthelement(arr,k){
    let count =0;
    for(let i =0;i<arr.length;i++){
        count++;
    }
    let fromFirst = count - k;
    return arr[fromFirst];

}