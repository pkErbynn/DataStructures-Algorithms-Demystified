/*

- Used to perform fast query operation within a RANGE in an unsorted array data in an O(log n) time
    - example: find the max number between 0 and 5
    - example 2: find the sum of numbers between 0 and 5
    - example 3: find the average number between 0 and 5
- Revisit to understand better

- Vid: https://www.youtube.com/watch?v=ciHThtTVNto&t=1733s

*/

class MyNode {
    data;
    #startInterval;
    #endInterval;
    leftNode;
    rightNode;

    constructor(startInterval, endInterval) {
        this.#startInterval = startInterval;
        this.#endInterval = endInterval;
    }

    get startInterval(){
        return this.#startInterval
    }

    get endInterval(){
        return this.#endInterval
    }

}

class SegmentTree {
    #root;

    constructor(arr) {
        this.#root = this.constructTree(arr, 0, arr.length - 1)
    }

    // returns node
    constructTree(arr, start, end){
        // At the leaf node, start == end, since only one element in its range
        if(start === end){
            let leafNode = new MyNode(start, end)
            leafNode.data = arr[start]
            return leafNode;
        }

        // At everywhere else, create new node with the index you're at
        let currentNode = new MyNode(start, end);

        let mid = Math.floor( (start + end) / 2 );
        currentNode.leftNode = this.constructTree(arr, start, mid)
        currentNode.rightNode = this.constructTree(arr, mid + 1, end)

        currentNode.data = currentNode.leftNode.data + currentNode.rightNode.data;
        return currentNode;
    }

    query(queryStartIndex, queryEndIndex){
        return this.#query(this.#root, queryStartIndex, queryEndIndex)
    }

    #query(node, qsi, qei){
        // base case
        if(node == null) return 0;

        if(node.startInterval >= qsi && node.endInterval <= qei){
            // node is completely within the query
            return node.data;
        }
        else if(node.startInterval > qei || node.endInterval < qsi){
            // completely outside
            return 0;
        }
        else {
            return this.#query(node.leftNode, qsi, qei) + this.#query(node.rightNode, qsi, qei);
        }
    }

    update(index, value){
        this.#root.data = this.#update(this.#root, index, value);
    }

    #update(node, index, value){
        if (node == null) return 0; // Base case: If node is null, return 0

        if(index >= node.startInterval && index <= node.endInterval){
            // falls within the range
            if(index === node.startInterval && node.endInterval){
                node.data = value;
                return node.data;
            }
            else {
                let leftValue = this.#update(node.leftNode, index, value);
                let rightValue = this.#update(node.rightNode, index, value);
                node.data = leftValue + rightValue;
                return node.data;
            }
        }

        // out of range completely
        return node.data;
    }

    display() {
        const traverse = (node, level = 0) => {
            if (!node) return;

            // Print current node's interval and data
            console.log(
                `${" ".repeat(level * 4)}Node [${node.startInterval}, ${node.endInterval}] -> Data: ${node.data}`
            );

            // Traverse left and right nodes
            traverse(node.leftNode, level + 1);
            traverse(node.rightNode, level + 1);
        };

        traverse(this.#root);
    }


}

let arr = [3, 8, 7, 6, -2, -8, 4, 9];
let st = new SegmentTree(arr);

st.display();

let ans = st.query(2, 6)
console.log("Sum Ans:", ans);

ans = st.update(3, 14)
st.display();