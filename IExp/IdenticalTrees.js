// Given two binary trees, the task is to find if both of them are identical or not. Two trees are identical when they have the same data and the
//  arrangement of data is also the same.

class Node {
  constructor(data) {
    (this.data = data), (this.left = null);
    this.right = null;
  }
}

// 1st tree
let r1 = new Node(1);
r1.left = new Node(2);
r1.right = new Node(3);
r1.left.left = new Node(4);

// 2nd tree
let r2 = new Node(1);
r2.left = new Node(2);
r2.right = new Node(3);
r2.left.left = new Node(4);

if (isIdentical(r1, r2)) {
  console.log("Yes");
} else {
  console.log("No");
}


// this is the best approach using recursion we traverse down .Even though there are two recursive calls per node, they do not lead to exponential growth because:
// Each node is visited exactly once.
// The function does not duplicate work—it just moves down the tree structure.
// So the time complexity will O(n) instead of O(2^n) and Space complexity as O(H), where H is the height of the tree.
function isIdentical(r1, r2) {
  if (r1 === null && r2 === null) return true;
  if (r2 === null || r1 === null) return false;

  return (
    r1.data === r2.data &&
    isIdentical(r1.left, r2.left) &&
    isIdentical(r1.right, r2.right)
  );
}
