// Input: arr[] = {2,5,1,3,0}; && Output: 5

const arr = [2, -5, 1, 3, -10];
console.log(largestelement(arr));

// 1st method

// function largestelement(arr) {
// 	return Math.max(...arr);
// }

// 2nd method

function largestelement(arr){
    let max = arr[0];
    for(let i =1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}