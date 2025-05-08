// Given a binary tree, Find the Lowest Common Ancestor for two given Nodes (x,y).
// Lowest Common Ancestor(LCA): The lowest common ancestor is defined between two nodes x and y as the lowest node in T that has both x and y as descendants
//  (where we allow a node to be a descendant of itself.
// Input: x = 4 , y = 5 && Output: 2 

class Node{
    constructor(data){
        this.data = data
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

if (checkIfPresent(root, 4) && checkIfPresent(root, 5)){
    console.log(commonAncestor(root,4,5));
}
// Else return null
return null;

// this is used to check whether any of n1 and n2 are not present in it , if that's the case then just return null.
function checkIfPresent(root,n){
    if(root === null) return false;
    if (root.data === n || checkIfPresent(root.left, n) || 
        checkIfPresent(root.right, n))
        return true;

    // Else return false
    return false;
}

// my optimal approach using recursion and backtracking. We starting traversing the tree and try to check both the n1 and n2 recursively.
// Here the time complexity is O(n) and space is O(h) which is the height of binary tree.
// Now we also need to check the edge cases like what if n1 or n2 is not present then ideally it should return null as we have to check both the nodes ancestors.
function commonAncestor(root,n1,n2){
    if(root === null) return null;

    if(root.data === n1 || root.data === n2 ) return root;
    let leftData = commonAncestor(root.left,n1,n2)
    let rightData = commonAncestor(root.right,n1,n2);


    // This condition only executes when both leftLca and rightLca are NOT null. When we meet 4 and 5 this will become not null hence we return 2 as ancestor.
    // If both n1 and n2 are in different branches then return the root 1.
    if(leftData && rightData){
        return root;
    }
    return leftData ? leftData :rightData
}
