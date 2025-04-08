/*
Question:
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

Solution:
Note that the start of the cycle means that a small cycle can be created within the larger cyclick linkedlist which is not a head-to-tail cycle, instead, middle node to tail node
If we know the length of the LinkedList cycle, we can find the start of the cycle through the following steps:

1. Take two pointers. Let’s call them pointer1 and pointer2.
2. Initialize both pointers to point to the start of the LinkedList.
3. We can find the length of the LinkedList cycle using the approach discussed in LinkedList Cycle. Let’s assume that the length of the cycle is ‘K’ nodes.
4. Move pointer2 ahead by ‘K’ nodes.
5. Now, keep incrementing pointer1 and pointer2, one step, until they both meet.
6. As pointer2 is ‘K’ nodes ahead of pointer1, which means, pointer2 must have completed one loop in the cycle when both pointers meet. Their meeting point will be the start of the cycle.

Questioning my solution:
Why do i have to move pointer2 ahead by k nodes before starting the increament?

- Using previous "isLinkedListCyclic" algo won't work cus pointers can meet anywhere in the loop that might not neccessarily be the start of the loop 
- To fix this, move pointer2 ahead by 'K' nodes, from the start. This is because at the beginning, both pointers are pointing to the start of the LinkedList and have not entered the cycle yet.
- By moving pointer2 ahead by 'K' nodes, it ensures that both pointers enter the cycle at the same time.
- If we didn't move pointer2 ahead by 'K' nodes and start incrementing both pointers from the beginning of the LinkedList, the pointers would enter the cycle at different times, meeting at diff node. 
- As a result, they would not meet at the start of the cycle, which is what we are trying to find. 
- Also, since one pointer is already moved ahead, there's no way to step double, just one step for each pointer works out
So by moving pointer2 ahead by 'K' nodes, ensures that both pointers enter the cycle at the same time (despite pointer2 already in the cycle, it will re-enter) 
and we can start incrementing both pointers until they meet at the start of the cycle.

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const startOfLinkedListCyle1 = function(head) {
    let cycleLength = lengthOfLinkedListCycle(head);
    console.log('length:', cycleLength);

    let startPointer = head;
    let forwardPointer = head;

    // move forwardPointer ahead by the cycle length
    // used for-loop since the end lenght is known
    for (let start = 1; start <= cycleLength; start++) {
        forwardPointer = forwardPointer.next;
    }

    while(startPointer.next){
        forwardPointer = forwardPointer.next;
        startPointer = startPointer.next;

        if(forwardPointer === startPointer){
            return forwardPointer;
        }
    }

    return null;
}

const startOfLinkedListCyle2 = function(head) {
    let cycleLength = lengthOfLinkedListCycle(head);    // calculated length earlier

    let startPointer = head;
    let forwardPointer = head;

    // move forwardPointer ahead by the cycle length
    while(cycleLength > 0){
        forwardPointer = forwardPointer.next;
        cycleLength -= 1;
    }

    while(startPointer != forwardPointer){
        forwardPointer = forwardPointer.next;
        startPointer = startPointer.next;
    }

    if(startPointer === forwardPointer) {   // can just return
        return forwardPointer;
    }

    return null;
}

const lengthOfLinkedListCycle = function(head) {
    if(!head) return;

    let slowPointer = head;
    let fastPointer = head;

    while(fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if(fastPointer === slowPointer){
            let counterPointer = fastPointer; // or can point to slowPointer
            let stepCounter = 0;    // tracks the number of times counterPointer meets fastPointer again

            while(counterPointer.next){
                counterPointer = counterPointer.next;
                stepCounter++;

                if(counterPointer === fastPointer){
                    return stepCounter;
                }
            }
        }
    }
    return 0;
}

let headLinkedList = new Node(1);
headLinkedList.next = new Node(2);
headLinkedList.next.next = new Node(3);
headLinkedList.next.next.next = new Node(4);
headLinkedList.next.next.next.next = new Node(5);
headLinkedList.next.next.next.next.next = new Node(6);
headLinkedList.next.next.next.next.next.next = headLinkedList.next; // point the next to any mid node

console.log("StartNode1:", startOfLinkedListCyle1(headLinkedList));
console.log("StartNode2", startOfLinkedListCyle2(headLinkedList));

/*

Nb: 
- where the pointers meet does not neccessarily mean that is the starting of the cycle
- since it's a cycle, they can meet at any point in the cycle

Time Complexity #
- finding the cycle in a LinkedList with ‘N’ nodes and also finding the length of the cycle requires O(N). 
- Also, in the above algorithm, it takes O(N) to find the start of the cycle. 
- Therefore, the overall time complexity of our algorithm will be O(N).

Space Complexity #
The algorithm runs in constant space O(1).

*/


// Implementation from previous results wrong start node
// const isLinkedListCyclic = function(head) {
//     if(!head) return false;

//     let slowPointer = head;
//     let fastPointer = head;

//     while(fastPointer && fastPointer.next){   // fastpointer not-null check before it's .next check...ook-ahead check with fastpointer as it's at forward
//         slowPointer = slowPointer.next;
//         fastPointer = fastPointer.next.next;

//         if(fastPointer === slowPointer){
//             return fastPointer;
//         }
//     }

//     return false;
// }

// console.log("StartNode2_isLinkedListCyclic:", isLinkedListCyclic(headLinkedList));

