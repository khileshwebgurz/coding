// Given the root of the Binary Tree, return the length of its diameter. The Diameter of a Binary Tree is the longest distance between any two nodes of that tree.
//  This path may or may not pass through the root.

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

const diameter = diameterRecur(root);
console.log(diameter)

// A Brute force Approach
// Using Top down approach. The idea is to recursively traverse the tree. For each node, find the height of left subtree and right subtree and compare the
//  diameter (sum of height of left subtree + height of right subtree) with the maximum diameter.
// Our logic was simple that we find left height, right height then max of their sum and the diamter will be max of only single left height, single right height
// or the sum of left and right height. Time complexity with O(n2) and space complexity with O(h). h is the height of the tree.
function BruteDiameter(root){
    if(root === null) return 0;
    let Leftheight = height(root.left);
    let Rightheight = height(root.right);

    let leftDiameter = BruteDiameter(root.left);
    let rightDiameter = BruteDiameter(root.right);

    return Math.max(Leftheight+Rightheight,leftDiameter+rightDiameter)

}

function height(root){
    if(root === null) return 0;
    return 1+ Math.max(height(root.left),height(root.right));
}


// Now the Optimised Approach using Bottom up approach. It's time complexity is O(n) and space complexity is O(h)
function diameterRecur(root) {
    let diameter = 0;
    
    function dfs(node) {
        if (!node) return 0;
        
        let leftHeight = dfs(node.left);
        let rightHeight = dfs(node.right);
        
        diameter = Math.max(diameter, leftHeight + rightHeight);
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    dfs(root);
    return diameter;
}