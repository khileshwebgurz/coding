// Find the 3rd largest distinct element from array .

let arr = [12, 13, 1,10, 34, 16]; 
// console.log(thirdLarg(arr))
console.log(OptimisedThird(arr))

// Tc is n logn and Sc is O(1)
function thirdLarg(arr){
    arr.sort();
    if((arr[arr.length-1] !== arr[arr.length -3]) && (arr[arr.length-3] !== arr[arr.length -2])){
        return arr[arr.length - 3]
    }
    return -1;
}

// Expected Approach, here Tc is O(n) and Sc is O(1)
function OptimisedThird(arr){
    // creating 3 variable to store largest , secondlargest, thirdlargest element.
    var first = arr[0], second = -1, third = -1;

    // move along start to end 
    for(var i = 1;i< arr.length;i++){
        // , for every index if element is greater than 1st , update first with arr[i], second with 1st and
        // 3rd with second. So largest element get updated and previously stored as become 2nd largest and 3rd largest so on.
        if(arr[i]>first){
            third = second;
            second = first;
            first = arr[i]
        }

        // if element is larger than 2nd , update value of second and 2nd become 3rd largest
        else if(arr[i]> second){
            third = second;
            second = arr[i];
        }

        // if previoous condition fail, but element is larger than 3rd , then update the third.
        else if(arr[i]>third){
            third = arr[i];
        }
    }
    return third;
}