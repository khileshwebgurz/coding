// Given an array of positive numbers, calculate the number of possible contiguous subarrays having product lesser than a given number K.
// Input : arr[] = [1, 2, 3, 4] & K = 10 & Output : 7 & The subarrays are {1}, {2}, {3}, {4}, {1, 2}, {1, 2, 3} and {2, 3}

let arr = [1, 2, 3, 4]
let k = 10
console.log(slidingWindow(arr,k))

// for this the time complexity will be O(n2) and Sc will be O(1). We just try to find all the possible subarrays and counted them as my final result.
function lesssubarrayK(arr,k){
    let count =0;
    for(let i =0;i<arr.length;i++){
        let prod = 1;
        for(let j = i;j<arr.length;j++){
            prod *= arr[j]
            if(prod <k){
                count++;
            }
        }
    }
    return count;
}

// now for optimised code with O(n) Time complexity and O(1) space complexity. Since the problem involves a contiguous subarray, we can use a 
// sliding window approach to efficiently find all valid subarrays. Instead of recalculating the product for every subarray from scratch, we maintain 
// a running product and adjust the window dynamically.
// We expand the end pointer to include more elements.
// If the product becomes greater than or equal to K, we move the start pointer to shrink the window until the product is valid.
// At each valid window, all subarrays ending at end and starting from start to end are counted.

function slidingWindow(arr,k){
    let start =0;
    let count =0;
    let product =1;
    let newArr = [] //for storing the subarrays 

    // here using i iam iterating over each element and multiplying it with product and start remains at zero as we are expanding the window size with  i (assume it as end)
    for(let i =0;i<arr.length;i++){
        product *= arr[i];

        // but the moment product is greater than k and start is smaller than end moves start ahead, so minimize the window size so that product become smaller than k
        while(product >=k && start <= i){
            product /= arr[start]; // Remove the leftmost element
            start++;
        }

        // if everything is ok then ierate from end to start from reverse of array and push in newarray each items.
        for(let j =i;j>= start;j--){
            newArr.push(arr.slice(j,i+1))
        }

        // and also modify the count variables to count the number of subarrays.
        count += i - start +1;

    }
    return {count,newArr}
}