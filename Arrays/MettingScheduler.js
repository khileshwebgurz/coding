// You have given the availability time slots 'slots1' and 'slots2' of two people and a meeting duration 'd', for any i, slots[i] = {starti , endi}.
// return the earliest time slot that works for both of them and is of 'd' duration.
// If there is no common time slot that satisfies the requirements, return an empty array.

// It is guaranteed that no two availability slots of the same person intersect with each other. That is, for any two time slots [start1, end1] and
//  [start2, end2] of the same person, either start1 > end2 or start2 > end1.
//Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], d = 8 && Output: [60,68]
// Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], d = 12 && Output: []

const slots1 = [
  [10, 50],
  [60, 120],
  [140, 210],
];
const slots2 = [
  [0, 15],
  [60, 70],
];
const d = 12;
console.log(optimisedmettingScheduler(slots1, slots2, d));

// this is the brute force approach for finding the common interval for both the people to get the time slot.
// using this the time complexity will be O(n2) and Space complexity will be O(1).

// Logic and similar case for all array's subarray
//  Comparing [60,120] (Person A) with [60,70] (Person B)
// Person A is available from 60 to 120.
// Person B is available from 60 to 70.
// Overlap? ✅ Yes, because:
// Both start at 60.
// Person B leaves at 70, and Person A stays longer until 120.
// Common time slot: [60,70] (10 minutes long).
// Since d = 8, we can schedule a meeting from 60 to 68 ✅.
// ✅ This is our answer: [60,68]
function meetingScheduler(slots1, slots2, d) {
  for (let i = 0; i < slots1.length; i++) {
    for (let j = 0; j < slots2.length; j++) {
      const start = Math.max(slots1[i][0], slots2[j][0]);
      const end = Math.min(slots1[i][1], slots2[j][1]);

      if (end - start > d) {
        return [start, start + d];
      }
    }
  }
  return [];
}

//now the optimised approach is using sorting both the slots and using two pointers on both the slots which is start and end
// this technique is the optimised with time complexity of O(n log n + m log m) and O(1) space complexity

function optimisedmettingScheduler(slots1,slots2,d){
    let i =0;
    let j =0;
    slots1.sort((a,b)=> a[0]-b[0])
    slots2.sort((a,b)=> a[0]-b[0])
    while(i < slots1.length && j < slots2.length){
        let start = Math.max(slots1[i][0],slots2[j][0])
        let end = Math.min(slots1[i][1],slots2[j][1])

        if(end - start > d){
            return [start, start+d]
        }

        if(i<slots1.length) i++;
        if(j< slots2.length) j++;

    }
    return []
}
