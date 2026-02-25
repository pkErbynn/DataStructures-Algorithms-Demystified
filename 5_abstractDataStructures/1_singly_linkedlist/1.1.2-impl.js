/* 

Singly Linked List:
   2 -> 3 -> 4 -> 1 -> 6 
(head)               (tail)     

*/

class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // prepend
    insertAtFront(value){
        let newNode = new Node(value)

        // if ll is empty
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length = this.length + 1
        }

        // node already exist
        else {
            newNode.next = this.head;
            this.head = newNode;
            this.length = this.length + 1;
        }
    }

    insertAtEnd(value){
        // implement this
    }

}

// let ed = new Node("Edem");
// ed.next = new Node("Reign")
// ed.next.next = new Node("Timo")
// ed.next.next.next = new Node("PK")

// console.log(ed);

let ourlink = new SLL();
ourlink.insertAtFront("Edem")
ourlink.insertAtFront("Reign")
console.log(ourlink);


