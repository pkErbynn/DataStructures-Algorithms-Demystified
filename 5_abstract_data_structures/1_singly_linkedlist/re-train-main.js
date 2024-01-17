class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;

    }

    push(value) {
        let newNode = new Node(value);
        if(this.lenght == 0){
            this.head = newNode;
            this.tail = newNode;
            this.lenght += 1;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght += 1;
        return this;
    }

    pop(){
        if(this.head == null){
            return null;
        }

        if(this.lenght == 1){
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.lenght -= 1;
            return removedNode;
        }

        let currentNode = this.head;
        let penultimateNodeOfCurrentNode = null;

        while(currentNode.next != null){
            penultimateNodeOfCurrentNode = currentNode;
            currentNode = currentNode.next;
        }

        penultimateNodeOfCurrentNode.next = null;
        this.tail = penultimateNodeOfCurrentNode;
        this.lenght -= 1;

        return currentNode;
    }
}

let sl = new SLL();
sl.push(1);
sl.push(2);
sl.push(3);
// sl.push(4);