// Sort an array after applying the given equation.
// We have an integer array that is sorted in ascending order. We also have 3 integers A, B and C. We need to apply A*x*x + B*x + C for each
//  element x in the array and sort the modified array.
// Input : arr[] = {-1, 0, 1, 2, 3, 4}  && A = -1, B = 2, C = -1 && Output : {-9, -4, -4, -1, -1, 0}  
// Expalnation:
// Input array is {-1, 0, 1, 2, 3, 4}. After
// applying the equation A*x*x + B*x + C on
// every element x we get, {-4,-1, 0, -1, -4, -9}
// After sorting, we get {-9, -4, -4, -1, -1, 0}


const arr = [-1, 0, 1, 2, 3, 4]
const A = -1
const B = 2
const C = -1

console.log(applyequation(arr,A,B,C))

// this approach is the brute force approach and has time complexity of O(n) + O(n log n) and space  complexity is O(1). The reason it is brute force
// bcz in question the array was already sorted and applied equation we need to sort it agian , and here this sorting is causing more  complexity to it.
function applyequation(arr,A,B,C){
    for(let i =0;i<arr.length;i++){
        const item = A * arr[i] * arr[i] + B * arr[i] + C
        arr[i] = item;
    }
    arr.sort((a,b)=> a-b)
    return arr;
}


// the another approach is using two pointer approach but this approach is not giving the sorted result , so use it accordingly.
function optimalapplyequation(arr,A,B,C){
    let left =0;
    let right = arr.length-1;
    let index = arr.length-1;
    let newArr = new Array(arr.length);
    while(left <= right){
        const leftVal = A * arr[left] * arr[left] + B * arr[left] + C
        const rightVal = A * arr[right] * arr[right] + B * arr[right] + C

        if(leftVal > rightVal){
            newArr[index--] = leftVal;
            left++;
        }else{
            newArr[index--] = rightVal;
            right--;
        }


    }
    return newArr
}