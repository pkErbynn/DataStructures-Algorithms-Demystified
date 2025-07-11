/* 

Unlike binary search tree implemented using a node class,
Max Binary Heap can be implemented simply using ARRAY
It is usually implemented using AN ARRAY

WHY?
- 1. cus heap can be flattened into an Array
- 2. the positions of values of parent and children nodes can 
        be calculated directly within the array indexes
    - Finding children nodes, while having parent
        - left node position: (2n + 1)
        - right: (2n + 2)
    - Finding parent, while having child node
        - parent position: (n-1)/2, rounded down
- 3. since they are arranged in using Breadth-First Search approach

Psuedo Code:
In view of that, Psuedo of Heap with Array is:
1. Heap has values array as property
2. Push element to the end of the values bucket
3. Then, Bubble the element up to the correct spot

*/


class MaxBinaryHeap{
    constructor(){
        // this.values = [41, 39, 33, 18, 27, 12];
        this.values = [];
    }

    
    // add to the end of array
    // bubble up to the correct spot
    // thus, calculating its parent nodes
    insert(element){
        this.values.push(element);

        let elementIndex = this.values.length - 1;  // since it's at the back now
        let elementValue = this.values[elementIndex];   // didn't use the incomming value cus this will be dynamic from the array

        while(elementIndex > 0) {   // while it still falls within the array/tree, as element and parent move from right to left direction
            // bubling up to the correct spot

            // calculate element's parent properties: index and value from the array in each iteration
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
                break;  // do nothing and break the loop, cus that's the position the node will be placed
            }
        }

        console.log("inserted:", this.values);

        return this.values;
    }


    // first, remove root value from array/tree
    // then, make last element as current root by placing it at the top
    // now, sink down root to its correct position
    // thus, calculating its children nodes
    removeMax(){     // also called ExtractMax
        // Check if the heap is empty
        if (this.values.length === 0) {
            return null;
        }

        if (this.values.length === 1) {
            // Handle the single-element case
            const lastElement = this.values.pop(); // Remove and return the only element
            console.log("Removed Max:", lastElement);
            console.log("Heap After Removal:", this.values);
            return lastElement;
        }

        let maxElement = this.values[0];  // temp store max value

        // replace first removed-max element with last element poped, ie, swap first and last
        let lastElement = this.values.pop();
        this.values[0] = lastElement;

        // alternatively, swap first and last elements and remove the last element as the max
        // [this.values[0], this.values[this.values.length - 1]] = 
        //     [this.values[this.values.length - 1], this.values[0]];
        // let maxElement = this.values.pop();


        let rootIndex = 0;

        // root index being in range as it will be moving forward to the edge of the array length
        while(rootIndex < this.values.length){

            let rootValue = this.values[rootIndex]; // recalculate for each iteration
            let leftChildIndex = 2 * rootIndex + 1;
            let leftChildValue = this.values[leftChildIndex];
            let rightChildIndex = 2 * rootIndex + 2;
            let rightChildValue = this.values[rightChildIndex];

            // checking for children to be within range
            if(leftChildIndex >= this.values.length || rightChildIndex >= this.values.length) {
                break;
            }

            // Determine the maximum child value
            let maxChildValue = Math.max(leftChildValue, rightChildValue);

            // Determine the index of the maximum child
            let maxChildValueIndex = this.values.indexOf(maxChildValue);

            // sink down if less than children values, by swapping
            if(rootValue < maxChildValue){

                // Swap root with the maximum child
                [ this.values[rootIndex], this.values[maxChildValueIndex] ] =
                [ this.values[maxChildValueIndex], this.values[rootIndex] ];

                // move index forward (in array), and down (in tree) by reindexing via recalculation
                // the rest of the calculation are done dynamically since it's within the loop
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

     // Alt, CHANGE: var initializations outside loop
    removeMax2(){

        if (this.values.length === 0) {
            return null;
        }

        if (this.values.length === 1) {
            const lastElement = this.values.pop(); // Remove and return the only element
            console.log("Removed Max:", lastElement);
            console.log("Heap After Removal:", this.values);
            return lastElement;
        }

        let extractedMax = this.values[0];  // temp copy removable max value

        // replace first removed-max element with last element poped, ie, swap first and last
        let lastElement = this.values.pop();
        this.values[0] = lastElement;
        
        // initialize all variables before loop and recalculate in each iteration in the loop
        let rootIndex = 0;
        let rootValue = this.values[rootIndex];
        let leftChildIndex = 2*rootIndex + 1;
        let rightChildIndex = 2*rootIndex + 2;

        while(rootIndex < this.values.length){ // while still within the array as it sinks down to the bottom end

            // check if children indexes are also within array range
            if(leftChildIndex >= this.values.length || rightChildIndex >= this.values.length) {
                break;
            }

            let maxChildValue = Math.max( this.values[leftChildIndex], this.values[rightChildIndex] );
            
            if(maxChildValue > rootValue){
                let maxChildValueIndex = this.values.indexOf(maxChildValue);    // find maxChildValue index to be used for swapping
                // swap
                [this.values[rootIndex], this.values[maxChildValueIndex]] = [this.values[maxChildValueIndex], this.values[rootIndex]];

                // re-asign new index positions
                rootIndex = maxChildValueIndex;
                leftChildIndex = 2*rootIndex + 1;   // since calc are outside the while-loop, explicit recalculation is needed for most indexes
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

    getValues(){
        return this.values;
    }
}

let mbh = new MaxBinaryHeap();
mbh.insert(55);
mbh.insert(1);

// mbh.removeMax2();
mbh.removeMax();




// ===== MinHeap

class MinBinaryHeap {
    constructor() {
        // this.values = [41, 39, 33, 18, 27, 12];
        this.values = [];
        console.log("=== Min Heap initialized ===");
    }
  
    // Add a new element to the heap and maintain the min-heap property
    insert(element) {
        this.values.push(element);
    
        let elementIndex = this.values.length - 1; // Index of the new element
        let elementValue = this.values[elementIndex];
    
        while (elementIndex > 0) {
            // Calculate the parent's index and value
            let parentIndex = Math.floor((elementIndex - 1) / 2);
            let parentValue = this.values[parentIndex];
    
            // Swap if the new element is smaller than the parent
            if (elementValue < parentValue) {
                [this.values[elementIndex], this.values[parentIndex]] = 
                [this.values[parentIndex], this.values[elementIndex]];
        
                // Move up to the parent's position
                elementIndex = parentIndex;
            } 
            else {
                break; // The element is in the correct position
            }
        }
    
        console.log("Inserted:", this.values);
        return this.values;
    }
  
    // Remove the minimum element (root) and maintain the min-heap property
    removeMin() {
        if (this.values.length === 0) return null; // Empty heap
    
        if (this.values.length === 1) {
            const lastElement = this.values.pop(); // Only one element in the heap
            console.log("Removed Min:", lastElement);
            console.log("Heap After Removal:", this.values);
            return lastElement;
        }
    
        // Swap the first and last elements, and remove the last element (min)
        [this.values[0], this.values[this.values.length - 1]] = 
            [this.values[this.values.length - 1], this.values[0]];
    
        const minElement = this.values.pop();
    
        let rootIndex = 0;
    
        while (true) {
            let rootValue = this.values[rootIndex];
            let leftChildIndex = 2 * rootIndex + 1;
            let rightChildIndex = 2 * rootIndex + 2;
    
            let swapIndex = null;
    
            // Check if the left child exists and is smaller than the root
            if (leftChildIndex < this.values.length && this.values[leftChildIndex] < rootValue) {
                swapIndex = leftChildIndex;
            }
    
            // Check if the right child exists and is smaller than both the root and left child
            if (
                rightChildIndex < this.values.length &&
                this.values[rightChildIndex] < (swapIndex === null ? rootValue : this.values[leftChildIndex])
            ) 
            {
                ßswapIndex = rightChildIndex;
            }
    
            // If no swaps are needed, the root is in the correct position
            if (swapIndex === null) break;
    
            // Swap the root with the smaller child
            [this.values[rootIndex], this.values[swapIndex]] = 
            [this.values[swapIndex], this.values[rootIndex]];
    
            rootIndex = swapIndex;
        }
    
        console.log("Removed Min:", minElement);
        console.log("Heap After Removal:", this.values);
        return minElement;
    }
  
    // Get the heap values
    getValues() {
      return this.values;
    }
  }
  
// Example Usage:
let minbh = new MinBinaryHeap();
minbh.insert(10);
minbh.insert(1);
minbh.insert(15);
minbh.insert(2);
minbh.removeMin();

