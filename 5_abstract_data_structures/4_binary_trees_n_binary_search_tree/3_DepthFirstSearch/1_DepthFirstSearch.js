/*

Problem:

Given a binary tree and a number ‘S’, 
find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
*/


class Node {

    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}



class BinaryTree {

    constructor(root = null){
        this.root = root;
    }

    hasPath_iterative(targetSum){
        if(this.root == null){
            return false;
        }

        let currentNode = this.root;

        let stack = [];
        stack.push({node: currentNode, currentSum: 0}); // store node and its current sum

        while(stack.length >= 1){
            let {node, currentSum} = stack.pop();
            currentSum += node.value;

            // if leaf node and sum equal target
            if(node.left == null & node.right == null & currentSum == targetSum){
                return true;
            }

            if(node.right){
                stack.push({node: node.right, currentSum: currentSum})
            }

            if(node.left){
                stack.push({node: node.left, currentSum: currentSum})
            }
        }

        return false;
    }
}


//         12
//     7       1
//  9       4    5
//        11 

let root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.right.right = new Node(5);
root.right.left = new Node(4);
root.left.left = new Node(9);
root.right.left.left = new Node(11);


let bt = new BinaryTree(root);
let sumTarget =  28;
console.log("Result: ", bt.hasPath_iterative(sumTarget))

