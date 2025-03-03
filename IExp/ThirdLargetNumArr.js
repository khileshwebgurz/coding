// Find 3rd largest number in an array ( no sorting, no extra space shall be used)
const arr = [2, 1, 78, 32, 22];
console.log(thirdLarget(arr));

// the brute force approach is using sorting technique to find 3rd largest number

// better approach will be using 3 for loop to check largest, 2nd largest , 3rd larget number in an array. The time complexity will be
// O(n) and space be O(1)
function thirdLargetNum(arr) {
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) max1 = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max2 && arr[i] < max1) max2 = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max3 && arr[i] < max2) max3 = arr[i];
  }
  return max3;
}

// optimal approach is using 3 variables instead of 3 loops. This is the optimal approach for smaller array but if in case the size is too long then
// we need to think of using priority queue.
function thirdLarget(arr){
    let max1 =0;
    let max2 =0;
    let max3 =0;
    for(let i=0;i<arr.length;i++){
        // if arr[i] > max1 , update max3 with max2 and max2 with max1 and then update max1 with arr[i]
        if(arr[i]>max1){
            max3 = max2;
            max2 = max1;
           
            max1 = arr[i];
           
        }

        else if(arr[i]>max2){
          max3 = max2;
          max2 = arr[i];
        }
        else if(arr[i]>max3){
          max3 = arr[i]
        }
    }
    return max3;
}
