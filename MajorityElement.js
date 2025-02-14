// Given an array arr. Find the majority element in the array. If no majority exists, return -1. A majority element in an array is an element that appears
//  strictly more than arr.size() / 2 times in the array.
// Input : arr[] = {1, 1, 2, 1, 3, 5, 1} Output : 1
// Explanation: Note that 1 appear 4 times which is more than  7 / 2 times

const arr = [7, 7, 2, 7, 3, 5, 7];
console.log(mooreVoting(arr));

// for this the time complexity will be O(n2) and Sc will be O(1)
function majorityElem(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
      if (count > n / 2) return arr[i];
    }
  }

  return -1;
}

// Another approach is using sorting the array as in this case similar elements will be together and it will be easy to count them.
// for this my Tc will be O(nlogn) and Sc will be O(1)
function sortedArr(arr) {
  let n = arr.length;
  arr.sort();
  let count = 1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    }

    if (count > n / 2) return arr[i];
  }
  return -1;
}

//Another optimal Approach is using Map. Here we will try to push element into the map and check if it already exist there, if yes then increment it's count value.
// and after traversing whole array check if any count value is > n/2.For this Tc will be O(n) and Sc will also be O(n)
function hashmapArr(arr){
  let n = arr.length;
  let countMap = new Map();
  for(let item of arr){
    // set value(i.e count) of each item by +1
    countMap.set(item, (countMap.get(item) || 0) + 1);
    if(countMap.get(item)> n/2) return item;
  }
  return -1;
}

// Best optimised approach is using boyer moore voting algorithm, It is a 2 step process 
// Step1: gives the element that may be the majority element in the array. If there is a majority element in an array, then this step will definitely return
//  majority element, otherwise, it will return candidate for majority element.
// Step2: Check if the element obtained from the above step is the majority element. This step is necessary as there might be no majority element. 

// Logical run
// Initialize a candidate variable and a count variable.
// Traverse the array once:
// If count is zero, set the candidate to the current element and set count to one.
// If the current element equals the candidate, increment count.
// If the current element differs from the candidate, decrement count.
// Traverse the array again to count the occurrences of the candidate.
// If the candidate‘s count is greater than n / 2, return the candidate as the majority element.
// And for this the Tc will be O(n) and Sc will be O(1)
function mooreVoting(arr){
  let n = arr.length;
  let count = 0;
  let candidate =0;
  for(let num of arr){
    if(count ==0){
      candidate = num;
      count =1;
    }
    if(candidate == num){
      count += 1
    }
    if(candidate != num){
      count -= 1
    }
  }
  count = 0;
  for (const num of arr) {
      if (num === candidate) {
          count++;
      }
  }

  if(count > n/2) return candidate;
  return -1;

}