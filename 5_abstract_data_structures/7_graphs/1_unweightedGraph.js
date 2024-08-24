/*

== Unweighted Graph Structure

unweightedGraph = {
    "A": ["B", "C"],
    "B": ["A", "C"],
    "C": ["D"]
}

==== NB:
- in
    - for (let item of items)
    - produces the values

- of
    - for (let key in items)
    - produces the keys or index


==== Time Complexity for Traversal
Time = O(e), where e = edges....eg: A <-> B <-> C <-> D 
Space = O(n), where n = nodes


==== List Declarations ====
- Graphs uses object of arrays
    ```
    {
        "A": [B, C],
        "B": [A, C],
    }
    ```

- HashTable uses array of arrays  
    ```
    [
        [k, v],
        [k, v],
        [k, v]
    ]

    which turns into this under the hood:
    [
        0: [k, v],
        1: [k, v],
        2: [k, v]
    ]
    ```

*/

// Building UNDIRECTED graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    ////////// building graph ////////
    
    // adding vertex/node
    // node are the keys with no value yet to create edge
    addNode(name){
        // initial new node to empty list of edges 
        if(!this.adjacencyList[name]){  // if doesn't have a value means doesn't have a key
            this.adjacencyList[name] = [];
        }
    }

    // creating connection b/n node points
    // edges comes with 2 nodes/vertices
    // undirected connection as, a -> b === b -> a
    addEdge(node1, node2){
        if(this.adjacencyList[node1]) this.adjacencyList[node1].push(node2); // push cus initialized to empty []
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
    // reminder: depth-stack => (ds), while breadth-queue => (barbeQueue)
    depthFirstTraversal(startNode){  // ****
        let result = [];
        let stack = [];
        let visitedNodeTracking = {};  // true/false...prevent cyclic loop...can use Set()

        // add start node to Stack for processing, treatment n diagnosis
        stack.push(startNode);

        // while something is on Stack for processing/treatment...
        while(stack.length) {  // same as: stack.length > 0
            // get the node from the Stack bed for treatment
            let currentNode = stack.pop();

            // visit the popped currentNode by pushing to result collection storage + mark it as visit
            if(!visitedNodeTracking[currentNode]){

                result.push(currentNode);
                visitedNodeTracking[currentNode] = true;

                // get the neighbor nodes of this current currentNode by accessing its adjascent list
                let neighborNodes = this.adjacencyList[currentNode];
                for (let neighbor of neighborNodes) {
                    if(!visitedNodeTracking[neighbor]){
                        stack.push(neighbor);
                    }
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
        let queue = []; // horizonal so use QUEUE
        let visitedNodeTracking = {};  // true/false

        // add start node to Queue for treatment n diagnosis
        queue.push(startNode);

        // while something is on Queue for treatment...
        while(queue.length) {  // same as: queue.length > 0
            // get the node from the Queue bed for treatment
            let currentNode = queue.shift();

            // visit the shifted currentNode by pushing to result collection storage + mark it as visit
            if(!visitedNodeTracking[currentNode]) {
                result.push(currentNode);
                visitedNodeTracking[currentNode] = true;

                // get the neighbor nodes of this current currentNode by accessing its adjascent list
                let neighborNodes = this.adjacencyList[currentNode];
                for (let neighbor of neighborNodes) {
                    if(!visitedNodeTracking[neighbor]){
                        queue.push(neighbor);
                    }
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
    // with input: edges = [
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


console.log("depth_search:", myGraph2.depthFirstTraversal("A"))
console.log("depth_search_recur:", myGraph2.depthFirstTraversalRecursive("A"))
console.log("breath_search:", myGraph2.breadthFirstTraversal("A"))


let edges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["C", "E"],
]
console.log(myGraph2.buildGraph(edges));

/*

==== NB:
- 'of'
    - for (let item of items)
    - produces the values

- 'in'
    - for (let key in items)
    - produces the keys or index


==== Time Complexity for Traversal
Time = O(e), where e = edges....eg: A <-> B <-> C <-> D 
Space = O(n), where n = nodes


==== List Declarations ====
- Graphs uses object of arrays
    ```
    {
        "A": [B, C],
        "B": [A, C],
    }
    ```

- HashTable uses array of arrays  
    ```
    [
        [k, v],
        [k, v],
        [k, v]
    ]

    which turns into this under the hood:
    [
        0: [k, v],
        1: [k, v],
        2: [k, v]
    ]
    ```

*/
