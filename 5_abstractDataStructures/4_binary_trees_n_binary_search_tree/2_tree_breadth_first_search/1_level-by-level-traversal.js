

/*

QUESTION:
Given a binary tree, populate an array to represent its level-by-level traversal. 
You should populate the values of all nodes of each level from left to right in separate sub-arrays.

SOLUTION:
Since we need to traverse all nodes of each level before moving onto the next level, we can use the Breadth First Search (BFS) technique to solve this problem.
We can use a Queue to efficiently traverse in BFS fashion. Here are the steps of our algorithm:

1. Start by pushing the root node to the queue.
2. Keep iterating until the queue is empty.
3. In each iteration, first count the elements in the queue (let’s call it levelSize). We will have these many nodes in the current level.
4. Next, remove levelSize nodes from the queue and push their values in an array to represent/store the current level's numbers/values.
5. After removing each node from the queue, insert both of its children into the queue if exist.
6. If the queue is not empty, repeat from step 3 for the next level.

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
    
    levelOrderTraversal() {
        let result = [];
        let currentNode = this.root;    // traversing pointer

        if(currentNode == null){
            return result;
        }

        let queue = [];
        queue.push(currentNode);    // remember that a node is considered visited only when it passes through the queue

        // tree traversal
        // since the size of array is not known ahead of time, use while loop
        while(queue.length > 0){
            let levelSize = queue.length;   // take snapshot/copy of queue size otherwise when queue is updated, it will affect level loop and i can't get the exact number times i need to iterate at a particular level
            let nodesAtCurrentLevel = [];

            // level iteration
            // ...know that levelSize quarantees that i get the width of the current tree level cus, the queue deals with all the parent nodes(at say level 2) before these parent nodes remove their L&R leg nodes into the queue and jumping into/tackling children nodes(at level 3) 
            for(let i = 0; i < levelSize; i++){     // using queue.length will be dynamic, thus not getting you the static level size

                currentNode = queue.shift();
                nodesAtCurrentLevel.push(currentNode.value);

                if(currentNode.left != null){
                    queue.push(currentNode.left);
                }

                if(currentNode.right != null){
                    queue.push(currentNode.right)
                }
            }

            result.push(nodesAtCurrentLevel);
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
const res = bt.levelOrderTraversal();
console.log("Result: ", res);