// The task is to remove the nth node from the end of the linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// creating a sample linkedlist
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
const N = 3;
// finding the middle node of linkedlist
const middleNode = optimisedApproach(head, N);
printLL(middleNode);
// to print all the remaining nodes
function printLL(head) {
  while (head !== null) {
    console.log(head.data + " ");
    head = head.next;
  }
}

// Time Complexity: O(L)+O(L-N), We are calculating the length of the linked list and then iterating up to the (L-N)th node of the linked list,
// where L is the total length of the list. With O(1) space complexity
function removeNode(head, N) {
  if (head === null || head.next === null) return null;

  let temp = head;
  let count = 0;
  while (temp !== null) {
    count++;
    temp = temp.next;
  }
  if (count - N === 0) return null;
  temp = head;
  for (let i = 1; i < count - N; i++) {
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
}

// now the optimal approach , for this too we need to use slow and fast pointer , where we will first move our fast pointer to the position of
// the value of N, then we again start traversing both slow and fast pointer together until my fast or fast.next !== null , the moment my fast or
// fast.next becomes null the slow has reached the position just before which we need to delete.
// Time Complexity: O(N) since the fast pointer will traverse the entire linked list, where N is the length of the linked list.and space will be
// O(1)
function optimisedApproach(head, N) {
  if (head === null || head.next === null) return null;

  let slow = head;
  let fast = head;
  for (let i = 0; i < N; i++) {
    fast = fast.next;
  }

  if (fast === null) return head.next;
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
}
