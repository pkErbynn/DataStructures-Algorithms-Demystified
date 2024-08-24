// ========

/*

Efficient Dijkstra Algorithm

Using Heap Priority Queue
    - with Node class

*/

class Node {
    constructor(value, priority){
        this.value = value; // can be a string type
        this.priority = priority;
    }
    // nb: uses class node this time around
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){   // insert
        let newNode = new Node(value, priority);
        
        this.values.push(newNode);

        let newChildNodeIndex = this.values.length - 1;
        let newChildNode = this.values[newChildNodeIndex];
        
        let parentNodeIndex = Math.floor((newChildNodeIndex - 1) / 2); // child, find parent...moving backwards, thus (n-1)/2
        let parentNode = this.values[parentNodeIndex];

        // element in array, no parent for such element
        if(!parentNode) return this.values;

        // not (parentNodeIndex > 0) this time around cus using the object value is much safer
        while(parentNode){
            if(newChildNode.priority < parentNode.priority){  // </> changes for max/min heap
                [this.values[newChildNodeIndex], this.values[parentNodeIndex]] = 
                    [this.values[parentNodeIndex], this.values[newChildNodeIndex]];
    
                // re-assign old parent becomes new child, new parent moved up
                newChildNodeIndex = parentNodeIndex;
                parentNodeIndex = Math.floor((newChildNodeIndex-1)/2);
                parentNode = this.values[parentNodeIndex];
            } else{
                break;
            }
        }
        return this.values;
    }

    dequeue(){
        if(this.values.length === 0) return null;
        // swap first n last node
        // before removing last node(first node)...if removed at start, with shift, there will be reindexing which is expensive
        let rootNodeIndex = 0;
        let lastNodeIndex = this.values.length-1;
        [this.values[rootNodeIndex], this.values[lastNodeIndex]] = 
            [this.values[lastNodeIndex], this.values[rootNodeIndex]];

        // pop last node
        let removedNode = this.values.pop();

        // calc its children
        let rootParentNode = this.values[rootNodeIndex];

        let leftChildNodeIndex = Math.floor((2*rootNodeIndex)+1);
        let leftChildNode = this.values[leftChildNodeIndex];
        let rightChildNodeIndex = Math.floor((2*rootNodeIndex)+2);
        let rightChildNode = this.values[rightChildNodeIndex];

        // while there are children nodes, 
            // new root node is less than one of its children, bubble down to the correct position
        // conditioning leftChildNode because if there's any child node, the left node will be created first
        while(leftChildNode){
             // find highest priority child node to compare w/ parent node
            let smallestButHighPriority, 
                smallestButHighPriorityNodeIndex, 
                smallestButHighPriorityNode;
            if(!rightChildNode ){  // means one-left child node only, since new node are queued to left first
                smallestButHighPriority = leftChildNode.priority;
                smallestButHighPriorityNodeIndex = leftChildNodeIndex;
                smallestButHighPriorityNode = this.values[smallestButHighPriorityNodeIndex];
            } 
            else {
            // else if(rightChildNodeIndex < this.values.length) {
                smallestButHighPriority = Math.min(leftChildNode.priority, rightChildNode.priority);
                smallestButHighPriorityNodeIndex = smallestButHighPriority === leftChildNode.priority ? 
                    leftChildNodeIndex : rightChildNodeIndex; // instead of using indexOf();
                smallestButHighPriorityNode = this.values[smallestButHighPriorityNodeIndex];
            }
            
            // if child node has min/higher priority than parent, swap
            if(smallestButHighPriorityNode.priority < rootParentNode.priority){
                [this.values[rootNodeIndex], this.values[smallestButHighPriorityNodeIndex]] = 
                    [this.values[smallestButHighPriorityNodeIndex], this.values[rootNodeIndex]];

                // re-assign/reset parent n childrent
                rootNodeIndex = smallestButHighPriorityNodeIndex;
                leftChildNodeIndex = Math.floor((2*rootNodeIndex)+1);
                leftChildNode = this.values[leftChildNodeIndex];
                rightChildNodeIndex = Math.floor((2*rootNodeIndex)+2);
                rightChildNode = this.values[rightChildNodeIndex];

                rootParentNode = this.values[rootNodeIndex];
                if(!rootParentNode) break;
                

            } else {
                break;
            }
            
        }
       
        // done: return popped node
        // console.log(this.values);
        return removedNode;
        
    }

}


class WeightedGraph {
    constructor(){
        this.adjacencyList = [];
    }

    addNode(node){
        if(!this.adjacencyList[node]){
            this.adjacencyList[node] = [];
        }
    }

    addEdge(node1, node2, weight){
        this.adjacencyList[node1]?.push({node: node2, weight: weight});
        this.adjacencyList[node2]?.push({node: node1, weight: weight});
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
            let smallest = queueNodes.dequeue().value;
            if(smallest === finish){
                // build the path to return
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            // console.log(smallest)
            if(smallest || distance[smallest] !== Infinity){
                for(let neighbor of this.adjacencyList[smallest]){
                    // calculate distance from neighboring node to the next neighbor node
                    // and update Distance and Previous
                    // console.log(neighbor);

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


console.log(wg.dijkstra("A", "F"));