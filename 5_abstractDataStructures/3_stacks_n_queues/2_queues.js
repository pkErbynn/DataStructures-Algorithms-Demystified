///////// What it is?
// - DS with FIFO operation
// - Has 2 operations: 
//       - ENQUEUE & DEQUEUE
// - Operations occur at ONLY BOTH SIDES


///////// Use case / applications
// - uploading resources: first sent is uploading provided same file size
// - printing of file
// - background tasks **


//////// Implementation
// 2 ways:
// - 1. using array
// - 2. using linkedlist DS


////========= 1. Using Array
// - push() combined with shift();
// - unshift() combined with pop();
// - not efficient cus of RE-INDEXING when an item is added or removed from the start ***
// - insertion = o(1)
// - deletion = o(n)

// Here, items are added from the right side but removed from the left side

class CustomQueueArr {
    data;           // array
    pointer = -1;   // can also start from index 0 as well...pointer is an END pointer tracking last element position
    DEFAULTSIZE = 5;

    constructor(size = null) {
        const queueSize = size || this.DEFAULTSIZE;
        this.data = new Array(queueSize);
    }

    insert(item){   // push to the end
        if(this.isFull()){
            console.log("Queue is false");
            return false;
        }

        this.pointer++
        this.data[this.pointer] = item;     // or combined: this.data[++this.pointer]...means, increase and use NOW, insead of increase and use LATER

        return true;
    }

    remove(){   // del from start/front + shift...like hospital waiting bench queue
        if(this.isEmpty()){
            console.log("Can't remove from empty queue");
            return null;
        }

        let removedItem = this.data[0];

        // shift items to the left
        for (let index = 1; index < this.pointer; index++) {
            this.data[index - 1] = this.data[index]
        }

        this.pointer--;

        return removedItem;
    }

    startItem(){    // front item
        console.log(this.data[0] || null);
        return this.data[0] || null;
    }

    isFull(){
        return this.pointer === this.data.length - 1;
    }

    isEmpty(){
        return this.pointer === -1;
    }
    
    display(){
        console.log(this.data);
    }
}


let customQueueArr = new CustomQueueArr();
customQueueArr.insert(10)
customQueueArr.insert(20)
customQueueArr.insert(30)
customQueueArr.display();
customQueueArr.remove();
customQueueArr.display();
customQueueArr.startItem()


//// =========== 2. Using linkedlist-like DS
/*

2 options:
- 1. adding to the begining(unshift) and removing from end(pop)
      - unshift() will be efficient but pop() will be very slow because it nodes traversal
- 2. adding to the end(push) and removing from begining(shift)
      - push() and shift() will BOTH be efficient
      - thus: CHOOSING OPTION 2 for Implementation

Image:
    10(First) → 20 → 10 → 30(last) → null

    - Elements are added at the last/rare
    - Elements are removed at the first/front 
    - NB: direction of arrows are in opposite direction of how elements are added

*/

class QueueNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class CustomQueueLL {
    constructor(){
        this.first = null; // equi to head in linkedlist
        this.last = null; // equi to tail in linkedlist
        this.length = 0; // equi to size in linkedlist
    }

    // adding to the end (push)
    enqueue(value){
        let newNode = new QueueNode(value);

        // when list is empty/zero
        if(!this.first || this.length === 0){
            this.first = newNode;
            this.last = newNode;
            this.length += 1;
            return this.length;
        }

        // when list contains one/more nodes
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
        
        // multi-node present...if Dequeue was implemented with arrays no obj, all elements would have shifted to the left
        let removedNode = this.first; // 'var' dequeuedNode = this.first; in L#72 will be accessible here cus of function() scoped not block{} scoped
        let firstNextNode = this.first.next;
        this.first = firstNextNode;

        this.length -= 1;
        return removedNode;
    }
}

let myqu = new CustomQueueLL();     // similar to Java initialization, Stack<Node> stack = new LinkedList<>();


//// Time Complexity
// insertion: O(1)
// removal: O(1)
// array is not like that cus of RE-INDEXING
