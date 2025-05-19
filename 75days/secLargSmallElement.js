// return the 2nd largest and 2nd smallest element from the array
const arr = [-12, 45, 0, -31, 2, 9];
console.log("smallest & largest element >>>", largeSmallEle(arr));

// function largeSmallEle(arr){
//     arr.sort((a,b)=> a-b);
//     return [arr[1],arr[arr.length-2]]
// }

function largeSmallEle(arr) {
  let max = arr[0];
  let secmax = arr[0];

  let small = arr[0];
  let secsmall = arr[0];

  //   this way i'm getting the largest and second largest element from the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secmax = max;
      max = arr[i];
    } else if (arr[i] !== max && arr[i] > secmax) {
      secmax = arr[i];
    }
  }

  //   this way i'm getting smallest and second smallest element from the array
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]<small){
        secsmall = small;
        small = arr[i];
    }else if(arr[i] !== small && arr[i] <secsmall){
        secsmall = arr[i];
    }
  }
  return [secsmall, secmax];
}
