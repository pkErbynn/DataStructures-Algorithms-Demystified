/* 
Unlike binary search tree implemented using a node class,
Max Binary head can be implemented simply using ARRAY
It is usually implemented using AN ARRAY

WHY ?
- 1. cus heap can be flattened into an Array
- 2. the positions of values of parent and children nodes can be calculated directly within the array indexes
    - Finding children nodes, while having parent
        - left node position: (2n + 1)
        - right: (2n + 2)
    - Finding parent, while having child node
        - parent position: (n-1)/2, rounded down
- 3. since they are arranged in using Breadth-First Search approach

Psudo Code
In view of that? Psuedo of Heap with Array is:
1. Heap has values array as property
2. Push element to the end of the values bucket
3. Bubble the element up to the correct spot
*/


class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];
    }

    
    // add to the end of array
    // bubble up to the correct spot
    // thus, calculating its parent nodes
    insert(element){
        this.values.push(element);

        let elementIndex = this.values.length - 1;
        let elementValue = this.values[elementIndex];   // didn't use the incomming value cus this will be dynamic from the array

        while(elementIndex > 0) {   // while it still falls within the array/tree, as element and parent move from right to left direction
            // bubling up to the correct spot

            // calculate element's parent properties: index and value from the array each iteration
            let parentIndex = Math.floor((elementIndex - 1) / 2);
            let parentValue = this.values[parentIndex];

            // swap if element is greater than parent
            if(elementValue > parentValue){
                // swap parent n child element
                [this.values[elementIndex], this.values[parentIndex]] = 
                [this.values[parentIndex], this.values[elementIndex]];

                // move pointers backwards
                // moving backwards, from right to left, end of array to begining
                // from tree perspective, parentNode become childNode...and calculating for new parent for every iteration
                elementIndex = parentIndex;
            }
            else {
                break;
            }
        }

        console.log("insert:", this.values);

        return this.values;
    }


    // remove root value from array/tree
    // make last element as root
    // bubble down / sink down root to its correct position
    // thus, calculating its children nodes
    removeMax(){ // **
        let extractedMax = this.values[0];
        this.values[0] = this.values.pop();

        if (this.values.length === 0) {
            return null;
        }
        
        // initialize all variables before loop and recalculate in each iteration in the loop
        let rootIndex = 0;
        let rootValue = this.values[rootIndex];
        let leftChildIndex = 2*rootIndex + 1;
        let rightChildIndex = 2*rootIndex + 2;

        while(rootIndex < this.values.length){ // while still within the array as it bubbles down to the end

            // check if children indexes are also within array range
            if(leftChildIndex >= this.values.length || rightChildIndex >= this.values.length) {
                break;
            }

            let maxChildValue = Math.max( this.values[leftChildIndex], this.values[rightChildIndex] );
            
            if(maxChildValue > rootValue){
                let maxChildValueIndex = this.values.indexOf(maxChildValue);
                // swap
                [this.values[rootIndex], this.values[maxChildValueIndex]] = [this.values[maxChildValueIndex], this.values[rootIndex]];

                // re-asign new index positions
                rootIndex = maxChildValueIndex;
                leftChildIndex = 2*rootIndex + 1;   // this can be done inside the while-loop since it's recalculated each iteration
                rightChildIndex = 2*rootIndex + 2;
            }
            else {
                break;
            }
        }

        console.log("max element Removed:", extractedMax);
        console.log("max Removed Result:", this.values);
        return extractedMax;

        // Nb:
        // Variable Initialization: It's better to initialize rootValue, leftChildIndex, and rightChildIndex 
        // inside the loop, as their values will change in each iteration.
    }


    // alternative better implementation: CHANGE: var initializations inside loop

    removeMaxElement(){     // also called ExtractMax
        // Check if the heap is empty
        if (this.values.length === 0) {
            return null;
        }

        // alternatively, swap first and last elements and remove the last element as the max
        [this.values[0], this.values[this.values.length-1]] = 
            [this.values[this.values.length-1], this.values[0]];
        let maxElement = this.values.pop();

        let rootIndex = 0;

        // root index being in range as it will be moving forward to the edge of the array length
        while(rootIndex < this.values.length){

            let rootValue = this.values[rootIndex]; // recalculate for each iteration
            let leftChildIndex = 2 * rootIndex + 1;
            let leftChildValue = this.values[leftChildIndex];
            let rightChildIndex = 2 * rootIndex + 2;
            let rightChildValue = this.values[rightChildIndex];

            // Determine the maximum child value
            let maxChildValue = Math.max(leftChildValue, rightChildValue);

            // Determine the index of the maximum child
            let maxChildValueIndex = this.values.indexOf(maxChildValue);

            // sink down if less than children values, by swapping
            if(rootValue < maxChildValue){

                // Swap root with the maximum child
                [ this.values[rootIndex], this.values[maxChildValueIndex] ] =
                [ this.values[maxChildValueIndex], this.values[rootIndex] ];

                // move indexe forward (in array), and down (in tree) by reindexing via recalculation
                rootIndex = maxChildValueIndex;
            } 
            else {
                break;
            }
        }

        console.log("max element Removed:", maxElement);
        console.log("max Removed Result:", this.values);
        return maxElement;
    }

}

let mbh = new MaxBinaryHeap();
mbh.insert(55);

// mbh.removeMaxElement();
mbh.removeMax();
