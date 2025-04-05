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


// ======= Array Implementation ====

class CustomStackArr {
    data;
    pointer = -1;   // points to nothing by default
    #DEFAULT_SIZE = 5;

    // Js doesn't support multiple ctor
    // constructor() {
    //     this(this.#DEFAULT_SIZE)
    // }

    constructor(size = null) {
        const stackSize = size || this.#DEFAULT_SIZE;
        this.data = new Array(stackSize)    // here, picture stack as horizontal stack instead of vertical standing stack
        // this.data = [stackSize]
    }

    push(item){
        if(this.isFull()){
            console.log("Stack is full.");
            return false;
        }

        // pointer moves foward and set next item
        this.pointer++;
        this.data[this.pointer] = item;
        // this.data[++this.pointer] = item;

        return true;
    }

    isFull(){
        return this.pointer === this.data.length - 1 // last element
    }

    pop(){
        if(this.isEmpty()){
            console.log("Can't pop from empty stack");  // can throw exception here
            return null;
        }

        // return this.data[this.pointer--]

        let removedItem = this.data[this.pointer]
        // this.data[this.pointer] = undefined   // clear popped element
        this.pointer--;

        return removedItem;
    }

    isEmpty(){
        return this.pointer === - 1  // pointer hasn't moved
    }

    peak(){
        if(this.isEmpty()){
            console.log("Cannot peak from empty stack");
        }
        return this.data[this.pointer]    // peak the element at the top with the pointer cus pointer tracks the top element
    }

    display(){
        for (let index = this.pointer; index >= 0; index--) {
            console.log(this.data[index]);
        }
    }
}

// let customStackArr = new CustomStackArr(15)
let customStackArr = new CustomStackArr()
// customStackArr.push(10);
// customStackArr.push(20);
// customStackArr.push(30);
// customStackArr.push(40);
// customStackArr.push(50);
// customStackArr.push(60);
// customStackArr.display()
// customStackArr.pop();
// customStackArr.display()


// ========== Dynamic Stack =========

class DynamicCustomStackArr extends CustomStackArr {
    constructor(size = null) {
        super(size)
    }

    push(item) {
        if(this.isFull()){
            // double the size
            let doubledSizedData = new Array(this.data.length * 2)

            // copy prev items to new data
            for (let index = 0; index < this.data.length; index++) {
                doubledSizedData[index] = this.data[index];
            }

            // set with big size
            this.data = doubledSizedData;
        }

        // add item to stack
        this.pointer++;
        this.data[this.pointer] = item;

        return true;
    }
}

let dynamicCustomStackArr = new DynamicCustomStackArr();
dynamicCustomStackArr.push(10);
dynamicCustomStackArr.push(20);
dynamicCustomStackArr.push(30);
dynamicCustomStackArr.push(40);
dynamicCustomStackArr.push(50);
dynamicCustomStackArr.push(70);
dynamicCustomStackArr.push(80);
dynamicCustomStackArr.push(90);
dynamicCustomStackArr.push(100);
dynamicCustomStackArr.display()