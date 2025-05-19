// check whether array is sorted or not
const arr = [6,10,12,45,52,90]
console.log(checkingsort(arr))

function checkSort(arr){
    for(let i =0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]) return false; 
        }
    }
    return true
}

function checkingsort(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i-1] > arr[i]) return false;
    }
    return true
}