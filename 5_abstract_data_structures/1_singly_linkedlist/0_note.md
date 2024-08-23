### Single Linked List 
- a data structure that contains a sequence of nodes having a HEAD, TAIL and LENGTH properties
- where each node has
  - value
  - pointer to another node or null pointer

#### examples: 
- a chain where each link is connected to the next link.
- cargo train

### Why use
- efficient insertion and deletion of elements at the beginning of the list, 
    - or at any position if the pointer to the node preceding the position of insertion or deletion is available. 

### When not to use
- accessing an element in the list requires traversing the list from the HEAD until the desired element is reached, which can be time-consuming for large lists.

### vs Arrays
- Arrays are indexed in order
    - List is not inexed
- In arrays, accessing item is super fast **
    - In List, individual item access is expensive cus need to traverse through all elements...eg: elevator can't skip some floors straight to a particular floor
- In Arrays, insertion or Deletion is super expensive, ripple effect of reindexing
    - Insertion and deletion gave birth to List **
- Array: Better for Write less, Read many operations
    - LinkedList: Better for Write many, Read less operations (at start)
    - Write => Insert, Delete (Delete at end is not efficient in Linkedlist, unless Doubly)


#### Why called Singly linked list
- because each node in the list has a SINGLE reference or pointer to the NEXT node in the sequence, but not to the previous node. 
- This means that the nodes in the list can only be traversed in ONE DIRECTION, from the head to the tail, and you cannot move backward through the list without starting again from the head. 
- In contrast, a doubly linked list has pointers to both the next and previous nodes, allowing for bidirectional traversal.


#### Is singly linked list the same as the List<> data structure in c#?
- No, a singly linked list is not the same as the List<> data structure in C#.
- A singly linked list is a linear data structure consisting of a sequence of nodes, where each node stores a data element and a reference (or pointer) to the next node in the list.
- In contrast, List<> is a dynamic array-like data structure in C# that stores elements in a contiguous block of memory. It provides random access to elements by index and supports dynamic resizing, insertion, and deletion of elements. Unlike a singly linked list, List<> does not have pointers or references to other elements in the list.
    - List<> = [a, b, c]    // simlar to array 
- Insertion or deletion of an element in the middle of an ArrayList requires shifting all the subsequent elements, which can be a time-consuming operation for large lists. In a case When a new element is added to the end of an array in JavaScript using the push() method, the new element is simply appended to the end of the array without any shifting of existing elements.


#### Demo
- example that demonstrates how the elements are shifted when a new element is added to the beginning or middle of the array:

- javascript
```js
// create a new array with three elements
let myArray = [1, 2, 3];

// add a new element to the beginning of the array using unshift()
myArray.unshift(0);

console.log(myArray); // output: [0, 1, 2, 3]

// add a new element at index 2 using splice()
myArray.splice(2, 0, "two");

console.log(myArray); // output: [0, 1, "two", 2, 3]
```

- In the first example, the unshift() method is used to add a new element to the beginning of the array. This causes all the existing elements to shift one position to the right to make room for the new element (0).

- In the second example, the splice() method is used to add a new element at index 2 of the array. This causes all the elements after the insertion point (2 and 3) to shift one position to the right to make room for the new element ("two").


#### what is the time complexity for node removal in linked list?
The time complexity for node removal in a linked list depends on the position of the node being removed.

- If the node to be removed is at the beginning of the linked list (i.e., the head node), then the time complexity is O(1) since no traversal of the list is required.

- If the node to be removed is at the end of the linked list (i.e., the tail node), then the time complexity is O(n), where n is the number of nodes in the linked list. This is because we need to traverse the entire list to find the second-to-last node in order to update its next pointer to NULL.

- If the node to be removed is somewhere in the middle of the linked list, then the time complexity is also O(n), as we need to traverse the list to find the node to be removed, and then update the pointers of the surrounding nodes to remove the node from the list.

Overall, 
- the worst-case time complexity for node removal in a linked list is O(n), 
- while the best-case time complexity is O(1) if the node being removed is the head node.


#### what is the time complexity for insertion operation in singly linked list?
The time complexity for insertion operation in a singly linked list depends on the position where the new node is to be inserted.

- If the new node is being inserted at the beginning of the linked list (i.e., as the new head node), then the insertion operation can be done in O(1) time complexity since no traversal of the list is required.

- If the new node is being inserted at the end of the linked list (i.e., as the new tail node), then the insertion operation requires traversing the entire list to reach the end, resulting in a time complexity of O(n), where n is the number of nodes in the linked list.

- If the new node is being inserted at some position in the middle of the linked list, then the time complexity depends on the position where the new node is being inserted. Specifically, the time complexity will be O(n) since we need to traverse the list to reach the position where the new node is to be inserted.

Overall, 
- the worst-case time complexity for insertion operation in a singly linked list is O(n), 
- while the best-case time complexity is O(1) if the new node is being inserted at the beginning of the list.


