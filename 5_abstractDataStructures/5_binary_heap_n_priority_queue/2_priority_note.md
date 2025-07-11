### Prioriy Queue

- born from binary heap
- it's a binary tree-based abstract data structure
    - where each element is associated with priority
- element with high priority are served before element with low priority
- normally, low priority tag number means high priority
- In Binary Heap, 
    - the actual value being used to prioritize a value/number, but for PQ, a unique property/tag is attached to a value, to determine whether that value is of higher priority/importance or not
    - in numbers/values system priority is intrinsic, meaning, 5 can be of higher priority than 2 intrinsically but, in object space, a tag/property is used to determine priority level 
- ![Prioriy queue image](../../assets/priority-queue.png)

- it's a wrapper around binary heap
    - gives you access to heap operations but at higher level
    - similar to how ArrayList abstracts traditional array operations


#### Implementation

- can be implemented using a 
    - list or
    - binary heap

- using list
    - it will be slow
    - cus we have to iterate through all elements in the list everytime to find the element priority tag as the element with hightest priority can be at the end of the list
    - this is a naive approach
    - O(n)

- using heap
    - better and efficient approach
    - provides order as to what element to searve next
    - instead of using pure premitive values as node in heap, a node object will be used this time around **
    - O(log n)


#### Confussion
People confuse Heap with Prioriy Queue. KNOW THAT:
    - Prioriy Queue is an abstract data structure which can be implemented in many ways
    - Binary Heap is an efficient low-level approach of implementing the Prioriy Queue concept by using intrinsic numbers' value