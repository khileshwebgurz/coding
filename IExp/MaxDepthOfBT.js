// Given a binary tree, the task is to find the maximum depth of the tree. The maximum depth or height of the tree is the number of edges in the tree from the
//  root to the deepest node.

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.right = new Node(4)
root.right.left = new Node(5)
root.right.right = new Node(6)
root.right.right.right = new Node(7)

let result = OptimisedSolution(root);
console.log(result);


// this is the recursive approach or DFS approach of finding the max depth of the binary tree. This will have O(n) time complexity and O(h) space complexity.
function maxDepth(root){
    if(root === null) return -1;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return 1+ Math.max(left,right);
}

// now the optimal approach is used queue(BFS) or level order traversal. Iterating level by level. Use a queue to traverse level by level. Start with the root node 
// and a depth counter set to 0. Process all nodes in the current level, then move to the next level. Increment depth each time we finish processing a level.
// Continue until all levels are processed. For this time complexity will be O(n) and space complexity also O(n)

function OptimisedSolution(root){
    if(!root) return 0;
    let queue = [root]
    let depth =0;
    while(queue.length > 0){
        let n = queue.length;
        for(let i =0;i<n;i++){
            let newroot = queue.shift();
            if(newroot.left)queue.push(newroot.left);
            if(newroot.right)queue.push(newroot.right);
            
        }
        depth++;
    }
    return depth-1;
}