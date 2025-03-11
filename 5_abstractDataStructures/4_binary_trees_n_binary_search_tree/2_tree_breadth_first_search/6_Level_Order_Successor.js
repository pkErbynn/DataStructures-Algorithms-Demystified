/*
Problem Statement #

Given a binary tree and a node, find the level order successor of the given node in the tree. 
The level order successor is the node that appears right after the given node in the level order traversal.

Solution #

This problem follows the Binary Tree Level Order Traversal pattern. We can follow the same BFS approach. 
The only difference will be that we will not keep track of all the levels. Instead we will keep inserting child nodes to the queue. 
As soon as we find the given node, we will return the next node from the queue as the level order successor.
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

    getSuccessorNode(nodeKey){
        let currentNode = this.rootNode;
        if(currentNode == null){
            return null;
        }
        if(nodeKey == null){
            return null;
        }

        let queue = [];
        queue.push(currentNode);

        // whole tree loop
        while(queue.length >= 1){
            let levelLength = queue.length;

            // levelbase loop
            for (let index = 0; index < levelLength; index++) {
                const node = queue.shift();
                
                // if node is leaf
                if(node.value === nodeKey.value){
                    return queue.shift();
                }

                if(node.left != null){
                    queue.push(node.left);
                }

                if(node.right != null){
                    queue.push(node.right);
                }

            }
        }

        return depthLength;
    }
}


//         12
//     7       1
//  9       4   5
//        11 

let root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.right.right = new Node(5);
root.right.left = new Node(4);
root.left.left = new Node(9);
root.right.left.left = new Node(11);


let bt = new BinaryTree(root);
let nodeTarget =  new Node(4);
console.log("Result SucdessorNode: ", bt.getSuccessorNode(nodeTarget))



// ==========
/*

Time complexity: O(N), 
where ‘N’ is the total number of nodes in the tree. 
This is due to the fact that we traverse each node once.

Space complexity: O(N) which is required for the queue. 
Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), 
therefore we will need O(N) space to store them in the queue.

*/