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
    - naa, nothing like that exists in heaps, cus we're only interested in the current parent(min/max) on top
- left nodes are FILLED FIRST before right node
- similar to Binary Search Tree but with different rules
- In OOP lang like Java, 
    - Max n Min Heap is abstracted/wrapped into PriorityQueue
    - So you will have to interact with PriorityQueue instead of the lowlevel heap array 

#### The Why and Importance
- used to implement Priority Queue **
    - Priority Queue: a data structure that allows you to efficiently add elements and remove the element with the highest priority.
- useful for sorting arrays in O(n log n) time by first building a heap and then repeatedly extracting the minimum (or maximum) element.
- used in Graph traversal algorithms

Overall, the core benefit of a binary heap is 
- its ability to efficiently maintain a collection of elements that have a **priority order**, which makes it useful in a variety of applications, including job scheduling, event-driven simulations, and graph algorithms such as Dijkstra's shortest path algorithm.

#### Time Complexities
- insertion: O(log n) time
- removal of the minimum (or maximum) element: O(log n) time, where n is the number of elements in the heap. 
- finding max/min element without removing: O(1)


#### Finding Children/Parent Nodes from an Array 'n'
- Finding children nodes from parent node in an Array
    - Left child stored at index: 2n + 1
    - Right child stored at index: 2n + 2
- Finding parent node from children nodes in an Array
    - Formular: (n-1)/2....(-1) cus n is zero-index based...otherwise would be n/2


### Heap Tree vs Search Tree
- Search Tree: 
    - left node is less that parent + right node is greater 
    - help in search traversing, thus called Binary SEARCH Tree
- Heap Tree: 
    - Max Heap = parent greater than children
    - Min Heap = parent lesser than children
    
### Complexities In-Dept
- The **insertion** time complexity in a binary heap is O(1) on average and O(log n) in the worst case.
	-	Worst-case (O(log n)): 
        - Inserting a new element at the bottom of the heap requires moving it up to its correct position. 
        - The height of the binary heap is log n, so _in the worst case, the element might need to move all the way up to the root_.
	-	Average-case (O(1)): 
        - The new element is likely to be inserted near the bottom of the heap. 
        - Most elements in the heap are close to the leaves, and only a small number of elements are near the root. 
        - Therefore, on average, the number of swaps required is much smaller, leading to O(1) expected time. 
        - This is because the average depth of the insertion is much less than the maximum height, and the average work needed converges to O(1).

    - In summary:
	    - Worst case: O(log n)
	    - Average case: O(1)

- **Removing** element from a binary heap (usually the root in the case of extracting the maximum or minimum) has the following time complexity behavior:
	-   Worst-case (O(log n)):
	    - In a heap, after removing the root element, we replace it with the last element in the heap (usually the last leaf).
	    - Then, the new root element is “sunk down” (also called heapifyDown) to restore the heap property.
	    - This involves comparing the element with its children and swapping it with the larger (or smaller) child if necessary, and repeating this process until the heap property is satisfied.
	    - Since the height of the binary heap is log n, in the worst case, the element might need to “sink” all the way to the bottom of the heap.
		    - Time Complexity: O(log n), as the number of comparisons and swaps depends on the height of the heap.
	- Average-case (O(log n)):
	    - The average-case time complexity is still O(log n). 
        - In practice, the element might not need to sink all the way to the bottom, but the number of comparisons and swaps will still be proportional to the height of the heap, which is log n.
	    - Although the element may not always move the full height, the average number of swaps is still tied to the height of the tree.

    - Summary:
	    - Worst-case time complexity: O(log n)
	    - Average-case time complexity: O(log n)

- Finding the Maximum or Minimum Element in a Binary Heap:
	- the max/min element is _always at the root_ (the top of the heap), 
    - ...so finding the maximum element is an **O(1)** operation since it’s always the element at index 0.