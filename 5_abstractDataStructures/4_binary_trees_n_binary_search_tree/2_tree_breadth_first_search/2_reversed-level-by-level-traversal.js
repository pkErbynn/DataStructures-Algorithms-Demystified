class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(rootNode = null){
        this.root = rootNode;
    }

    reversedLevelOrderTraversal(){
        let reversedNodeResult = [];

        let currentNode = this.root;
        if(currentNode == null){
            return reversedNodeResult;
        }

        let queue = [];
        queue.push(currentNode);

        while(queue.length >= 1){

            let levelByLevelNodesCollector = [];
            let levelSize = queue.length; // keep copy of queue lenght otherwise, using the original lenght will be updated when an item is pushed on the queue
            
            for(let i = 0; i < levelSize; i++){
                currentNode = queue.shift();
                levelByLevelNodesCollector.push(currentNode.value);
    
                if(currentNode.left != null){
                    queue.push(currentNode.left);
                }
        
                if(currentNode.right != null){
                    queue.push(currentNode.right);
                }
            }

            // pushing to the array back will maintain the order BUT adding through the front reverses the order as expected
            reversedNodeResult.unshift(levelByLevelNodesCollector);
        }

        return reversedNodeResult;
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
const res = bt.reversedLevelOrderTraversal();
console.log("Result: ", res);