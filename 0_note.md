#### Space Complexity:
- the amount of memory required by an algorithm
    - to execute a program and produce an output
    - as the input grows
- algo requires memory for storage



#### Algo & Usage time
1. Arrays
   - Best in **reading** operations
   - Poor in inserting and deleting operations (solved by SLL)
2. Singly LinkedList (SLL)
   - Best in **insertion** and **deletion** operation @ **beginning** of list
       - or at _any position_ if the pointer to the node _preceding_ the insertion or deletion position is available.
    - Best in **insertion** @ **end** of list
    - Poor in deletion at end (solved by DLL)
3. Doubly LinkedList (DLL)
   - Best in **insertion** and **deletion** @ beginning
   - Best in **insertion** and **deletion**([because...](https://github.com/pkErbynn/DataStructuresDemystified/blob/main/5_abstract_data_structures/2_doubly_linkedlist/1_main.js#L260)) @ end
   - Poor in control the direction of insert (end or sta)
   - Poor in insertion and deletion at anywhere middle aside beginning and end (solved by HashMap)
4. Stack
   - Best in **controlling** direction/**manner** of insertion and deletion operation
   - Best in **insertion** and **deletion/remove** **only** @ the **beginning/first** side (hence, **LIFO**)
5. Queue
   - Best in **controlling** direction/**manner** of insertion and deletion operation
   - Best in **insertion** @ **end** side and **deletion/remove** @ **beginning/first** end side (hence, **FIFO**)
6. Trees (BST)
   - Best for searching/ordering (traversal) without using an index
   - Best for insertion
7. Binary Heap
   - Best for searching/ordering (traversal) without using an index
   - Best for insertion
   - Best for deletion based on minimum or maximum value
   - Best for Priority Queue
8. Priority Queue
   - Best for reading element based on priority, whether high or low
9. HashMaps
   - Best in reading by key 
   - Best in insertion by key 
   - Best in deletion by key
10. Graphs
   - Best for searching/traversing from multiple paths unlike trees that always start from root
 

