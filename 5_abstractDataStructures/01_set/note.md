What 
- In a Set, elements are not stored by position but by their hash codes (in hash-based implementations). Therefore, the order of insertion is not guaranteed to be the same as the order of retrieval.

Types:
- HashSet (Retrieval order != insertion order)
- LinkedHashSet (Retrieval order = insertion order)
- TreeSet (Retrieval order != insertion order)

How 

Why

- When to Use
    - to remember something you have before

- When NOT to Use 


## Set Vs Array-like DS

In set...,
- no duplicate elemnts, unique element, unlike List(Arraylist, linkedlist, string, queue, stack)
- order is not guaranteed unlike List that will preserve the order of insertion,
    - ...means order you put elements in is not the same as the order you may get them out when you iterate or display them.
    - ...in short, Insertion Order !== Retrieval Order
    - Array/linkedlist need to maintain order because once element position changes, 
    - ...position will be taken by another element so need to get the new position to find that same element
- not index-based for access since there's no order
    - ...this explains why no order unlike array-like data structures
    - so means index and order goes hand in hand
NB: Other unordered DS are HashMap
