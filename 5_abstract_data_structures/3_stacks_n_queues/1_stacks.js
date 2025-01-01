// 2 Ways of stack implementation

// 1. Using Array
let arr = [2,3,5,6];
arr.unshift(9);
arr.shift();

// - unshift(8) => to add to the beginning of the array
// - shift() => to remove at the beginning of the array, ie. the unshifted element

// - this is inefficient cus the rest of the element needs to be reindex
// - add/remove at beginning of array is totally poor for huge data
// - thus, do at the end
// - push() / pop() needed 

// - push(item);
// - pop();

// - much efficient
// - add/remove element at the end is efficient as there's no reindexing
// - new index just to be created for new element
// - not supper effective cus element is not accessed via index, therefore better DS is needed
// - Linkedlist is needed cus it preserves the order

// 2. Using LinkedList


class CustomStack {
    constructor() {
        const DEFAULT_SIZE = 10;
        this.data = []

        this.pointer = -1;
    }

    constructor(size){
        this.data[size]
    }

    push(item){
        if(isFull()){
            console.log("Stack is full.");
            return false;
        }

        // pointer moves foward and set next item
        this.pointer++;
        this.data[this.pointer] = item;

        return true;
    }

    isFull(){
        return this.pointer == this.data.length - 1 // last element
    }

    pop(){
        if(isEmpty()){
            console.log("Stack is empty");
            return null;
        }

        let removedItem = this.data[this.pointer--]
        return removedItem;
    }

    isEmpty(){
        return this.pointer == - 1  // not moved
    }

    peak(){
        return this.data[this.pointer]
    }
}

/*

STACK
- is a data collection data structure
- based on LIFO operation
- means, last element added to the stack will be the first element to be removed

Applications
- when need to store data such that LAST THING ADDED, is the last thing removed ***
- undo
- function call stack: manage function invocations

*/

class DynamicCustomStack extends CustomStack {
    push() {
        if(isFull()){
            // double the size
            let doubledSizedData = this.data[this.data.length * 2]

            // copy prev items to new data
            for (let index = 0; index < this.data.length; index++) {
                doubledSizedData[index] = this.data[index];
                
            }

            // set with big size
            this.data = doubledSizedData;
        }

        this.pointer++;
        this.data[this.pointer] = item;

        return true;
    }
  }