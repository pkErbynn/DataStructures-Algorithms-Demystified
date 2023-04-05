### Binary Heap
- a binary tree-based data structure
- ordered in 2 different ways
    1. parent nodes are greater than child nodes: Max Binary Heap
        - the root has the largest number
    2. parent nodes are less than child nodes: Min Binary Heap
        - the root has the smallest number
- types
    1. Max Binary Heap
    2. Min Binary Heap
- no ordering btn siblings.
    - like left node should be smaller than the right
- left nodes are filled first before right node
- similar to Binary Search Tree but with different rules


#### The Why and Importance
- used to implement Priority Queue **
    - Priority Queue: a data structure that allows you to efficiently add elements and remove the element with the highest priority.
- useful for sorting arrays in O(n log n) time by first building a heap and then repeatedly extracting the minimum (or maximum) element.
- used in Graph traversal algorithms

Overall, the core benefit of a binary heap is its ability to efficiently maintain a collection of elements that have a priority order, which makes it useful in a variety of applications, including job scheduling, event-driven simulations, and graph algorithms such as Dijkstra's shortest path algorithm.

#### Time Complexities
- insertion: O(log n) time
- removal of the minimum (or maximum) element: O(log n) time, where n is the number of elements in the heap. 


#### Finding Children/Parent Nodes from an Array 'n'
- Finding children nodes from parent node in an Array
    - Left child stored at index: 2n + 1
    - Right child stored at index: 2n + 2
- Finding parent node from children nodes in an Array
    - Formular: (n-1)/2