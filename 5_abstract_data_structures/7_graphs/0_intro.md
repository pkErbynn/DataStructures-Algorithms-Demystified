Graphs

Definition
- a non-linear data structure (stack, queues, array, etc are all linear, tree is non-linear)
- consisting of collection of nodes, connected by edges
- A tree is a special form of Graph
    - unlike trees, graphs have no parent / entry node / starting node
    - every node can be the start in graphs

Applications of Graphs
- social networking
- routing algorithms
- mapping eg. google map
- recommendations on social, shopping, movie platforms
    - Netflix => "people also watch..."
    - Amazon => "frequently bought with..."
    - Fb => "people you might know..."

Terminologies
- vertex: a node
- edge: connection between nodes
- weighted/unweighted: values assigned to distances btn nodes/vertices
- directed/undirected: directions assigned to distances btn nodes/vertices

Ways of modeling Graphs in code
1. Adjascency list
    - **faster to iterate/traverse through all nodes** [upside]...[because adj list contains only connected notes]
    - slower to look-up specific edge [downside]...[cus nodes are in list and needs iteration]
    - takes **less space** in Sparsed graph
    - <i> USED WHEN: In most cases where **nodes don't have lot of connections/edges** to other nodes, so it means look-up for edges will me minimal, and using a list to store the connections of a particular node is a lot easier to maintain since it's not many, and iterate in future </i>
2. Adjascency matrix
    - slower to iterate through all nodes [downside]....[bacause matrix includes list of nodes that may not even be connected to that particular not, those unconnected noted are set to value 0 ]
    - faster to look-up specific edge [upside]...[because edges values are spread into matrix so index can help to look-up faster]
    - takes more space in Sparsed graph
    - <i> USED WHEN: In most cases nodes are connected to almost every edges node, thus use matrix for specific look-up via indexing...**In sum, used when nodes has lots of connections** </i>

Why Using Adjascency list
- cus most graphs are Sparsed (one-on-one connection with nodes, not one graph to all nodes, ie, one-many)
- and takes less space complexity

Vs Tree
- every tree is a graph, but not all graphs are trees
- trees have entry point to traverse from, but graphs can start anywhere
- trees have one path to a paticular node, but graphs can have multiple paths to a node


===== Graph Traversal =====

Most useful part of graphs. Graph Traversal useful in:
- web crawlers
- finding the closest match / recommendations
- shortest path relevance
    - GPS Navigation
    - Solving maze

Depth-First Traversal
- means prioritizing visiting children nodes before parents
- also means, poping top children First
- thus, using Stack
- Note: recursive approach uses the underlining call stack
    - hence, no need to explicitly use Stack, unless done in iterative approach


Unweighted Graph Structure
```js
unweightedGraph = {
    "A": ["B", "C"],
    "B": ["A", "C"],
    "C": ["D"]
}
```