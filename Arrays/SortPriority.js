// Input:['14:20:2:Meeting reminder', '14:20:1:System alert', '14:21:2:Database backup']. this is an input array and i want to sort this array based
// on its priority . it is in format HH:MM:Priority: sentence. if priortiy is same then check on basis of MM if they also same then HH in js

const arr = [
  "14:21:2:Meeting reminder",
  "14:20:1:System alert",
  "14:21:2:Database backup",
  "14:21:2:Short",
  "14:20:1:Longer sentence",
];

const sortedArr = sortPriority(arr);
console.log(sortedArr);

function sortPriority(arr) {
  return arr.sort((a, b) => {
    const [hourA, minuteA, priorityA, sentenceA] = a.split(":").map((value, index) => (index < 3 ? Number(value) : value));
    // format -> ["14", "21", "2", "Meeting reminder"]
    const [hourB, minuteB, priorityB, sentenceB] = b.split(":").map((value, index) => (index < 3 ? Number(value) : value));

    // Compare priority, minute, hour, and sentence length
    return (
      priorityA - priorityB ||
      minuteA - minuteB ||
      hourA - hourB ||
      sentenceA.length - sentenceB.length //this will be excluded if sentence is not required for sorting.
    );
    // if priorityA - priorityB gives positive then A comes after B ,No further comparisons (minuteA, hourA, sentenceA) are needed. if 0 nothing , 
  });
}


// Explanation:
// basically i'm splitting the  "14:21:2:Meeting reminder" using : and converting 1st 3 into NUmber and last as a default string
// after splitting on the basis of : we get an array and from 0 to 2 will be converted to Number and last into string ["14", "21", "2", "Meeting reminder"]

// If we have to sort from HH:MM:Priority only sentence is not requried thenconst [hourA, minuteA, priorityA] = a.split(":").map(Number);