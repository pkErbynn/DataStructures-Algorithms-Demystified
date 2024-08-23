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