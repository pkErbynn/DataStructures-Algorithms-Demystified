/*

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted linked list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

Exp: https://www.youtube.com/watch?v=DvnxDGkjMDM&ab_channel=CrackingFAANG

*/

// Brute Force
// 1. Flat to extract each linkedlist
// 2. concatenate them together in an array
// 3. sort them and make a likedlist
// TC: Sorting = nlogn 
// SC: O(n)


// Optimized
// SC: O(1)...no extra space
// Can alternatively use MinHeap
const mergeKList = function(lists) {
  if(!lists || lists.length == 0) return null;

  let interval = 1;   // initial interval

  while(interval < lists.length){

    for (let i = 0; i + interval < lists.length; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval])   // in-place
    }

    interval = interval * 2;  // moved by 2, 4, 8, 16, etc
  }

  let prettyPrint = printList(lists[0]);

  return prettyPrint;
}

class MyNode {
    constructor(value){
        this.value = value;
        this.next = null; // pointer reference to next node
    }
}

const mergeTwoLists = function(list1, list2) {
  let defaultStartNode = new MyNode(-1);

  let resultNodePtr = defaultStartNode;
  let l1Ptr = list1;
  let l2Ptr = list2;

  while (l1Ptr != null && l2Ptr != null) {
    if(l1Ptr.value < l2Ptr.value){
      resultNodePtr.next = l1Ptr;
      l1Ptr = l1Ptr.next;
    }
    else {
      resultNodePtr.next = l2Ptr;
      l2Ptr = l2Ptr.next;
    }
    resultNodePtr = resultNodePtr.next;
  }

  while (l1Ptr != null) {
    resultNodePtr.next = l1Ptr;
    l1Ptr = l1Ptr.next;
  }

  while (l2Ptr != null) {
    resultNodePtr.next = l2Ptr;
    l2Ptr = l2Ptr.next;
  }

  return defaultStartNode.next;
}

const makeListlistFromArray = function(array) {
  let head = new MyNode(array[0]);
  let currentPtr = head;

  for (let i = 1; i < array.length; i++) {
    let newNode = new MyNode(array[i])
    currentPtr.next = newNode;
    currentPtr = currentPtr.next;
  }
  
  return head;
}

const printList = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.value + " -> ");
        head = head.next;
    }
    return arr;
}


const l1 = makeListlistFromArray([1, 4, 5]);
const l2 = makeListlistFromArray([1, 3, 4]);
const l3 = makeListlistFromArray([2, 6]);

console.log(mergeKList([l1, l2, l3]));


// TC: O(n log k)
// O(log k) work done....and merge take O(n)

// SC: O(i) because it’s done in-place, only using pointers.

/*

 Practical Examples
	1.	Search Engines
	•	Merging sorted lists of search results from multiple servers or shards into a single ranked result list.
	2.	Social Media Feeds
	•	Combining posts from multiple friends’ timelines (each already sorted by time) into a single feed.
	3.	Database Query Merging
	•	Merging results from parallel queries across distributed databases.

*/
