// Rotating array by 1 postion

let arr  = [ 1,2,3,4,5]
let newarr = rotateArr(arr)
for(let i =0;i<newarr.length;i++){
    console.log(newarr[i])
}

function rotateArr(arr){
    let temp = arr[0];
    for(let i =0;i< arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    return arr;
}
