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

        let rootIndex = 0;

        // root index being in range as it will be moving forward to the edge of the array length
        while(rootIndex < this.values.length){

            let rootValue = this.values[rootIndex]; // recalculate for each iteration
            let leftChildIndex = 2 * rootIndex + 1;
            let leftChildValue = this.values[leftChildIndex];
            let rightChildIndex = 2 * rootIndex + 2;
            let rightChildValue = this.values[rightChildIndex];

            // checking for children within range
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

    getValues(){
        return this.values;
    }
}


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
            } else {
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
            ) {
            swapIndex = rightChildIndex;
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
  


// =========  running median using a max heap and min heap 
class RunningMedian {
    constructor() {
        this.maxHeap = new MaxBinaryHeap(); // Left half (smaller numbers)
        this.minHeap = new MinBinaryHeap(); // Right half (larger numbers)

        console.log("\n\n=== RunningMedian ===");
        
    }

    // Add a new number and maintain the balance between the heaps
    addNumber(num) {

        // Step 1: Add the number to the appropriate heap
        if (this.maxHeap.values.length === 0 || num <= this.maxHeap.values[0]) {
            this.maxHeap.insert(num);
        } 
        else {
            this.minHeap.insert(num);
        }

        // Step 2: Balance the heaps
        if (this.maxHeap.values.length > this.minHeap.values.length + 1) {
            this.minHeap.insert(this.maxHeap.removeMax());
        }
        else if (this.minHeap.values.length > this.maxHeap.values.length) {
            this.maxHeap.insert(this.minHeap.removeMin());
        }
    }

    // Get the current median
    getMedian() {
        if (this.maxHeap.values.length > this.minHeap.values.length) {
            return this.maxHeap.values[0]; // MaxHeap has more elements
        } 
        else if (this.minHeap.values.length > this.maxHeap.values.length) {
            return this.minHeap.values[0]; // MinHeap has more elements
        } 
        else {
            // Heaps are balanced, take the average of the roots
            return (this.maxHeap.values[0] + this.minHeap.values[0]) / 2;
        }
    }
}

// Example Usage
let rm = new RunningMedian();
let medians = [];

const numbers = [3, 1, 9, 25, 12];
numbers.forEach(num => {
  rm.addNumber(num);
  medians.push(rm.getMedian())
});

console.log(`Running median: ${medians}`);
