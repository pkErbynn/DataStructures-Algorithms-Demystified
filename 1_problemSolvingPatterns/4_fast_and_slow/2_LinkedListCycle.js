/*

# Problem Statement #
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.


# Solution #
Imagine two racers running in a circular racing track. If one racer is faster than the other, the faster racer is bound to catch up and cross the slower racer from behind. 
We can use this fact to devise an algorithm to determine if a LinkedList has a cycle in it or not.
Imagine we have a slow and a fast pointer to traverse the LinkedList. 

In each iteration, the slow pointer moves one step and the fast pointer moves two steps. This gives us two case:

1. If the LinkedList doesn’t have a cycle in it, the fast pointer will reach the end of the LinkedList before the slow pointer to reveal that there is no cycle in the LinkedList.
The slow pointer will never be able to catch up to the fast pointer if there is no cycle in the LinkedList.

2. If the LinkedList has a cycle, the fast pointer enters the cycle first, followed by the slow pointer. 
After this, both pointers will keep moving in the cycle infinitely. If at any stage both of these pointers meet, we can conclude that the LinkedList has a cycle in it. 

    Let’s analyze if it is possible for the two pointers to meet. When the fast pointer is approaching the slow pointer from behind we have two possibilities:

    1. The fast pointer is one step behind the slow pointer or
    2. The fast pointer is two steps behind the slow pointer.

    All other distances between the fast and slow pointers will reduce to one of these two possibilities. 
    Let’s analyze these scenarios, considering the fast pointer always moves first:

        1. If the fast pointer is one step behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step, and they both meet.
        2. If the fast pointer is two steps behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step. 
           ...After the moves, the fast pointer will be one step behind the slow pointer, which reduces this scenario to the first scenario. 
           ...This means that the two pointers will meet in the next iteration.
        
    This concludes that the two pointers will definitely meet if the LinkedList has a cycle. 
    A similar analysis can be done where the slow pointer moves first. Here is a visual representation of the above discussion:

*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const isLinkedListCyclic = function(head) {
    if(!head) return false;

    let slowPointer = head;
    let fastPointer = head;

    while(fastPointer != null && fastPointer.next != null){   // fastpointer not-null check before its .next check...look-ahead check with fastpointer as it is at forward
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if(fastPointer === slowPointer){
            return true;
        }
    }

    return false;
}


// building linkedList
const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
head.next.next.next.next.next.next = new Node(70);
head.next.next.next.next.next.next.next = new Node(80);
// console.log("x", isLinkedListCyclic(head))

// head.next.next.next.next.next.next = head.next.next.next;
// console.log("y", isLinkedListCyclic(head))

head.next.next.next.next.next.next = head.next.next;
console.log("z", isLinkedListCyclic(head))




/*
Time Complexity: O(n), n = number of nodes
Space Complexity: O(1), constant space
*/


/*
Similar Problems #
Problem 1: Given the head of a LinkedList with a cycle, find the length of the cycle.

Solution: 
We can use the above solution to find the cycle in the LinkedList.
Once the fast and slow pointers meet, we can save the slow pointer and iterate the whole cycle with another pointer until we see the slow pointer again to find the length of the cycle.

My Opinion:
- why don't we keep the slow pointer at head and then use another pointer to move around and when they meet then we return the length
- that might work in some cases, but not a good one, cus the tail of the list doesn't neccessarily links to the head again 

- So need to go througth the hare-tortoise approach
*/


const findCycleLength = function(head) {
    if(!head) return 0;

    let slowPointer = head;
    let fastPointer = head;
    let cycleLength = 0;

    while(fastPointer != null && fastPointer.next != null){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next; // 'fastPointer.next' checked cus another '.next' will be accessed

        if(slowPointer === fastPointer){
            // pin on to where they meet, as point reference
            // and make a single round-cicle move with another pointer, "counterPointer", counting each step
            let stepCountPointer = slowPointer;
            while(stepCountPointer.next != null){
                stepCountPointer = stepCountPointer.next;
                cycleLength += 1;

                if(stepCountPointer === slowPointer){
                    return cycleLength;
                }
            }
        }
    }
    return 0;
}

// =======

const findCycleLength_withBreak = function(head) {
    if(!head) return 0;

    let slowPointer = head;
    let fastPointer = head;
    let cycleLength = 0;
    let stepCountPointer = slowPointer;

    while(fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if(slowPointer === fastPointer){
            stepCountPointer = slowPointer;
            break;
        }
    }

    while(stepCountPointer.next){
        stepCountPointer = stepCountPointer.next;
        cycleLength += 1;

        if(stepCountPointer === slowPointer){
            return cycleLength;
        }
    }

    return 0;
}

// building linkedList
const head2 = new Node(10);
head2.next = new Node(20);
head2.next.next = new Node(30);
head2.next.next.next = new Node(40);
head2.next.next.next.next = new Node(50);
head2.next.next.next.next.next = new Node(60);
head2.next.next.next.next.next.next = new Node(70);
head2.next.next.next.next.next.next.next = new Node(80);
console.log("length1:", findCycleLength(head2))   // 0

head2.next.next.next.next.next.next.next.next = head2.next.next;    // point the end to any mid node
console.log("length2:", findCycleLength(head2))   // 6

console.log("findCycleLength_withBreak:", findCycleLength_withBreak(head2))   // 6
