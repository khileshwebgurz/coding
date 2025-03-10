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

const diameter = BruteDiameter(root);
console.log(diameter)


// Using Top down approach. The idea is to recursively traverse the tree. For each node, find the height of left subtree and right subtree and compare the
//  diameter (sum of height of left subtree + height of right subtree) with the maximum diameter.
function BruteDiameter(root){

}