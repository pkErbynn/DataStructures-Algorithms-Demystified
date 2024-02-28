/*

///////////////////  Dijkstra(Dikstra) Algo  /////////////////
- finding the shortest possible path between nodes
- uses
    - GPS: finding shortest route
    - Airline ticketing: finding cheapest route to a destination 
- so far implemented unweighted graph but to find the shortest path, weights should be associated with edges


/////// Weighted Graph Structure
weightedGraph = {
    "A": [{node: "B", weighted: 10}],
    "B": [{node: "A", weighted: 10}, {node: "C", weighted: 14}],
    "C": [{node: "B", weighted: 10}]
}

*/


// Naive Priority Queue - uses Sorting

class PriorityQueue {
    constructor(){
      this.values = [];
    }
  
    enqueue(val, priority) {
      this.values.push({val, priority}); // push({val: val, priority: priority})
      this.sort();  // called to sort by priority
    };
  
    dequeue() {
      return this.values.shift();
    };
  
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
}
  
  
class WeightedGraph {
    constructor(){
        this.adjacencyList = [];
    }

    // node are the keys with no value yet to create edge
    addNode(node){
        if(!this.adjacencyList[node]){
            this.adjacencyList[node] = [];
        }
    }

    addEdge(node1, node2, weight){
        this.adjacencyList[node1]?.push({node: node2, weight: weight});
        this.adjacencyList[node2]?.push({node: node1, weight});     // same as: {node: node2, weight: weight}
    }

    dijkstra(start, finish){
        let queueNodes = new PriorityQueue(); // to get the next smallest node base of weighted distance
        let distance = {};
        let previous = {};  // gives the final path in reverse in map form
        let path = []; // final path from start to finist

        // building initial states
        for(let node in this.adjacencyList){
            if(node === start){
                distance[node] = 0;
                queueNodes.enqueue(node, 0);
            }
            else {
                distance[node] = Infinity;
                queueNodes.enqueue(node, Infinity);
            }

            previous[node] = null;
        }

        while(queueNodes.values.length){
            let smallest = queueNodes.dequeue().val;
            if(smallest === finish){
                // build the path to return
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            console.log(smallest)
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor of this.adjacencyList[smallest]){
                    // calculate distance from neighboring node to the next neighbor node
                    // and update Distance and Previous
                    console.log(neighbor);

                    let candidate = distance[smallest] + neighbor.weight;
                    let nextNeighbor = neighbor.node;
                    if(candidate < distance[nextNeighbor]){
                        // updating distance
                        distance[nextNeighbor] = candidate;
                        // updating previous: how it got to nextNeighbor
                        previous[nextNeighbor] = smallest;
                        // update priority queue
                        queueNodes.enqueue(nextNeighbor, candidate);
                    }
                }
                
            }
        }

        let result = path.concat(start).reverse();
        return result;
    }
}
  
  
let wg = new WeightedGraph();

wg.addNode("A");
wg.addNode("B");
wg.addNode("C");
wg.addNode("D");
wg.addNode("E");
wg.addNode("F");

wg.addEdge("A","B", 4);
wg.addEdge("A","C", 2);
wg.addEdge("B","E", 3);
wg.addEdge("C","D", 2);
wg.addEdge("C","F", 4);
wg.addEdge("D","E", 3);
wg.addEdge("D","F", 1);
wg.addEdge("E","F", 1);


wg.dijkstra("A", "F");