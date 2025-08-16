/*

Given the head of a Singly LinkedList, write a method to modify the LinkedList such that 
the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. 
So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

Example 1:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 

Example 2:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null


=======

Solution #
This problem shares similarities with Palindrome LinkedList. 
To rearrange the given LinkedList we will follow the following steps:

1. use the Fast & Slow pointers method similar to Middle of the LinkedList to find the middle node of the LinkedList.
2. once we have the middle of the LinkedList, we will reverse the second half of the LinkedList.
3. finally, we’ll iterate through the first half and the reversed second half to produce a LinkedList in the required order.

*/
'use strict'

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const rearrangeLinkedList = function(linkedListHead) {
    // Psuedo: 
    // find middle using fast-slow pointer
    // get copy of second half
    // reverse from middle to the end
    // create the linked list

    if(!linkedListHead) return null;

    // fast and slow pointer, for middle
    let slowPointer = linkedListHead;
    let fastPointer = linkedListHead;

    while(fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    // slowPointer gets to the middle, when the fastPointer gets to the end of the linkedlist
    // console.log("MiddleNode:", slowPointer); // second half: 8 -> 10 -> 12 -> null

    // reversed linkedListFromMiddle & Original half linkedList
    let secondHalf = reverseLinkedList(slowPointer);
    let firstHalf = linkedListHead;

    // create the alternating linked list
        // full: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
        // firstHalf: 2 -> 4 -> 6 -> 8 -> null
        // secondHalf: 12 -> 10 -> 8 -> null
        // output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 
    while (firstHalf && secondHalf) {
        // steps: 1. temp store next node, 2. point next node to the head of the other half, 3. truncate the list by moving the head to next node, kept in temp
        let firstHalfNext = firstHalf.next;
        firstHalf.next = secondHalf;

        let secondHalfNext = secondHalf.next;
        secondHalf.next = firstHalfNext;

        // move forward on step
        firstHalf = firstHalfNext;
        secondHalf = secondHalfNext;
    }
    
    // terminate firstHalf list still has trailing data prevent data leakage...cus in regular ll reversal, first pointer should end up as 'null' as it goes beyond the array
    if (firstHalf) {
        firstHalf.next = null;
    }

    return linkedListHead;
}

const reverseLinkedList = (head) => {
    if(!head) return null;

    // set node pointers
    let currentNode = head;
    let previousNode = null;

    while(currentNode){
        let nextNodeCopy = currentNode.next;
        currentNode.next = previousNode;
    
        // move node pointers forward by updating
        previousNode = currentNode;
        currentNode = nextNodeCopy;
    }
   
    // return previous node as currentNode gets to null
    return previousNode;
}

// Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
let linkedListHead = new Node(2);
linkedListHead.next = new Node(4);
linkedListHead.next.next = new Node(6);
linkedListHead.next.next.next = new Node(8);
linkedListHead.next.next.next.next = new Node(10);
linkedListHead.next.next.next.next.next = new Node(12);
console.log("rearrangeLinkedList:", rearrangeLinkedList(linkedListHead));


/*
so far: 

YOU THINK... - DO...
1. unsorted input, occurrence - frequency counter map
1. sorted input - binary search, two-pointer 
2. sub continuous array - sliding window
2. cyclic, midpoint - fast n slow 

*/
