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

    hasPathThatSumUpToTarget_iterative(targetSum){

        if(this.root == null || targetSum < 1){
            return false;
        }

        let currentNode = this.root;

        
        // 1) We push an object onto the stack with the root node and an initial sum of 0.

        // We'll use a stack to perform a Depth-First Search (DFS).
        // Each stack entry will hold:
        //   1) the current node
        //   2) the sum of all ancestors’ values leading to this node.
        let stack = [];
        stack.push({node: currentNode, currentSum: 0}); // store node and its current past/ancestral sum

        while(stack.length > 0){

            // 2) We pop an element from the stack...this gives us a node and the sum of the path leading up to that node.
            // NB: currentSum is the current ancestral sum, that needs to be combined with a node after it's visited/popped
            let {node, currentSum} = stack.pop();   // each node comes with their own sum value 

            // 3) We update currentSum on the current node by adding the node’s value.
            // ...NB: updated operation on the node is done after it is pipped and popped out of stack, ie. visited
            // ...each node comes with their own prev ancestral sum value and it's updated with their node value....so the sum is not global to other nodes
            currentSum += node.value;

            // 4) If the current node is a leaf (i.e., no left child, no right child) and currentSum matches the targetSum, we return true.
            if(node.left == null & node.right == null & currentSum == targetSum){
                return true;
            }

            // 5) Otherwise, if this node has children, we push them onto the stack, 
            // ...keeping track of the updated ancestral sum so far.
            // ...sum value attached to the children nodes on the STACK, and it only becomes unique to that node until node is visited(popped from stack) and updated

            // ...left node last so that it will come out first when poping is done
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
//     7       2
//  9       4    5
//        11 

let root = new Node(12);
root.left = new Node(7);
root.right = new Node(2);
root.right.right = new Node(5);
root.right.left = new Node(4);
root.left.left = new Node(9);
root.right.left.left = new Node(11);


let bt = new BinaryTree(root);
let sumTarget =  29;
console.log("Result: ", bt.hasPathThatSumUpToTarget_iterative(sumTarget))



// =================== With Path =================

  
class BinaryTree2 {
    constructor(root = null) {
      this.root = root;
    }
  
    hasPathThatSumUpToTargetWithPath_iterative(targetSum) {
        if (this.root == null || targetSum < 1) {
            return { found: false, path: [] };
        }
    
        // Each stack entry will hold:
        //  - node: the current node
        //  - currentSum: sum of values from the root to this node
        //  - path: the list of values (root -> ... -> this node)
        let stack = [];
        stack.push({ node: this.root, currentSum: 0, path: [] });
    
        while (stack.length > 0) {
            let { node, currentSum, path } = stack.pop();
    
            // Prepare updated sums/paths
            let newSum = currentSum + node.value;
            let newPath = [...path, node.value]; // create a new path array with this node's value added
    
            // Check if leaf and if sums match
            if (node.left === null && node.right === null && newSum === targetSum) {
            // Found a path: return immediately
            return {
                found: true,
                path: newPath
            };
            }
    
            // Push children onto stack
            if (node.right) {
                stack.push({
                    node: node.right,
                    currentSum: newSum,
                    path: newPath
                });
            }
            if (node.left) {
                stack.push({
                    node: node.left,
                    currentSum: newSum,
                    path: newPath
                });
            }
        }
    
        // If we exhaust the stack without finding a path, return false + empty path
        return { found: false, path: [] };
    }
}
  
// ---------------------
// Example usage and dry run
// ---------------------

// Constructing the tree:
//
//            12
//          /    \
//        7       2
//      /       /   \
//    9       4      5
//           /
//         11
//
let root2 = new Node(12);
root2.left = new Node(7);
root2.right = new Node(2);
root2.right.right = new Node(5);
root2.right.left = new Node(4);
root2.left.left = new Node(9);
root2.right.left.left = new Node(11);

let bt2 = new BinaryTree2(root2);
let sumTarget2 = 29;

let result = bt2.hasPathThatSumUpToTargetWithPath_iterative(sumTarget2);
console.log("ResultWithPath:", result);
// Example output: 
// Result: { found: true, path: [ 12, 2, 4, 11 ] }


/* 

=========

Time Complexity
- O(N), where N is the number of nodes in the tree.
- Because in the worst case, each node is visited exactly once. For each node, we perform constant-time operations (pushing/popping from the stack, simple arithmetic). 
- Hence, the total work is linear in the number of nodes.

Space Complexity
- O(N)
- Because in the worst case (e.g., a skewed tree), the stack can hold all nodes along a path from the root to the deepest leaf. 
- Even in a balanced tree, the stack size can be proportional to the tree’s height (and thus still O(N) in the worst case skewed scenario).

*/