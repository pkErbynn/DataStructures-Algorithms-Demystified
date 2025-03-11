This pattern is based on the Depth First Search (DFS) technique to traverse a tree.

We will be using recursion (or we can also use a stack for the iterative approach) to keep track of all the previous (parent) nodes while traversing. 
This also means that the space complexity of the algorithm will be 
O(H), where ‘H’ is the maximum height of the tree.


NB:
- Breadth-First: 
    - Level by level Horizontal traversal
    - thus: queue because it is also horizontal

- Depth-First: 
    - top-down level vertical traversal
    - thus: stack because it is also arranged vertical