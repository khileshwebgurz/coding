// implement linear search in an array
const arr = [12,45,32,89,90]
let k = 32
console.log(findEle(arr,k))
function findEle(arr,k){
    for(let i =0;i<arr.length;i++){
        if(arr[i] == k) return true;
    }
    return false;
}