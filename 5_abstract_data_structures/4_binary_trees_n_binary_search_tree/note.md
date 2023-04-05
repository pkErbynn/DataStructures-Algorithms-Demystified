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
Ways of Traversing Nodes
1. Breath-First Search (BFS)
    - visiting node horizontally from left to right
2. Depth-First Search (DFS)
    - In-order
    - Pre-order
    - Post-order

#### BFS vs DFS
- BFS is spacely expensive since have to be tracking visited and lots of leg nodes
- DFS is not expensive
- DFS:
    - In-order: used when wanna provide a sorted data, smallest to biggest
