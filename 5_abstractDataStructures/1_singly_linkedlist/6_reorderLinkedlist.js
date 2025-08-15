/*

You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln-1 → Ln

Reorder the list to be on the following form:
L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

*/

/*

Tought Process
1. Option 1 - Naive approache
- Convert linkedlist to array as extra space
- Have two pointers at both ends (left n right)
- Move pointers to each other while merging them into the alternating form
- Convert result back to linkedlist
- Feedback: Uses extra space but shouldn't...O(n)

2. Option 2 - Optimal approache
- Use slow and fast pointer to find middle
- Reverve the right half 
- Merge the two halves alternatively
- Feedback: No extra space, done in-place...O(1)

*/


class MyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const reorderLinkedlist = function(head) {
    // find middle node
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // two halves
    let leftHalf = head;
    let rightHalf = slow;   

    // reverse the right half
    let prevNode = null;
    while(rightHalf != null){
        let righNext = rightHalf.next;
        rightHalf.next = prevNode;

        prevNode = rightHalf;
        rightHalf = righNext;
    }
    rightHalf = prevNode;

    // merge in-place to reorder
    while (leftHalf.next && rightHalf.next) {
        let leftNext = leftHalf.next;
        let rightNext = rightHalf.next;

        leftHalf.next = rightHalf;
        rightHalf.next = leftNext;

        leftHalf = leftNext;
        rightHalf = rightNext;
    }

    console.log("reordered:", printLL(head))
}

const printLL = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.value + " -> ");
        head = head.next;
    }
    arr.push("null");
    return arr;
}

let list1 = new MyNode(1);
list1.next = new MyNode(2);
list1.next.next = new MyNode(3);
list1.next.next.next = new MyNode(4);
list1.next.next.next.next = new MyNode(5);
// list1.next.next.next.next = new MyNode(5);
// list1.next.next.next.next.next = new MyNode(6);
// list1.next.next.next.next.next.next = new MyNode(7);

reorderLinkedlist(list1);

/*

Real use-case

*/