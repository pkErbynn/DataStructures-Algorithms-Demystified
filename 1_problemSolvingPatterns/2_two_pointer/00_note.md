## Two-Pointer approach
- INPUT: mostly one SORTED array input
- WHY: it prevents from using 2 for-loops on same array
- index positions can be moved around to meet certain conditions
- sorted cus pointer move either toward the **begining, MIDDLE or END** based on condition
- OUTPUT: pair of positions/indexes or element

### When to use
> Leverage Two-Pointers  when dealing with problems having with **sorted arrays** (or LinkedLists) 
and need to find a **set of elements that fulfill certain constraints**. The set of elements could be a pair, a triplet or even a subarray.


## Note
- Common technique used in questions that involve arrays, linked lists, or strings. 
- It involves the use of two pointers, typically initialized at the beginning of the data structure, 
    - and moving in opposite directions or at different speeds until they meet or some other condition is met.

#### scenarios to consider using the two-pointer approach:
- When you need to **"find a pair of elements(or subarray) in an array"** that satisfy a certain condition, 
    -   such as the sum of two elements being equal to a given target value. 
    -   In this case, use two pointers that start at opposite ends of the array or linked list and move towards each other until they find a pair of elements that meet the condition.
