### TREE
- A data structure
- consisting of nodes
- having parent-child relationship

#### Facts
- Real tree inversed
- has ONE root
- branch endges points DOWNWARDS
- non-linear paths
- linkedlist is a special tree
   - it's linear
- a node only references another node below it not beside it

#### Terminologies
1. root
2. edge
3. leaf
4. sibling

#### Applications
- html DOM
- OS files and folders
- Json data

#### Binary Tress
- a kind of Tree with a most 2 child nodes
- number of edges = (nodes - 1)


#### Binary Search Tree (BST)
- a tree data structure 
- each parent node has at most TWO CHILD nodes
- every child node at LEFT of parent node is always LESS THAN the parent
- every child node at RIGHT of parent node is always GREATER THAN the parent
- These properties ensure that the elements in a binary search tree are stored in SORTED ORDER

#### BENEFITS n WHY: CORE PURPOSE
- efficient SEARCH and retrieval of data
    - both average and worst-case scenarios: time complexity of O(log n)
- for efficient INSERTION, DELETION, TRAVERSAL(pre and post-order) operations.


#### TRAVERSAL
Ways of Traversing Nodes with an ORDER
1. Breath-First Search (BFS)
    - visiting node horizontally from left to right
2. Depth-First Search (DFS)
    - In-order
    - Pre-order
    - Post-order

NB:
- Breadth-First: 
    - Level by level Horizontal traversal
    - thus: queue used because it is also horizontal

- Depth-First: 
    - top-down level vertical traversal
    - thus: stack used because it is also arranged vertical

#### BFS vs DFS
- BFS is spacely expensive since have to be tracking visited and lots of leg nodes
- DFS is not expensive
- DFS:
    - In-order: used when wanna provide a sorted data, smallest to biggest

#### Balanced vs Unbalanced Tree
- A balanced binary search tree is a binary search tree in which the heights of the left and right subtrees of any node differ by at most one. 
    - This means that the tree is approximately half full, with roughly equal numbers of elements in each subtree, and the height of the tree is minimized. 
    - Examples of balanced binary search trees include AVL trees and red-black trees.

- On the other hand, an unbalanced binary search tree is a binary search tree in which the heights of the left and right subtrees of a node can differ by any amount. 
    - This can happen when the tree is constructed in a way that causes elements to be heavily skewed to one side or the other. 
    - Unbalanced binary search trees can be much less efficient than balanced binary search trees in terms of time complexity, as operations such as search, insertion, and deletion may take much longer.

#### Binary Tree vs Binary Search Tree
- A binary search tree is a binary tree in which every node fits a specific ordering property: 
    > all left descendents <= N < all right descendents. 
- This must be true for each node N.

#### Complete Binary Tree
- A complete binary tree is a binary tree in which every level of the tree is fully filled, except for perhaps the last level. 
- To the extent that the last level is filled, it is filled left to right. Otherwise, incomplete

#### Full Binary Tree
- a binary tree in which every node has either zero or two children. That is, no nodes have
only one child.

#### Perfect Binary Trees
- one that is both full and complete. All leaf nodes will be at the same level, and this
level has the maximum number of nodes.