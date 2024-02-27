///////// What it is?
// - DS with FIFO operation
// - Has 2 operations: 
//       - ENQUEUE & DEQUEUE
// - Operations occur at ONLY BOTH SIDES


///////// Use case / applications
// - uploading resources: first sent is uploading provided same file size
// - printing of file
// - background tasks


//////// Implementation
// 2 ways:
// - 1. using array
// - 2. using linkedlist DS


//// 1. Using Array
// - push() combined with shift();
// - unshift() combined with pop();
// - not efficient cus of RE-INDEXING when an item is added or removed from the start


//// 2. Using linkedlist-like DS
// 2 options:
// - 1. adding to the begining(unshift) and removing from end(pop)
//       - unshift() will be efficient but pop() will be very slow because it nodes traversal
// - 2. adding to the end(push) and removing from begining(shift)
//       - push() and shift() will BOTH be efficient
//       - thus: CHOOSING OPTION 2 for Implementation

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null; // equi to head in linkedlist
        this.last = null; // equi to tail in linkedlist
        this.length = 0; // equi to size in linkedlist
    }

    // adding to the end (push)
    enqueue(value){
        let newNode = new Node(value);
        if(!this.first || this.length === 0){
            this.first = newNode;
            this.last = newNode;
            this.length += 1;
            return this.length;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length += 1;
        return this.length;
    }

    // removing from the begining (shift)
    dequeue(){
        // zero-node present
        if(!this.first || this.length === 0){
            return null;
        }

        // only one-node present
        if(this.first === this.last || this.length === 1){
            let dequeuedNode = this.first;
            this.first = null;
            this.last = null; // already null 

            this.length -= 1;
            return dequeuedNode;
        }
        
        // multi-node present
        let removedNode = this.first; // 'var' dequeuedNode = this.first; in L#72 will be accessible here cus of function() scoped not block{} scoped
        let firstNextNode = this.first.next;
        this.first = firstNextNode;

        this.length -= 1;
        return removedNode;
    }
}

let myqu = new Queue();


//// Time Complexity
// insertion: O(1)
// removal: O(1)
// array is not like that cus of RE-INDEXING
