// Given integer array,find the maximum product of a triplet in array
let arr = [10, 3, 5, 6, 20]
// console.log(productTrip(arr))
console.log(maxProductTrip(arr))


// here Tc is O(n3) and Sc is O(1)
function productTrip(arr){
    let maxProd = 1;
    if(arr.length < 3 )return -1
    for(let i =0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            for(let k =j+1;k<arr.length;k++){
                maxProd = Math.max(arr[i]*arr[j]*arr[k], maxProd)
            }
        }
    }
    return maxProd;
}

// Optimised code
//  Case1:  The three largest positive numbers give the highest product.
// Example: [10, 20, 30] → 10 * 20 * 30 = 6000  

// Case2: The two smallest negative numbers (because multiplying two negatives gives a positive) and the largest positive number can form the maximum product.
// Example: [-10, -10, 5] → (-10) * (-10) * 5 = 500

function maxProductTrip(arr){
    const n = arr.length;

    if(n < 3) throw new Error("Array should have atleast 3 elements.");

    let max1 = -Infinity, max2 = -Infinity, max3= -Infinity; //3 largest
    let min1 = Infinity, min2 = Infinity;  //2 smallest

    // single pass through the array
    for(let num of arr){
        // find top 3 maximum numbers to cover case 1
        if(num > max1){
            max3 = max2,
            max2 = max1,
            max1 = num;
        }else if(num > max2){
            max3 = max2,
            max2 = num;
        }else if(num > max3){
            max3 = num;
        }

        // 2 smallest number to cover case 2
        if(num < min1){
            min2 = min1;
            min1 = num;
        }else if(num < min2){
            min2 = num;

        }
    }

    // Product of 3 largest numbers
    const product1 = max1 * max2 * max3;
    // Product of 2 smallest and 1 largest number
    const product2 = min1 * min2 * max1;

    return Math.max(product1,product2)
}