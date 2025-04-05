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

        // IF @ EMPTY TREE

        // if not root node, set new node as root
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        // IF @ NON-EMPTY TREE, ie, HAS NODES

        // start with root node as the parent
        let currentNode = this.root; // for traversing and tracking

        while(currentNode != null){
            // duplicate node check
            if(value === currentNode.value) return null;

            // if incomming value is less than current parent node
            // then go left, for the insertion
            if(value < currentNode.value){
                // if current parent not is a leaf node, set its left node
                if(currentNode.left === null){
                    currentNode.left = newNode;
                    return this;
                }
                // otherwise, if currentNode is NOT a leaf node, then set the current left node as the new current parent node to traverse further downwards
                currentNode = currentNode.left;
            }
            
            // if incomming value is greater than current parent node
            // then look right, for the insertion
            if(value > currentNode.value) {
                // right leaf node
                if(currentNode.right === null){
                    currentNode.right = newNode;
                    return this;
                }
                // if not a leaf node, reset current parent node to the right downward child node
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

        while(currentNode != null){     // or while(currentNode)
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
        queue.push(currentNode);    // push to queue's back...initialize with initial root value...all nodes needs to pass through the queue pipeline, only when can be considered as visited

        // while there's something in the queue for processing...
        while(queue.length > 0){
            let removedHeadNode = queue.shift();    // take from queue's front

            visitedResult.push(removedHeadNode.value);  // explore/process element from queue...when element leaves the queue, it's considered visited (likewise, when leaves a stack, it's considered visited)

            // once removed and put to visitedResult, push parent's leg children nodes to the end of the queue...this allows all parents to come out visited before their chidlren provided they have one
            // this also allow the headNode no to vanish with it's legged nodes, knowing that they have some data
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
        let visitedResult = [];

        let currentNode = this.root;
        stack.push(currentNode);    // stack initialised with root...node cannot be considered visited only when it passes through the stack

        // while there's something in the stack for processing...
        while(stack.length > 0){    // => (stack.length) => while stack has an element...
            let removedNode = stack.pop();  // element considered visited/used when removed from Stack, similar to dsf with queue
            
            // process removed element n push to stack
            visitedResult.push(removedNode.value);

            ///////// PreOrder pattern: parentNode-leftNode-RightNode
            // once removed and put to visitedResult, push their leg children nodes to the stack
            // NB: pushed RIGHT NODE first, BEFORE LEFT because since it's LIFO, LEFT NODE will be POPPED OUT and processed FIRST BEFORE THE RIGHT
            // that's why the right is put on the stack first
            if(removedNode.right)
                stack.push(removedNode.right);
            if(removedNode.left)
                stack.push(removedNode.left);

            ///////// in-order: leftNode-parentNode-RightNode
            // let removedNode = stack.pop();
            //
            // if(removedNode.right)
            //     stack.push(removedNode.right);
            // visitedResult.push(removedNode.value);
            // if(removedNode.left)
            //     stack.push(removedNode.left);

            ///////// post-order: leftNode-RightNode-parentNode
            // let removedNode = stack.pop();
            // 
            // if(removedNode.right)
            //     stack.push(removedNode.right);
            // if(removedNode.left)
            //     stack.push(removedNode.left);
            // visitedResult.push(removedNode.value);

            // NB: 
        }
        return visitedResult;
    }

    // using recursion for dfs
    dfsPreOrder_recur(currentNode = this.root){
        let result = [];  // need to be set outside the function otherwise will be reset to [] everytime 
        
        let traverse = function(currentNode){
            // base case
            if(currentNode == null) return;

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
            // if(currentNode == null) return;
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
console.log(bst.bfs());

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