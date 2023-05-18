/*

Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. 
The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.


Example 1:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true

Example 2:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false



Solution #
As we know, a palindrome LinkedList will have nodes values that read the same backward or forward. This means that if we divide the LinkedList into two halves, 
the node values of the first half in the forward direction should be similar to the node values of the second half in the backward direction. 
As we have been given a Singly LinkedList, we can’t move in the backward direction. To handle this, we will perform the following steps:

We can use the Fast & Slow pointers method similar to Middle of the LinkedList to find the middle node of the LinkedList.
Once we have the middle of the LinkedList, we will reverse the second half.
Then, we will compare the first half with the reversed second half to see if the LinkedList represents a palindrome.
Finally, we will reverse the second half of the LinkedList again to revert and bring the LinkedList back to its original form.
*/



// ==== Algo:
// find the middle element using fast-slow pointers
    // unlike array, that could have pointers from start and end moving towards eachother while comparing the elements, 
    // linkedlist can only traverse from head node, thus no random element access
// reverse the right half
// compare elements 
// reverse left half to its original state


'use strict';   // strict mode

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const isLinkedListPalindrome = function(linkedListHead) {
    let slowPointer = linkedListHead;
    let fastPointer = linkedListHead;

    while(fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next?.next;    // check 'fastPointer.next' before accessing '.next'
    }

    let middleOfLinkedlist = slowPointer;
    // console.log("mid Node:", middleOfLinkedlist);


    // reversing second halved linkedlist
    let currentNode = middleOfLinkedlist;
    let prevNode = null;

    while (currentNode) {   // 4 main steps - store next, repoint to previous, move current, move previous
        let nextNode = currentNode.next;
        // reverse pointer
        currentNode.next = prevNode;

        // moving pointers forward
        prevNode = currentNode;
        currentNode = nextNode;
    }
    let reversedHalfLinkedList = prevNode;
    // console.log("reversed halved reverse linkedList:", reversedHalfLinkedList);


    /*
        full: 2 -> 4 -> 6 -> 4 -> 2 -> null
        reversed half: null <- 6 <- 4 <- 2 => 2 -> 4 -> 6 -> null
        orginal half: 2 -> 4 -> 6
    */

    // compare original first half with reversed second half
    let orginalLinkedListPointer = linkedListHead;
    let reversedLinkedListPointer = reversedHalfLinkedList;

    while(orginalLinkedListPointer && reversedLinkedListPointer){
        if(orginalLinkedListPointer.value !== reversedLinkedListPointer.value){  // the whole object is different cus one full-list vs half-list, used '.value'
            return false;
        }
        orginalLinkedListPointer = orginalLinkedListPointer.next;
        reversedLinkedListPointer = reversedLinkedListPointer.next;
    }

    return true;
}


// 1 -> 2 -> 3 -> 4 -> 5 -> null
let headLinkedList = new Node(1);
headLinkedList.next = new Node(2);
headLinkedList.next.next = new Node(3);
headLinkedList.next.next.next = new Node(4);
headLinkedList.next.next.next.next = new Node(5);
console.log("isLinkedListPalindrome:", isLinkedListPalindrome(headLinkedList));

// 2 -> 4 -> 6 -> 4 -> 2 -> null
let headLinkedList2 = new Node(2);
headLinkedList2.next = new Node(4);
headLinkedList2.next.next = new Node(6);
headLinkedList2.next.next.next = new Node(4);
headLinkedList2.next.next.next.next = new Node(2);
console.log("isLinkedListPalindrome2:", isLinkedListPalindrome(headLinkedList2));
