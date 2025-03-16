/*
/////// Prioriy Queue

- born from binary heap
- a binary tree based abstract data structure
- where each element is associated with priority
- element with high priority are served before element with low priority
- normally, low priority tag number means high priority
- compares element based on priority only, no value

- ** most importance element is the first one in the array
    - the order of the rest of the elements is not realy that important

///////// Implementation

- can be implemented using a 
    - list or
    - binary heap

- using list
    - it will be slow
    - cus we have to iterate through all elements in the list everytime to find the element priority tag as the element with hightest priority can be at the end of the list
    - this is a naive approach

- using heap
    - better and efficient approach
    - provides order as to what element to searve next
    - instead using pure values as node in heap, a class node will be used this time around **
        - array int element was used to illustrate heap concept so that can be understood and applied to PriorityQueue
        - class node will be stored in the array this time
    - Min Binary Heap used cus **
        - lower numbers mean high priority

///// Confussion
People confuse Heap with Prioriy Queue. KNOW THAT:
    - Prioriy Queue is an abstract data structure which can be implemented in many ways
    - Binary Heap is an efficient way of implementing the Prioriy Queue concept

*/

class Node {
    constructor(value, priority){
        this.value = value; // can be a string type
        this.priority = priority;
    }
    // nb: uses class node this time around
}

class PriorityQueue {
    constructor() {
        this.values = [];   // uses object(string + integer priority) instead of primitives(only integer priority)
    }

    // insert at "array end" or "tree bottom" -> bubble up to correct position
    // thus, calc its parent
    // this time around, low priority number has highest priority: L#67
    // similar to insert operation in binary heap
    enqueueElement(value, priority){
        let newNode = new Node(value, priority);
        
        this.values.push(newNode);

        let newChildNodeIndex = this.values.length - 1;
        let newChildNode = this.values[newChildNodeIndex];
        
        let parentNodeIndex = Math.floor((newChildNodeIndex - 1) / 2); // child, find parent...moving backwards, thus (n-1)/2
        let parentNode = this.values[parentNodeIndex];

        // element in array, no parent for such element
        if(!parentNode) return this.values;

        // if parent exists
        while(parentNode != null){  // can be (parentNodeIndex >/= 0) but using the object is much safer
            if(newChildNode.priority < parentNode.priority){  // small priority means higher priority, </> changes for max/min heap
                [this.values[newChildNodeIndex], this.values[parentNodeIndex]] = 
                    [this.values[parentNodeIndex], this.values[newChildNodeIndex]];
    
                // re-assign old parent becomes new child, new parent moved up
                newChildNodeIndex = parentNodeIndex;    // a

                parentNodeIndex = Math.floor((newChildNodeIndex - 1) / 2);
                parentNode = this.values[parentNodeIndex];
            } else{
                break;
            }
        }
        return this.values;
    }

    // remove at array front / tree top -> bubble down
    // thus, cal children nodes
    // similar as extractMax() in heap
    dequeueElement(){   // **** (better if parent, child calculations are done within loop, cus it reculate dynamically if an index changes)
        let removedNode = this.values[0];
        this.values[0] = this.values.pop();

        let rootNodeIndex = 0;

        // root index being in range as it will be moving forward to the edge of the array length
        while(rootNodeIndex < this.values.length){

            let rootNode = this.values[rootNodeIndex]; // recalculate for each iteration
            let leftChildIndex = 2 * rootNodeIndex + 1;
            let leftChildNode = this.values[leftChildIndex];
            let rightChildIndex = 2 * rootNodeIndex + 2;
            let rightChildNode = this.values[rightChildIndex];

            // Check if left and right child indices are within bounds
            if (leftChildIndex >= this.values.length || rightChildIndex >= this.values.length) {
                break; // No more complete children to compare, exit loop
            }

            // Determine the child with maximum value (ie, min priority)
            let maxChildPriority = Math.min(leftChildNode.priority, rightChildNode.priority);
            let maxChildPriorityIndex = maxChildPriority == leftChildNode.priority ? 
                leftChildIndex : rightChildIndex;
            let maxChildNode = this.values[maxChildPriorityIndex];

            if(rootNode.priority > maxChildNode.priority) { // => small priority value means high priority, therefore swap
                [ this.values[rootNodeIndex], this.values[maxChildPriorityIndex] ] = 
                [ this.values[maxChildPriorityIndex], this.values[rootNodeIndex] ];

                rootNodeIndex = maxChildPriorityIndex;  // only parent index changes then the rest are done dynamically since calc falls within the loop
            }
            else {
                break;
            }
        }

        return removedNode;
    }

    // ====== Alternative ======
    dequeueElemenent2(){
        if(this.values.length === 0) return null;
        // swap first n last node
        // before removing last node(first node)...if removed at start, with shift, there will be reindexing which is expensive
        let rootNodeIndex = 0;
        let lastNodeIndex = this.values.length-1;
        [this.values[rootNodeIndex], this.values[lastNodeIndex]] = 
            [this.values[lastNodeIndex], this.values[rootNodeIndex]];

        // pop last node
        let removedNode = this.values.pop();

        // calc its children
        let rootParentNode = this.values[rootNodeIndex];

        let leftChildNodeIndex = Math.floor((2*rootNodeIndex)+1);
        let leftChildNode = this.values[leftChildNodeIndex];
        let rightChildNodeIndex = Math.floor((2*rootNodeIndex)+2);
        let rightChildNode = this.values[rightChildNodeIndex];

        // while there are children nodes, 
            // n new root node is less that one of its children, bubble down to the correct position
        // conditioning leftChildNode because if there's any child node, the left node will be created first
        while(leftChildNode){
             // find highest priority child node to compare w/ parent node
            let smallestButHighPriority, 
                smallestButHighPriorityNodeIndex, 
                smallestButHighPriorityNode;
            if(!rightChildNode ){  // means one-left child node only, since new node are queued to left first
                smallestButHighPriority = leftChildNode.priority;
                smallestButHighPriorityNodeIndex = leftChildNodeIndex;
                smallestButHighPriorityNode = this.values[smallestButHighPriorityNodeIndex];
            } 
            else {
            // else if(rightChildNodeIndex < this.values.length) {
                smallestButHighPriority = Math.min(leftChildNode.priority, rightChildNode.priority);
                smallestButHighPriorityNodeIndex = smallestButHighPriority === leftChildNode.priority ? 
                    leftChildNodeIndex : rightChildNodeIndex; // instead of using indexOf();
                smallestButHighPriorityNode = this.values[smallestButHighPriorityNodeIndex];
            }
            
            // if child node has min/higher priority than parent, swap
            if(smallestButHighPriorityNode.priority < rootParentNode.priority){
                [this.values[rootNodeIndex], this.values[smallestButHighPriorityNodeIndex]] = 
                    [this.values[smallestButHighPriorityNodeIndex], this.values[rootNodeIndex]];

                // re-assign/reset parent n childrent
                rootNodeIndex = smallestButHighPriorityNodeIndex;
                leftChildNodeIndex = Math.floor((2*rootNodeIndex)+1);
                leftChildNode = this.values[leftChildNodeIndex];
                rightChildNodeIndex = Math.floor((2*rootNodeIndex)+2);
                rightChildNode = this.values[rightChildNodeIndex];

                rootParentNode = this.values[rootNodeIndex];
                if(!rootParentNode) break;
                

            } else {
                break;
            }
            
        }
       
        // done: return popped node
        // console.log(this.values);
        return removedNode;
        
    }
    
    // this is incomplete
    dequeue_beforeWhileLoop(){   // means, performs dequeue operation only once
        // swap first n last node
        // before removing last node(first node)...if removed at start, with shift, there will be reindexing which is expensive
        let rootNodeIndex = 0;
        let lastNodeIndex = this.values.length-1;
        [this.values[rootNodeIndex], this.values[lastNodeIndex]] = 
            [this.values[lastNodeIndex], this.values[rootNodeIndex]];

        // pop last node
        let removedNode = this.values.pop();

        // calc its children
        let rootParentNode = this.values[rootNodeIndex];
        
        let leftChildNodeIndex = Math.floor((2*rootNodeIndex)+1);
        let leftChildNode = this.values[leftChildNodeIndex];
        let rightChildNodeIndex = Math.floor((2*rootNodeIndex)+2);
        let rightChildNode = this.values[rightChildNodeIndex];

        // with one-node list, that can't find left n right nodes, return immediately
        if(!leftChildNode) return null;

         // find highest priority child node to compare w/ parent node
        let smallestButHighPriority, 
            smallestButHighPriorityNodeIndex, 
            smallestButHighPriorityNode;
        if(!this.rightChildNode){  // means one-left child node only, since new node are queued to left first
            smallestButHighPriority = leftChildNode.priority;
            smallestButHighPriorityNodeIndex = leftChildNodeIndex;
            smallestButHighPriorityNode = this.values[smallestButHighPriorityNodeIndex];
        } else {
            smallestButHighPriority = Math.min(leftChildNode.priority, rightChildNode.priority);
            smallestButHighPriorityNodeIndex = smallestButHighPriority === leftChildNode.priority ? 
                leftChildNodeIndex : rightChildNodeIndex; // instead of using indexOf();
            smallestButHighPriorityNode = this.values[smallestButHighPriorityNodeIndex];
        }
        
        // if child node has min/higher priority than parent, swap
        if(smallestButHighPriorityNode.priority < rootParentNode.priority){
            [this.values[rootNodeIndex], this.values[smallestButHighPriorityNodeIndex]] = 
                [this.values[smallestButHighPriorityNodeIndex], this.values[rootNodeIndex]];
        }
            
        // done: return popped node
        console.log(this.values);
        return removedNode;
    }
}


//     5
//   12  15
// 20  13
// [5, 12, 15, 20, 13]

let pq = new PriorityQueue();
pq.enqueueElement("eat breakfask", 7);
pq.enqueueElement("play game", 5);
pq.enqueueElement("leave for work", 4);
pq.enqueueElement("brush teeth", 3);
pq.enqueueElement("out for date", 10);
pq.enqueueElement("hit the gym", 8);
pq.enqueueElement("hit the gym", 2);
pq.enqueueElement("hit the gym", 9);

// console.log(pq.dequeueElement());
// console.log(pq.dequeueElement());
console.log(pq.dequeueElemenent2())
console.log(pq.dequeueElemenent2())
console.log(pq.dequeueElemenent2())


/* Time Complexity 
- Binary Heap operation (applied on priority queue), is best know for INSERTION (ENQUEUE) and DELETION (DEQUEUE)
    - It core purpose of 'Heap' is to always process and put the max/min element on top △, readily for:
        - access/delete/dequeue use
        - ease order by placing incoming element before/after the heap
- Binary Heap's time Complexity (same as priority queue), will have same time Complexity
- Insertion/Enqueue
    - Worse case: log n 
    - because inserting element at right positing in worse-case, during bubble up after added to the end, each level of tree will be compared once
    - so, at root: 2^n = 1 ele, nextLevel: 2^n = 2 ele, nextLevel: 2^n = 4 ele, nextLevel: 2^n = 8 ele, nextLevel: 2^n = 16 ele, nextLevel: 2^n = 32 ele
    - eg: 2^n = 4 
            => 2^n = 2^2 
            => log2 2^n = log2 2^2 
            => n log2 2 = 2 log2 2 
            => n = 2 
            => time (number of comparisons) => log2 N(number of elements) => log N
- Deletion/Dequeue
    - worse case: log n 
    - because after dequeue right away from root, a new node element is being processed during the bubble down, and for worse case, each tree level is visited
    - same prove as Insertion prove
- Vs Binary Search Tree
    - Worse case of BST could be o(n), when tree becomes one-legged / one-sided
    - eg:
            10
        -      15
     -    -  -   18
    
    or
    
            10
        5       -
     2    -  -    -
    - However, for BinaryHeap/PriorityQueues one-legged tree CAN'T be formed
        - because left node as inserted first before right, making each level to be fully filled before moving on to the next level
        - thus, no possibility for a one-legged tree to be generated
*/