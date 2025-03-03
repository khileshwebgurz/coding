// Rotate array counter clockwise, in left direction.
// Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 1
// Output: { 2,3, 4, 5, 6, 1}

let arr = [1, 2, 3, 4, 5, 6];
let d = 2;
let newarr = basicApp(arr, d);
console.log(newarr.join(" "));



// Method 1 : Tc is O(N) and Sc is O(1)
function rotating(arr, d) {
  d = d% arr.length;
//   here slice(d) will start from d=2 means 3,4,5,6 then we concat 1,2 at the end of 3,4,5,6.
  return arr.slice(d).concat(arr.slice(0,d))
}



// Method 3 : Basic Approach
function basicApp(arr,d){
  let n = arr.length;
  let i =0;
  while(i<d){
    let temp = arr[0];
    for(let j =0;j<n;j++){
      arr[j] = arr[j+1]
    }
    arr[arr.length-1] = temp;
    i++;
  }
  return arr;
}



// Method 2: Better approach with Tc as O(n) and Sc as O(1)
function OptRotate(arr,d){
    d = d% arr.length;
    let n = arr.length;
    reverse(arr,0,d-1)
    reverse(arr,d,n-1)
    reverse(arr,0,n-1)

    return arr;
}

function reverse(arr, start,end){
    while(start < end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start++;
        end--;
    }
}