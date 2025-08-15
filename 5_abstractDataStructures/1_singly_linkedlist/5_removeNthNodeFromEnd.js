/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.
 
Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]
 
NB: Would have been very easy if to be done from front
*/

class MyNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Using 2-pointer ....NOT fast-and-slow cus they only move one step after the gap/offset
// ...move to make the steps between two pointers be nth value, eg, 2 steps, 3 steps apart
// ...then traverse together
// ...then remove node
const RemoveNthNodeFromEndofList = function(llHead, nth) {
    let leftPointer = llHead;
    let rightPointer = llHead;

    // Move first pointer n steps ahead to keep a gap of n
    let counter = 0;
    while(rightPointer.next != null){
        rightPointer = rightPointer.next;
        counter++;
        if(counter === nth) break;
    }

    while(rightPointer.next != null){
        leftPointer = leftPointer.next;
        rightPointer = rightPointer.next;
    }

    let nodeToDelete = leftPointer.next;
    leftPointer.next = leftPointer.next.next;
    console.log("removed:", nodeToDelete.value);
    
    return llHead;
}

const printLinkedlist = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.value);
        head = head.next;
    }
    arr.push("null");
    console.log(arr);
}

let list1 = new MyNode(1);
list1.next = new MyNode(2);
list1.next.next = new MyNode(3);
list1.next.next.next = new MyNode(4);
list1.next.next.next.next = new MyNode(5);
list1.next.next.next.next.next = new MyNode(6);
list1.next.next.next.next.next.next = new MyNode(7);

printLinkedlist(RemoveNthNodeFromEndofList(list1, 3));
printLinkedlist(RemoveNthNodeFromEndofList(list1, 1));

// EdgeCase: logic above does not satisfy the edge case where head (or anything before) is to be removed
// ...because leftPointer starts at llHead, so can't remove node when the pointer is directly on it instead of before it
// ...so for this reason, a dummy node is highly usefy
printLinkedlist(RemoveNthNodeFromEndofList(list1, 7));  


/// ========== Fix for edge case using Dummy Node ======== ****

const RemoveNthNodeFromEndofList_Fixed = function(llHead, nth) {
    // guards
    if (llHead == null) return null;        // empty list
    if (nth <= 0) return llHead; 

    let dummyNode = new MyNode(-1);
    dummyNode.next = llHead;    // put dummy in front to serve as null
    let leftPointer = dummyNode;
    let rightPointer = dummyNode;

    // Move first pointer n steps ahead to keep a gap of n
    let counter = 0;
    while(rightPointer.next != null){
        rightPointer = rightPointer.next;
        counter++;
        if(counter === nth) break;
    }

    // when element to be removed from left not exist
    if(nth > counter) return dummyNode.next;

    while(rightPointer.next != null){
        leftPointer = leftPointer.next;
        rightPointer = rightPointer.next;
    }

    let nodeToDelete = leftPointer.next;
    leftPointer.next = leftPointer.next.next;
    console.log("removed:", nodeToDelete.value);
    
    return dummyNode.next;
}

let list2 = new MyNode(1);
list2.next = new MyNode(2);
list2.next.next = new MyNode(3);
list2.next.next.next = new MyNode(4);
list2.next.next.next.next = new MyNode(5);
list2.next.next.next.next.next = new MyNode(6);
list2.next.next.next.next.next.next = new MyNode(7);

console.log("=== fixed solution ====");

// printLinkedlist(RemoveNthNodeFromEndofList_Fixed(list2, 3));
// printLinkedlist(RemoveNthNodeFromEndofList_Fixed(list2, 1));
printLinkedlist(RemoveNthNodeFromEndofList_Fixed(list2, 7));  
printLinkedlist(RemoveNthNodeFromEndofList_Fixed(list2, 8));    // another edge case, nothing removed


// Complexity
// 	•	Time: O(L) where L is the length of the list (single pass).
// 	•	Space: O(1) (constant extra space).


/*

Here are two realistic, practical scenarios where removing the n-th node from the end of a linked list would be useful:

⸻

1. Messaging App – Deleting Oldest Messages

Scenario:
Imagine you’re building a messaging service (like WhatsApp or Slack) where messages are stored in a linked list in chronological order.

If the user wants to delete the 5th most recent message (counting from the newest), you’d use this algorithm:
	•	The head points to the oldest message.
	•	The tail is the newest message.
	•	Instead of reversing or counting from the start, you move pointers and directly delete the desired node from the end.

Why this algorithm works well:
	•	You don’t need to calculate the total number of messages beforehand.
	•	Works efficiently in a single pass, even for huge chat histories.

⸻

2. Music Playlist – Removing Last Played Track

Scenario:
In a music streaming service, tracks in a playlist are kept in a linked list where:
	•	Head = first song in the playlist
	•	Tail = most recently added song

If you want to remove the nth last played track (e.g., remove the 3rd last track that played), you can:
	•	Traverse with two pointers to find and remove that node without scanning twice.

Why this algorithm works well:
	•	Supports large playlists efficiently without recalculating size each time.
	•	Handles dynamic playlists where songs are constantly being added and removed.

*/