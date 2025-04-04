/*

Problem Statement #

Given a binary tree, populate an array to represent its zigzag level order traversal. 
You should populate the values of all nodes of the first level from left to right, 
then right to left for the next level and keep alternating in the same manner for the following levels.


Solution #

This problem follows the Binary Tree Level Order Traversal pattern. We can follow the same BFS approach. 
The only additional step we have to keep in mind is to alternate the level order traversal, 
which means that for every other level, we will traverse similar to Reverse Level Order Traversal question.

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    zigzap_tree_traversal(){
        let result = [];

        let currentNode = this.root;

        if(currentNode == null){
            return result;
        }

        let depthCounter = 0;  // tracks what order it should take...left to right(for odd levels) or right to left(for even levels)

        let queue = [];
        queue.push(currentNode);

        while(queue.length >= 1){
            let levelNodesCollector = [];
            let queueLenghtSnapshot = queue.length;

            for(let i = 0; i < queueLenghtSnapshot; i++) {
                let node = queue.shift();
                
                // if even, then normal order
                if(depthCounter % 2 == 0){
                    levelNodesCollector.push(node);
                }
                // if odd, then reverse order
                else{
                    levelNodesCollector.unshift(node)
                }

                if(node.left != null){
                    queue.push(node.left);
                }
                if(node.right != null){
                    queue.push(node.right);
                }
            }

            result.push(levelNodesCollector);
            depthCounter++;
        }

        return result;
    }
}


//         10
//     5       15
//  2    8  12   18



let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(8);
root.right.left = new Node(12);
root.right.right = new Node(18);

const bt = new BinaryTree(root);
const res = bt.zigzap_tree_traversal();
console.log("Result2: ", res);