// import { MaxBinaryHeap, MinBinaryHeap } from "./1_max_binary_heap.js";
const MaxBinaryHeap = require("./1_max_binary_heap");
const MinBinaryHeap = require("./1_min_binary_heap");

class RunningMedian {
    constructor() {
        this.maxHeap = new MaxBinaryHeap(); // Left half (smaller numbers)
        this.minHeap = new MinBinaryHeap(); // Right half (larger numbers)
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

const numbers = [3, 1, 9, 25, 12];
numbers.forEach(num => {
  rm.addNumber(num);
  console.log(`Added ${num}, running median: ${rm.getMedian()}`);
});