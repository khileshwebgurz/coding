// Reverse an array
let arr = [1, 2, 3, 4, 5];
console.log(reversedArr(arr));
// let newarr = arr.reverse();

// for(let i =0;i<newarr.length;i++){
//     console.log(newarr[i]);
// }

// 2nd method
// function reversedArr(arr) {
//   let newarr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newarr.push(arr[i]);
//   }
//   return newarr;
// }


// 3rd method
function reversedArr(arr){
    let temp =0;
    for(let i =0;i<arr.length/2;i++){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp;
    }
    return arr;
}