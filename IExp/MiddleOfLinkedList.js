// We have to find the middle node of the linked list. If the length of linked list is even then in that case we have two middle node ,so return the
// 2nd node and for odd case we have just single node , that we need to return.

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}
// 1 2 4 4 5 6 7 8
// creating a sample linkedlist
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3)
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6)

// finding the middle node of linkedlist
const middleNode = optimalApproach(head);
console.log('Middle node is >>>',middleNode.data)


// Time Complexity: O(N+N/2) The code traverses the entire linked list once and half times and then only half in the second iteration, first to count the number of
//  nodes then then again to get to the middle node. Therefore, the time complexity is linear, O(N + N/2) ~ O(N).
function findMiddle(head){
    if(head === null || head.next === null) return head;

    let temp = head;
    let count =0;

    // this while loop will give us the length of the linkedlist
    while(temp !== null){
        count++;
        temp = temp.next;
    }

    // calculate the position of middle node
    let mid = Math.floor(count/2)+1;
    temp = head;

    // traverse to middle node by moving temp to the middle position and the moment
    // mid is 0 break it/
    while(temp !== null){
        mid = mid -1;

        // check if middle posirtion is reached
        if(mid === 0) {
            break;
        }
        temp = temp.next;
    }
    return temp;
}

// Time Complexity: O(N/2) The algorithm requires the 'fast' pointer to reach the end of the list which it does after approximately N/2 iterations (where N is the total number of nodes).
//  Therefore, the maximum number of iterations needed to find the middle node is proportional to the number of nodes in the list, making the time complexity linear, or O(N/2) ~ O(N).
// Optimal approach would be using slow and fast pointer
function optimalApproach(head){
    if(head === null || head.next === null) return head;
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}