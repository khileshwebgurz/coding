// Given a number N as string, find the smallest number that has same set of digits as N and is greater than N. If N is the greatest possible
//  number with its set of digits, then print “Not Possible”.

// Input: N = “218765” && Output: “251678”
// Explanation: The next number greater than 218765 with same set of digits is 251678.
// Input: n = “4321” && Output: “Not Possible”
// Explanation: 4321 is the greatest number possible with same set of digits.

const N = "218765";
console.log(getLargeNum(N));

// Tc is O(n) and Sc is O(n)
function greatestNum(N) {
  let Func = (num) => Number(num);
  let arr = Array.from(N, Func);
  let ind = -1;
  let n = arr.length;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      ind = i;
      break;
    }
  }
  if (ind == -1) return "Not Possible";

  for (let i = n - 1; i > ind; i--) {
    if (arr[i] > arr[ind]) {
      [arr[i], arr[ind]] = [arr[ind], arr[i]];
      break;
    }
  }
  arr.splice(ind + 1, n - ind - 1, ...arr.slice(ind + 1).reverse());
  return arr.join("");
}


// Given a no in string format output another string which is the biggest no formed from using same digits , otherwise print -1:
function getLargeNum(N){
    const Num = N.split('').sort((a,b)=> b- a).join('');
    if(Num === N) return -1;
    return Num;
}