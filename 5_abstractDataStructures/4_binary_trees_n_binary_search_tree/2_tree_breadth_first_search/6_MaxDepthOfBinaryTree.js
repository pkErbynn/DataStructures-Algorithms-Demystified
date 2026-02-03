/*

Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example:
    3
9       20
     15    7
Input: root = [3, 9, 20, null, null, 15, 7]
Output: 3


Brainstorm Analysis
- Max depth in tree = number of levels in the tree in BFS

*/


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(rootNode = null) {
        this.rootNode = rootNode;
    }

    getMaxDepth(){
        let currentNode = this.rootNode;
        if(currentNode == null){
            return 0; // means, no depth
        }

        // if only one node, ie. only the root
        if(currentNode.left == null && currentNode.right == null){
            return 1; // depth 1
        }

        let queue = [];
        queue.push(currentNode);

        let depthLength = 0;    // current tree height

        // whole tree loop
        while(queue.length > 0){
            
            let levelLength = queue.length;
            depthLength = depthLength + 1;  // increase level count starting w/ root

            // level-based loop
            for (let index = 0; index < levelLength; index++) {
                const node = queue.shift();

                if(node.left != null){
                    queue.push(node.left);
                }

                if(node.right != null){
                    queue.push(node.right);
                }
            }

            // or level counter can also be done here, after traversing the parent level nodes in the queue
        }

        return depthLength;
    }
}


//     3
// 9       20
//      15    7

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

const bt = new BinaryTree(root);
console.log("Max Depth: ", bt.getMaxDepth())

//     3
// 9       20
//      15    7
//   50
root.right.left.left = new Node(50);
console.log("Max Depth2: ", bt.getMaxDepth())
