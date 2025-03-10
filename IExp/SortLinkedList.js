class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const head = new Node(1)
head.next = new Node(0)
head.next.next = new Node(1)
head.next.next.next = new Node(1)
head.next.next.next.next = new Node(0)

const sortedData = optimisedApproach(head);
printLinkedList(sortedData)

// just for printing the linkedlist
function printLinkedList(data){
    let curr = data;
    while(curr !== null){
        console.log(curr.data);
        curr = curr.next;
    }
}


// this is the brute force approach, where we tried to convert linkedlist to an array then sort it and then again change it back to linked list.
// after that we printed the linkedlist. Time complexity is O(n log n) and Space complexity is O(n)
function sortLinkedList(){
    const arr = [];
    let curr = head;

    while(curr !== null){
        arr.push(curr.data);
        curr = curr.next;
    }
    arr.sort((a,b)=> a-b);
    curr = head;
    for(let i =0;i<arr.length;i++){
        curr.data = arr[i];
        curr = curr.next;
    }
    return head;
}


// now the optimised approach is iterating over the linkedlist and count the numbers of 0s and 1s. After obtaining the counts, we iterates through the list again,
//  updating each node’s value based on the counts (assigning 0s until their count is exhausted, then assigning 1s). This method efficiently sorts the list by
//  counting and overwriting values without needing additional space.
// Time complexity is O(n) and O(1)

function optimisedApproach(head){
    let count0 =0;
    let count1 = 0;
    let curr = head;
    while(curr !== null){
        if(curr.data === 0){
            count0++;
        }
        else if(curr.data === 1){
            count1++;
        }
        curr = curr.next;
    }
    curr = head;
    while(curr !== null){
        if(count0 >0){
            curr.data = 0;
            count0--;
        }
        else {
            curr.data = 1;
            count1--;
        }
        curr = curr.next;
    }
    return head;

}