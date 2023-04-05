/*

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
    - faster to iterate through all nodes [upside]
    - slower to look-up specific edge [downside]
    - takes less space in Sparsed graph
2. Adjascency matrix
    - slower to iterate through all nodes [downside]
    - faster to look-up specific edge [upside]
    - takes more space in Sparsed graph

Why Using Adjascency list
- cus most graphs are Sparsed (one-on-one connection with nodes, not one graph to all nodes, ie, one-many)
- and takes less space complexity

Vs Tree
- every tree is a graph, but not all graphs are trees
- trees have every point to traverse from, but graphs can start anywhere
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
unweightedGraph = {
    "A": ["B", "C"],
    "B": ["A", "C"],
    "C": ["D"]
}

*/


// Building undirected graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    ////////// building graph ////////
    
    // adding vertex
    addNode(name){
        // initial new node to empty list of edges 
        if(!this.adjacencyList[name]){
            this.adjacencyList[name] = [];
        }
    }

    // creating connection b/n node points
    // edges comes with 2 nodes/vertices
    // undirected connection as, a -> b === b -> a
    addEdge(node1, node2){
        if(this.adjacencyList[node1]) this.adjacencyList[node1].push(node2);
        if(this.adjacencyList[node2]) this.adjacencyList[node2].push(node1);
    }

    removeEdge(node1, node2){
        // uses optional chaining for checking
        this.adjacencyList[node1] = this.adjacencyList[node1]?.filter(n => n !== node2);
        this.adjacencyList[node2] = this.adjacencyList[node2]?.filter(n => n !== node1);
    }

    removeNode(node){
        let adjNodes = this.adjacencyList[node];

        // remove all connections associated with this node
        // by removing this node from the adjascencyArray of other nodes
        for(let adjNode of adjNodes){
            this.removeEdge(node, adjNode);
        }
        
        // then finally remove the node itself f
        // by removing the key / entire object from the mother adjacencyList object
        delete this.adjacencyList[node];        
    }

    
    ////////// graph traversal - traverse from prepared graph ////////
    

    // determine your start node
    // depth means, children nodes has priority first, thus use stack 
    // reminder: depth-stack => (ds), while breadth-queue => barbeQueue
    depthFirstTraversal(startNode){  // ****
        let result = [];
        let stack = [];
        let visitedNodeTracking = {};  // true/false...prevent cyclic loop

        // add start node to Stack for treatment n diagnosis
        stack.push(startNode);

        // while something is on Stack for treatment...
        while(stack.length) {  // same as: stack.length > 0
            // get the node from the Stack bed for treatment
            let currentNode = stack.pop();

            // visit the popped currentNode by pushing to result collection storage + mark it as visit
            if(!visitedNodeTracking[currentNode]) result.push(currentNode);
            visitedNodeTracking[currentNode] = true;

            // get the neighbor nodes of this current currentNode by accessing its adjascent list
            let neighborNodes = this.adjacencyList[currentNode];
            for (let neighbor of neighborNodes) {
                if(!visitedNodeTracking[neighbor]){
                    stack.push(neighbor);
                }
            }
        }

        return result;
    }

    depthFirstTraversalRecursive(startNode){
        let result = [];
        let visitedNodeTracking = {};
        let adjacencyList = this.adjacencyList;

        // helper function
        let dfs = function(currentNode){
            
            if(!currentNode) return null; // base case

            result.push(currentNode);
            visitedNodeTracking[currentNode] = true;

            let neighborNodes = adjacencyList[currentNode];
            for (let node of neighborNodes) {
                if(!visitedNodeTracking[node]){
                    dfs(node);
                }
            }
        }
        
        dfs(startNode);
        
        return result;
    }

    // breadth => neighbor nodes have priority first, thus use queue 
    breadthFirstTraversal(startNode){  // ****
        let result = [];
        let queue = [];
        let visitedNodeTracking = {};  // true/false

        // add start node to Queue for treatment n diagnosis
        queue.push(startNode);

        // while something is on Queue for treatment...
        while(queue.length) {  // same as: queue.length > 0
            // get the node from the Queue bed for treatment
            let currentNode = queue.shift();

            // visit the shifted currentNode by pushing to result collection storage + mark it as visit
            if(!visitedNodeTracking[currentNode]) result.push(currentNode);
            visitedNodeTracking[currentNode] = true;

            // get the neighbor nodes of this current currentNode by accessing its adjascent list
            let neighborNodes = this.adjacencyList[currentNode];
            for (let neighbor of neighborNodes) {
                if(!visitedNodeTracking[neighbor]){
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }


    // checking if there's a path between the Source/Start node and Destination/End node
    // can be implemented using BFS or DFS
    // will use BFS, thus Queue, because DFS can snake around for a long time while BFS will explore neighbor nodes
    hasPath(startNode, destNode){
        let queue = [];
        let visitedNodeTracking = {};
        
        queue.push(startNode);

        while(queue.length){
            let currentNode = queue.shift();
            visitedNodeTracking[currentNode] = true;
            
            if(currentNode === destNode) return true;
            
            for (let neighborNode of this.adjacencyList[currentNode]) {
                if(neighborNode === destNode) return true;
                
                if(!visitedNodeTracking[neighborNode]){
                    queue.push(neighborNode);
                }
            }
        }

        return false;
    }

    // building undirected graphs from edges
    // from: edge = [
    //     ["A", "B"],
    //     ["A", "C"]
    // ]
    // to: adjacencyList = {
    //     "A": ["B", "C"],
    // }
    buildGraph(edges){
        const graph = {};

        for (let edge of edges) {
            let [a, b] = edge;  // destructuring

            console.log(a, b)
            
            if(!graph[a]) graph[a] = []
            if(!graph[b]) graph[b] = []

            graph[a].push(b)
            graph[b].push(a)
        }

        return graph;
    }

}


let myGraph = new Graph();

// myGraph.addNode("elmina");
// myGraph.addNode("cape coast");
// myGraph.addNode("kaneshie");
// myGraph.addNode("taifa");

// myGraph.addEdge("elmina", "cape coast")
// myGraph.addEdge("cape coast", "kaneshie")
// myGraph.addEdge("elmina", "kaneshie")
// myGraph.addEdge("taifa", "kaneshie")
// myGraph.addEdge("taifa", "elmina")

// myGraph.removeEdge("taifa", "elmina")

// myGraph.removeNode("cape coast")


// ==== for node traversal test case =====

let myGraph2 = new Graph();

myGraph2.addNode("A")
myGraph2.addNode("B")
myGraph2.addNode("C")
myGraph2.addNode("D")
myGraph2.addNode("E")
myGraph2.addNode("F")


myGraph2.addEdge("A", "B")
// myGraph2.addEdge("A", "C")
myGraph2.addEdge("B", "D")
// myGraph2.addEdge("C", "E")
myGraph2.addEdge("D", "E")
myGraph2.addEdge("D", "F")
myGraph2.addEdge("E", "F")



//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F


console.log("ds:", myGraph2.depthFirstTraversal("A"))
console.log("ds_recur:", myGraph2.depthFirstTraversalRecursive("A"))
console.log("bs:", myGraph2.breadthFirstTraversal("A"))


let edges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["C", "E"],
]
console.log(myGraph2.buildGraph(edges));

/*

////// nb:
- in
    - for (let item of items)
    - produces the values

- of
    - for (let key in items)
    - produces the keys or index


///// Time Complexity for Traversal
Time = O(e), where e = edges....eg: A <-> B <-> C <-> D 
Space = O(n), where n = nodes

*/
