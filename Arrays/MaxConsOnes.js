// In a binary array find the max consecutive 0s and 1s means count them
let arr = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
console.log(ConsecutiveOneandZero(arr))


// Tc is O(n) and Sc is O(1)
function ConsecutiveOneandZero(arr){
    let count = 0;
    let max = 0;
    for(let i =0;i< arr.length;i++){
        if(arr[i] === 1){
            count++;
            max = Math.max(count,max)
        }
        else{
            count =0;
        }
    }
    return max;
}