// Return the 2nd largest distinct element from the array , if it doesn't exist return -1

let arr = [12, 35, 1, 10, 34, 1]
// console.log(largElem(arr))
console.log(OptimiseElem(arr))

// Tc is O(n log n) and Sc is O(1)
function largElem(arr){
    arr.sort(); // nlogn
    if(arr.length <= 1) return -1;
    if(arr[arr.length - 1] !== arr[arr.length - 2]){
        return arr[arr.length - 2]
    }
    return -1
}

// Better approach has O(2*n) and Tc as O(1)

// Expected approach , the idea is to keep track of largest and smallest element while traversing the array.Initalize largest and smallest with -1.
// Now, for any index i,
// If arr[i] > largest, update second largest with largest and largest with arr[i].
// Else If arr[i] < largest and arr[i] > second largest, update second largest with arr[i]. 
// here Tc is O(n) and Sc is O(1)
function OptimiseElem(arr){
    const n = arr.length;
    let largest = -1;
     let smallest = -1
    for(let i = 0;i<=n;i++){
        // arr[i] > largest update second largest with largest and largest with arr[i]
        if(arr[i] > largest){
            smallest = largest;
            largest = arr[i];
        }

        // If arr[i] < largest and arr[i] > second largest, update second largest with arr[i]
        else if(arr[i] < largest && arr[i] >smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}