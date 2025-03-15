class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add node to end
    push(value){
        let newNode = new Node(value);
        
        if(!this.head || this.length === 0) {
            this.head = this.tail = newNode;
            this.length += 1;
            return this;
        };

        this.tail.next = newNode;
        newNode.prev = this.tail;

        // set new tail
        this.tail = newNode;
        this.length += 1;

        return this;
    }

    // remove node from the end
    pop(){
        if(!this.head || this.length === 0) return null;

        if(this.length === 1) {
            const headTailSame = this.head;
            this.head = null;
            this.tail = null;
            this.length - 1;
            return headTailSame;
        }

        // unlike singly linked list that need to be traversed, pendultimate node can be accessed directly from the tail in DoublyLinkedList's
        let poppedtail = this.tail; // copy to return
        let prevNode = this.tail.prev;
        prevNode.next = null;

        this.tail.prev = null; // break chain to prevent leaks

        // set new tail and decrement length
        this.tail = prevNode;
        this.length -= 1;

        return poppedtail;
    }

    // remove node from the start
    shift(){
        if(!this.head) return null;

        let headToDelete = this.head;

        // one node
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            return headToDelete;
        }

        // multiple nodes
        let nextHead = headToDelete.next;
        nextHead.prev = null;
        this.head = nextHead; // mark head

        headToDelete.next = null; // break chains/leaks
        headToDelete.prev = null; 
        
        this.length -= 1;
        return headToDelete;
    }

    // add node to the start
    unshift(value){
        let newNode = new Node(value);

        if(!this.head || this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return this;
        }

        // reconnect chains
        this.head.prev = newNode;
        newNode.next = this.head;
        newNode.prev = null;

        // mark new head
        this.head = newNode;
        this.length += 1;
        
        return this;
    }

    // access node by its position: element can be accessed either from front or back depending on the index
    get(index){
        // check if not within range
        if(index < 0 || index >= this.length){
            return null;
        }

        // work from start
        if(index <= this.length/2){
            // console.log("from start");
            
            let currentNode = this.head;
            let counter = 0;
    
            while(counter != index){
                currentNode = currentNode.next;
                counter += 1;
            }

            return currentNode;
        }

        // else, work from end
        // console.log("from end");
        let currentNode = this.tail;
        let counter = this.length - 1; // last element

        while(counter != index){
            currentNode = currentNode.prev;
            counter -= 1;
        }

        return currentNode;
    }

    // replace value of node: set 'value' at 'index'
    set(value, index){
        let foundNode = this.get(index);
        if(!foundNode){
            return false;
        }
        foundNode.value = value;
        return true;
    }

    // add new node at certain position
    insert(value, index){
        if(index < 0 || index > this.length) return false; // can check nullable value separately, otherwise when added to condition, value can't be 0

        let lengthBefore = this.length;

        // at start: unshift
        if(index === 0){
            this.unshift(value);
            return this.length === lengthBefore+1;
        }

        // at end: push
        if(index === this.length){
            this.push(value);
            return this.length === lengthBefore+1;
        }

        // at middle
        let newNode = new Node(value);
        let foundNode = this.get(index);
        let prevNode = foundNode.prev; // singlyLinkedList couldn't traverse backwards, thus, .get(i-1)

        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = foundNode;
        foundNode.prev = newNode;

        this.length += 1;

        return true;
    }

    // print 
    display(){
        let arr = [];
        let currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr);
        // return arr;
    }

    // remove node from certain position
    remove(index){
        if(index < 0 || index > this.length) return null;

        let lengthBefore = this.length;

        // at start: shift
        if(index === 0){
            return this.shift();
        }

        // at end: pop
        if(index === this.length-1){
            return this.pop();
        }

        let nodeToRemove = this.get(index);
        if(!nodeToRemove) return null;
        let prevNode = nodeToRemove.prev;
        let nextNode = nodeToRemove.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.length -= 1;

        // clean node to prevent leakage to the original list
        nodeToRemove.prev = null;
        nodeToRemove.next = null;

        return nodeToRemove;
    }
}

let dl = new DoublyLinkedList();
dl.push(45);
dl.push(46);
dl.push(47);
// dl.unshift();
// dl.get(1);
// dl.set(477, 2);
// dl.get(2);
// dl.display();
// dl.insert(48, 3);
// dl.get(3);
dl.display();



// === Time complexity
// - insertion: O(1)
// - deletion: depends...start/end: O(1)...middle: o(n)
// - access: o(n)
// - search: o(n).....technically, search is O(n/2) but still o(n)
// 
//  === In sum:
// - singly linked list 
//   ...better for start/end insertion operations
//   ...doesn't eat memory
// - doubly linked list
//   ...better for start/end insertion operation
//   ...better end(tail node) DELETION operation ** (advantage over linkedlist)
//      ...because the tail node has pointer to the prev node, so no need to travel from start the end like singly linkedlist
//   ...better for finding node cus can be done in half the time ** (advantage over linkedlist)
//   ...takes up MORE MEMORY considering the extra pointer
//   ...USE-CASE
//      ...navigating back and forth with browser history
//      ...since prev and next history is stored in pointer
