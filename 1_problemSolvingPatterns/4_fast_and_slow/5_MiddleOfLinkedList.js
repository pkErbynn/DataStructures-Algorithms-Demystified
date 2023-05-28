/*

Problem Statement #
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.

Example 1:

Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 3
Example 2:

Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4
Example 3:

Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
Output: 4



Solution #
One brute force strategy could be to first count the number of nodes in the LinkedList and then find the middle node in the second iteration. 
Can we do this in one iteration?

We can use the Fast & Slow pointers method such that the fast pointer is always twice the nodes ahead of the slow pointer. 
This way, when the fast pointer reaches the end of the LinkedList, the slow pointer will be pointing at the middle node.

*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const middleOfLinkedlist = function(head) {
    if (!head) return null;

    let slowPointer = head;
    let fastPointer = head;

    while(fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    if (!fastPointer?.next) {   // check might not be needful as outside the 'while' is invalid fastPointer
        return slowPointer;
    }

    return null;
}


let headLinkedList = new Node(1);
headLinkedList.next = new Node(2);
headLinkedList.next.next = new Node(3);
headLinkedList.next.next.next = new Node(4);
headLinkedList.next.next.next.next = new Node(5);
console.log("mid node:", middleOfLinkedlist(headLinkedList));   // even list

headLinkedList.next.next.next.next.next = new Node(6);  // odd list
console.log("mid node2:", middleOfLinkedlist(headLinkedList));


