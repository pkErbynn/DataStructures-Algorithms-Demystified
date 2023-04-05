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
1. Heap has an values array property
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
    insert(value){
        this.values.push(value);

        let valueIndex = this.values.length-1;
        let valueValue = this.values[valueIndex];

        let parentIndex = Math.floor((valueIndex-1)/2);
        let parentValue = this.values[parentIndex];
        // console.log('w',parentValue)
        // [this.values[parentIndex], this.values[valueIndex]] = [this.values[valueIndex], this.values[parentIndex]];

        while(valueIndex > 0){  // while it still falls within the array/tree
            // bubling up to the correct spot
            if(valueValue > parentValue) {
                [this.values[parentIndex], this.values[valueIndex]] =
                [this.values[valueIndex], this.values[parentIndex]];

                // reset parent to valueindex ....and find new parent indexes
                // moving backwards, from end of array to begining
                // subnode -> parent...parent becoming subnode...etc
                valueIndex = parentIndex;
                parentIndex = Math.floor((valueIndex-1)/2);;
            } 
            else {
                break;
            }
        }

        return this.values;
    }


    // remove root value from array/tree
    // make last element as root
    // bubble down / sink down root to its correct position
    // thus, calculating its children nodes
    extractMax(){
        // swap first and last element
        [this.values[0], this.values[this.values.length-1]] = 
            [this.values[this.values.length-1], this.values[0]];

        let extractedMax = this.values.pop();
        
        let rootIndex = 0;
        let rootValue = this.values[rootIndex];
        let leftChildIndex = 2*rootIndex + 1;
        let rightChildIndex = 2*rootIndex + 2;

        while(rootIndex < this.values.length){ // while still within the array as it bubbles down to the end
            let maxChildValue = Math.max(this.values[leftChildIndex], this.values[rightChildIndex]);
            
            if(maxChildValue > rootValue){
                let maxChildValueIndex = this.values.indexOf(maxChildValue);
                [this.values[rootIndex], this.values[maxChildValueIndex]] = [this.values[maxChildValueIndex], this.values[rootIndex]];

                // re-asign new index positions
                rootIndex = maxChildValueIndex;
                leftChildIndex = 2*rootIndex + 1;
                rightChildIndex = 2*rootIndex + 2;
            }
            else {
                break;
            }
        }
        console.log(this.values);
        return extractedMax;
    }
    
}

let mbh = new MaxBinaryHeap();
mbh.insert(55);
