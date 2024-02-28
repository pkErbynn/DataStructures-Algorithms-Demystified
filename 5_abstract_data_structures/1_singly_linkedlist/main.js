class Node{
    constructor(value){
        this.value = value;
        this.next = null; // pointer reference to next node
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adding/inserting node to the end
    push(value){
        let newNode = new Node(value);
        if(this.length < 1 || !this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            // set prevous tail's next
            this.tail.next = newNode;
            // set new node as new tail label
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    // remove node from the end
    pop(){
        // check for empty list
        if(!this.head){
            return null;
        }

        // check for single node
        if(this.length === 1 || !this.head.next){
            let poppedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return poppedNode;
        }

        // else, continue process w/ multiple nodes
        let currentNode = this.head;
        let penultimateNodeOfCurrentNode = null;    // since LinkedList can't look back like Doubly LinkedList

        while(currentNode.next != null){    // look-ahead of the chain before a step is made, otherwise the currentNode can be null, if the step is null, moving two pointers ahead so need to make sure none is null
            // update all 2 trackers to next step
            penultimateNodeOfCurrentNode = currentNode;
            currentNode = currentNode.next;
        }

        if(penultimateNodeOfCurrentNode){
            penultimateNodeOfCurrentNode.next = null; // break/terminate the chain
        }
        
        this.tail = penultimateNodeOfCurrentNode; // set new tail
        this.length -= 1; // reduce length

        // if after removing, and list becomes empty
        // if(this.length === 0) {
        //     this.head = null;
        //     this.tail = null;
        // }

        return currentNode; // the node to remove
        // nb: essense of two pointers steping forward, was to keep/track/hold the removedNode and the penunltimate (which becomes the new tail)
    }

    // remove node from begining of linked list
    shift(){
        // check if list is empty => if length is not what i like => guard clause
        if(!this.length){
            console.log("empty");
            return null;
        }

        let currentHeadToRemove = this.head;
        let nextNode = this.head.next;
        this.head = nextNode;

        this.length -= 1;

        // if list becomes empty after biginner node removal
        if(this.length === 0){
            this.tail = null;
            // head not set to null cus it will be set when this.head.next is null
        }

        currentHeadToRemove.next = null;    // strip/terminate its chain
        return currentHeadToRemove;
    }

    // adding node to the begining
    unshift(value){
        let newNode = new Node(value);
        // if linked list is empty
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return this;
        }
        // if linked list in not empty
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return this;
    }

    // get a node by its position
    // getting the 100th node means traversing through 99 nodes which is inefficient...cus can't be accessed outright
    // this is where array beats linkedlist...cus element can be access directly without traversing through any other elements
    get(index){
        // check if not within range
        if(index < 0 || index >= this.length){  // >= cus index start at 0
            return null;
        }
        
        if(index === 0) return this.head;
        
        let currentNode = this.head;
        let counter = 0;    // initial index
        
        while(currentNode.next){
            currentNode = currentNode.next;
            counter++; // counting the steps to match the incoming index position that the object needs to be retrieved
            if(counter === index){
                break;
            }
        }
        return currentNode;
        
        // while (index != counter) {
        //     currentNode = currentNode.next;
        //     counter++;
        // }
        // return currentNode;
    }

     // remove a node from specific position
    remove(index){
        // invalid range
        if(index < 0 || index >= this.length) return null;

        // at start
        if(index === 0) {
            let removedNode = this.shift();
            return removedNode;
        }

        // at end
        if(index === this.length-1){
            let poppedNode = this.pop();
            return poppedNode;
        }

        // at middle
        let penultimateNode = this.get(index-1); // access to penultimateNode gives info about its forward node, hence accessing penultimateNode
        let removedNodeMiddle = penultimateNode.next;
        penultimateNode.next = penultimateNode.next.next;   // rejoin after node removal
        this.length -= 1;

        return removedNodeMiddle;
    }

    // change the value of node based on its position
    set(value, index){
        let node = this.get(index);
        if(!node){
            return false;
        }
        node.value = value;
        return true;
    }

    // adding new node to a specific position
    insert(value, index){
        // if tryna insert outside the boundary
        if(index < 0 || index > this.length){
            return false;
        }

        // if tryna add to the start then use unshift
        let lengthBeforeInsertion = this.length;
        if(index === 0){
            // return !!this.unshift(value); // bang-banb, !!, convert other types to respective boolean
            this.unshift(value);
            return this.length === lengthBeforeInsertion+1;
        }

        // if tryna add to the end then use push
        if(index === this.length){
            this.push(value);
            return this.length === lengthBeforeInsertion+1;
        }

        // otherwise, inserting anywhere in the middle

        // get the penultimate node because you couldn't lose track of the previous chained nodes + the forward nodes
        // geting the actual node directly looses track of the prev since can't traverse back, only forward
        let penultimateNode = this.get(index - 1);
        let nextNode = penultimateNode.next;
        let newNode = new Node(value);
        penultimateNode.next = newNode;
        newNode.next = nextNode;
        this.length += 1;

        return true;
    }

    print(){
        let currentNode = this.head;
        let arr = [];
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
    
    // reverse the linkedlist in place
    // a -> b -> c -> d
    reverse(){
        if(!this.head) return null;
        if(this.length === 1) return this.head;
        
        let penultimateOfCurrentNode = null
        let currentNode = this.head;
        
        // let nextNode = currentNode.next; // can't be here in this scope cus doesnt get updated
        
        while(currentNode){
            // temp keep next node
            let nextNode = currentNode.next;

            // set link of currentNode to reverse
            currentNode.next = penultimateOfCurrentNode;

            // shift all pointers forward;
            penultimateOfCurrentNode = currentNode;
            currentNode = nextNode;
        }
        
        // swap head and tail
        [this.head, this.tail] = [this.tail, this.head]

        return this;
    }

    // sum values in linked list
    sum(){
        if(!this.head) return 0;
        let currentNode = this.head;
        let sum = 0
        while (currentNode) {
            sum += currentNode.value;
            currentNode = currentNode.next;
        }
        return sum;
    }

    // This modification uses the while (currentNode.next) condition to iterate through the linked list, 
    // and then adds the value of the last node (where currentNode.next is null) outside the loop. 
    // This ensures that the value of the last node is included in the sum.
    sum() {
        if (!this.head) return 0;
    
        let currentNode = this.head;
        let sum = 0;
    
        while (currentNode.next) {
            sum += currentNode.value;
            currentNode = currentNode.next;
        }
    
        // Add the value of the last node (currentNode) outside the loop
        sum += currentNode.value;
    
        return sum;
    }
    
    
}


// a -> b -> c
let sl = new SinglyLinkedList();
sl.push(23);
sl.push(24);
sl.push(25);
sl.push(26);
// sl.pop();
// console.log(sl.sum());
console.log(sl.print());
console.log(sl.reverse());
console.log(sl.print());

let sl2 = new SinglyLinkedList();
sl2.push(10);
sl2.push(20);
// sl2.pop();
console.log(sl2.shift());


// nb:
// check for 
// - -ve
// - empty/zero
// - one and
// - many

// linkedlist operations
// - add to the end/tail => push
// - remove from the end => pop
// - add to the start => unshift
// - remove from the start => shift
// - add to anywhere => insert
// - get anywhere => get
// - change anywhere => set
// - remove from anywhere => remove


// SUMMARY
// Time Complexity of major opertations
// - Insertion: O(1) / O(n) depending on position
// ...0(1) => head/tail..it doesn't matter the number of items in the list
// ...for arrays
//      ...O(n) => all item needs to be shifted if added to end or middle, ie. O(n)
//      ...O(1) => adding item to the end of array, which is rare
// - Removal: O(1) or O(n) depending on the position
// ...O(1) => removing node at the head
// ...O(n) => removing node anywhere else
// - Search/Access: O(n)
// ...O(1) => search at head
// ...O(n) => search anywhere
// ...O(1) => for arrays

// - Recap:
// ...LinkedList is the best alternative where INSERTION / DELETION is VERY frequent
// ...Arrays contains a built-in index, whereas LinkedList does not
// ...Data structures containing Node is the foundation of other data structures like Stacks, Queues

// Reminder Tip
// ...take shift() as hospital queue where the first person is called by doc and the entire patience has to shift forward after first person is removed from the array 