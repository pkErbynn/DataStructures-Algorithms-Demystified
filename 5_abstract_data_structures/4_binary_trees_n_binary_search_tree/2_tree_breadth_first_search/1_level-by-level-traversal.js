

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
4. Next, remove levelSize nodes from the queue and push their value in an array to represent the current level.
5. After removing each node from the queue, insert both of its children into the queue.
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

    levelOrderTraversal_0(){
        let result = [];
        let currentNode = this.root; // traversing pointer

        if(currentNode == null){
            return result;
        }

        let queue = [];
        queue.push(currentNode);

        // since i don't know the size of array ahead of time, will use while loop
        while(queue.length >= 1){
            let levelNodesCollector = [];

            for(let i = 1; i <= queue.length; i++){
                currentNode = queue.shift();
                levelNodesCollector.push(currentNode.value);

                if(currentNode.left != null){
                    queue.push(currentNode.left);
                }
                if(currentNode.right != null){
                    queue.push(currentNode.right);
                }
            }

            result.push(levelNodesCollector);
        }

        return result;
    }
    
    levelOrderTraversal() {
        let result = [];
        let currentNode = this.root;

        if(!currentNode){
            return result;
        }

        let queue = [];
        queue.push(currentNode);

        // tree loop
        while(queue.length > 0){
            let levelSize = queue.length;   // take snapshot otherwise updated one will affect level loop
            let nodesInCurrentLevel = [];

            // level loop
            for(let i = 0; i < levelSize; i++){
                currentNode = queue.shift();
                nodesInCurrentLevel.push(currentNode.value);

                if(currentNode.left != null){
                    queue.push(currentNode.left);
                }

                if(currentNode.right != null){
                    queue.push(currentNode.right)
                }
            }

            result.push(nodesInCurrentLevel);
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