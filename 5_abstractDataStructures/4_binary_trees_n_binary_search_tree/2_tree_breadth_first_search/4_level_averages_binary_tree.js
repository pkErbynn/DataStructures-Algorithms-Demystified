/*

Question:
Given a binary tree, populate an array to represent the averages of all of its levels.

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

    zigzap_tree_traversal(){
        let result = [];

        if(this.rootNode == null){
            return result;
        }

        let queue = [];
        let currentNodePointer = this.rootNode;

        queue.push(currentNodePointer); // node considered visited only when node passes throught the queue conduint 

        // loop for entire tree
        while(queue.length > 0)
        {
            let levelNodes = [];    // unused
            let levelSum = 0;

            // loop for each level
            let levelLength = queue.length;

            for(let i = 0; i < levelLength; i++){
                let node = queue.shift();
                levelSum = levelSum + node.value;

                if(node.left != null) {
                    queue.push(node.left);
                }

                if(node.right != null) {
                    queue.push(node.right);
                }
            }

            // sum of all the values of the nodes divided by the number of nodes available at the level
            let average = levelSum / levelLength;

            result.push(average);
        }

        return result;
    }
}

//         10
//     6       12
//  2    8  12   18


let root = new Node(10);
root.left = new Node(6);
root.right = new Node(12);
root.left.left = new Node(2);
root.left.right = new Node(8);
root.right.left = new Node(12);
root.right.right = new Node(18);

const bt = new BinaryTree(root);
const res = bt.zigzap_tree_traversal();
console.log("Result2: ", res)

// Time: O(n)
// where ‘N’ is the total number of nodes in the tree. 
// This is due to the fact that we traverse each node once.

// Space: O(N) 
// which is required for the queue. Since we can have a maximum of 
// nodes at any level (this could happen only at the lowest level), therefore we will need 
// O(N) space to store them in the queue.