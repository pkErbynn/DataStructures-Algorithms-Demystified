/*

You are given the heads of two sorted linked lists, list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.


Example 1:
Input: list1 = 1 -> 2 -> 4, list2 = 1 -> 3 -> 4
Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

*/

class MyNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const mergeTwoLists = function(list1, list2) {
    let defaultStartNode = new MyNode(-1);  // uses the dummy-node technique

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

const printList = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.value);
        head = head.next;
    }
    console.log(arr);
}


let list1 = new MyNode(1);
list1.next = new MyNode(2);
list1.next.next = new MyNode(4);

let list2 = new MyNode(1);
list2.next = new MyNode(3);
list2.next.next = new MyNode(4);

let mergedHead = mergeTwoLists(list1, list2);

printList(mergedHead)


