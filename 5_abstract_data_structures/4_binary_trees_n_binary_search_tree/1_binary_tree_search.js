// Node has a value and nullable left n right nodes by default
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Tree only has a nullable root by default instantiation
class BST {
    constructor(){
        this.root = null;
    }

    insert(value){ // **
        let newNode = new Node(value);

        // if not root node, set new node as root
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        // else
        let currentNode = this.root; // for traversing and tracking

        while(currentNode != null){
            // duplicate node check
            if(value === currentNode.value) return null;

            // if incomming value is less that current parent node
            // then look left, for the insertion
            if(value < currentNode.value){
                // leaf node
                if(currentNode.left === null){
                    currentNode.left = newNode;
                    return this;
                }

                // reset root/parent node to traverse further downwards
                currentNode = currentNode.left;
            }
            
            // if incomming value is greater that current parent node
            // then look right, for the insertion
            if(value > currentNode.value) {
                // right leaf node
                if(currentNode.right === null){
                    currentNode.right = newNode;
                    return this;
                }
                // reset current node to next right downward child node
                currentNode = currentNode.right;
            }
        }
     
    }

    //  insert_recursive(value){
    //     let newNode = new Node(value);

    //     // if not root node, set new node as root
    //     if(!this.root) {
    //         this.root = newNode;
    //         return this;
    //     }

    //     // else
    //     let currentNode = this.root; // for traversing and tracking

    //     let insert_node = function(node){
    //         // base case
    //         if(!node){
    //             return newNode;
    //         }
    //         if(value < node.value){
    //             node.left = insert_node(node.left); 
    //         }
    //         if(value > node.value) {
    //             node.right = insert_node(node.right); 
    //         }
    //         if(value === node.value) {
    //             return null;
    //         }
    //         return node;  // nb: return each node
    //     }
        
    //    insert_node(currentNode);
    // }


    // search a node
    search(value){ // **
        if(!this.root || !value) return null;

        let currentNode = this.root;

        while(currentNode){
            if(value === currentNode.value){
                return currentNode;
            }
            // left
            if(value < currentNode.value){
                currentNode = currentNode.left; // re-assign sub-node as new current parent node
            }
            // right
            else if(value > currentNode.value){
                currentNode = currentNode.right;
            }
        }

        // traversal complete
        return "NOT FOUND";
    }

    // value => search value input
    // troot => new root value re-assignment
    search_recursive(value, troot=this.root){ // **
        // if(!this.root || !value) return null;

        let currentNode = troot;
        
        // base case: currentNode ==null
        if(!currentNode) return false;

        if(value === currentNode.value){
            return currentNode;
        }
        if(value < currentNode.value){
            return this.search_recursive(value, currentNode.left);  // cus it should return a value that's why it's returning value to the caller
        } 
        else if(value > currentNode.value){
            return this.search_recursive(value, currentNode.right);
        }
        
    }

    // breath-first search => uses Queue
    bfs(){
        let queue = [];
        let visitedResult = [];

        let currentNode = this.root;
        queue.push(currentNode);

        // while there's something in the queue for processing...
        while(queue.length > 0){
            let removedHeadNode = queue.shift();
            visitedResult.push(removedHeadNode.value);

            // once removed and put to visitedResult, push their leg children nodes to the queue
            if(removedHeadNode.left) 
                queue.push(removedHeadNode.left);
            if(removedHeadNode.right) 
                queue.push(removedHeadNode.right);

        }
        return visitedResult;
    }

    // Watch Video: 
    // - https://www.youtube.com/watch?v=fPz40W9mfCg
    // - https://www.youtube.com/watch?v=Bfqd8BsPVuw&list=LL&index=4&t=319s

    // depth-first search => uses Stack
    dfsPreOrder(){
        let stack = [];
        let visitedReult = [];

        let currentNode = this.root;
        stack.push(currentNode);

        // while there's something in the stack for processing...
        while(stack.length){    // while stack has an element...
            let removedNode = stack.pop();
            visitedReult.push(removedNode.value);

            // once removed and put to visitedReult, push their leg children nodes to the stack
            // NB: took right first, left second because since it's LIFO, left node will be processed before the right, 
            // that's why the right is put on the stack first
            if(removedNode.right)
                stack.push(removedNode.right);
            if(removedNode.left)
                stack.push(removedNode.left);

            ///////// in-order
            // if(removedNode.right)
            //     stack.push(removedNode.right);
            // let removedNode = stack.pop();
            // visitedReult.push(removedNode.value);
            // if(removedNode.left)
            //     stack.push(removedNode.left);

            ///////// post-order
            // if(removedNode.right)
            //     stack.push(removedNode.right);
            // if(removedNode.left)
            //     stack.push(removedNode.left);
            // let removedNode = stack.pop();
            // visitedReult.push(removedNode.value);

            // NB: 
        }
        return visitedReult;
    }

    // using recursion for dfs
    dfsPreOrder_recur(currentNode = this.root){
        let result = [];  // need to be set outside the function otherwise will be reset to [] everytime 
        
        let traverse = function(currentNode){
            // base case
            // if(currentNode == null) return;
            if(!currentNode) return;

            // common base-case mistake
            // if(!currentNode.left && !currentNode.right) return; // this yeilds lots of prob cus you have to do extra checks like if only left/right side is available, thus don't do the check on children
            
            result.push(currentNode.value);
            traverse(currentNode.left);
            traverse(currentNode.right);
        }

        traverse(currentNode); // root arg by default
        
        return result;

        // nb: nested function needed in order to keep result bucket outside
    }

    dfsPostOrder_recur(currentNode = this.root){
        let result = [];  // need to be set outside the function otherwise will be reset to [] everytime 
        
        let traverse = function(currentNode){
            // base case
            if(!currentNode) return;
            
            traverse(currentNode.left);
            traverse(currentNode.right);
            result.push(currentNode.value); // post push: traverse both legs before adding...Order: left, right, self
        }

        traverse(currentNode); // root arg by default
        
        return result;

        // nb: nested function needed in order to keep result bucket outside
    }

    dfsInOrder_recur(currentNode = this.root){
        let result = [];  // need to be set outside the function otherwise will be reset to [] everytime 
        
        let traverse = function(currentNode){
            // base case
            if(!currentNode) return;
            

            traverse(currentNode.left);
            result.push(currentNode.value); // in-oder push: left, self, right
            traverse(currentNode.right);
        }

        traverse(currentNode); // root arg by default
        
        return result;

        // nb: nested function needed in order to keep result bucket outside
    }
}



let bst = new BST();

//         10
//     5       15
//  2    8  12   18

console.log(bst.insert(10));
console.log(bst.insert(5));
console.log(bst.insert(15));
console.log(bst.insert(2));
console.log(bst.insert(8));
console.log(bst.insert(12));
console.log(bst.insert(18));
// console.log(bst);

// console.log(bst.insert_recursive(10));
// console.log(bst.insert_recursive(5));
// console.log(bst.insert_recursive(15));
// console.log(bst.insert_recursive(2));
// console.log(bst.insert_recursive(8));
// console.log(bst.insert_recursive(12));
// console.log(bst.insert_recursive(18));
// console.log(bst);

// console.log(bst.find(2));

console.log("Ans: ");
console.log(bst.bfs2());

/*
=== Time Complexity ====
Insertion: O(log n)
Search/Find: O(log n)...or O(height of tree)

nb: for worse case scenario, where tree is one-sided (like linkedList) = O(n)
to fix it: take the mid as root, and break into binary

 - eg:
            10
        -      15
     -    -  -   18
    
    or
    
            10
        5       -
     2    -  -    -
*/