// we need to print the top view of binary tree measn whatever node we see from the top of binary tree , we need to print them.
// Input:Binary Tree: 2 7 5 2 6 -1 9 -1 -1 5 11 4 -1 && Output : Top View: [2, 7, 2, 5, 9]

// the simple approach or logic is when viewing from top of BT , we will see only 1st and last node from each level.
// Time Complexity: O(N) where N is the number of nodes in the Binary Tree. This complexity arises from visiting each node exactly once during the BFS traversal.
// Space Complexity: O(N/2 + N/2) where N represents the number of nodes in the Binary Tree.

class Node {
  constructor(data) {
    (this.data = data), (this.left = null), (this.right = null);
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6)
root.right.right = new Node(7)
root.left.left.left = new Node(8)
root.left.left.right = new Node(9)
root.left.right.left = new Node(10)
root.left.right.right = new Node(11)
root.right.left.left = new Node(12)
root.right.left.right = new Node(13)
root.right.right.left = new Node(14)
root.right.right.right = new Node(15)

let result = topView(root);
console.log(result.join(" "));

function topView(root) {
  // base case, if the root is null then it means no tree exist
  if (root === null) return [];

  // Queue for level order traversal (BFS)
  let queue = [];

  // Map to store nodes at a particular horizontal distance
  let map = new Map();

  // track the minimum horizontal distance
  let minDistance = Number.MAX_VALUE;

  // We start from the root, assuming it has a horizontal distance (HD) of 0.
  queue.push([root, 0]);

//   We process nodes level by level using BFS.
  while (queue.length > 0) {
    let [temp, d] = queue.shift(); //dequeue the front node. here temp is the complete node and d is the Horixontal distance.

    // update the minimum horizontal distance
    minDistance = Math.min(minDistance, d);

    // if the horizontal distance is not yet in the map, add it
    if (!map.has(d)) {
      map.set(d, temp.data);
    }

    // if node's left exist then add left child and add  horizontal distance as d - 1
    if (temp.left) {
      queue.push([temp.left, d - 1]);
    }

    // if node's right exist then add right child and add  horizontal distance as d + 1
    if (temp.right) {
      queue.push([temp.right, d + 1]);
    }
  }

  // create the result array with size equal to map size
  let ans = new Array(map.size);

  // now pass the value from the map to ans array
  for (let [key, value] of map) {
    ans[key - minDistance] = value;
  }
  return ans;
}
