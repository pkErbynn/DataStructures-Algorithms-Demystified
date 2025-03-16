/*

Unlike regular queue shifs elements when front element is del,
...Circular queue doesn't shift elements, it just moves start pointer forward

- Queue is better for flexibility and when the size can grow dynamically.
- Circular Queue is better for fixed-size, efficient, space-saving use cases, especially in systems where performance and memory constraints are critical.
*/

class CircularQueue {
    data;
    #DEFAULT_SIZE = 5

    startPointer = 0;
    endPointer = 0;
    queueTotalItems = 0;

    constructor(size = null) {
        const queueSize = size || this.#DEFAULT_SIZE;
        this.data = new Array(queueSize);
    }

    insert(item){
        if(this.isFull()){
            console.log("Circular queue is full");
            return false;
        }

        this.data[this.endPointer] = item;
        this.endPointer++;  // moved to next slot
        this.endPointer = this.endPointer % this.data.length;   // brings pointer to front of array when endPointer goes out of boundary...otherwise, still remains as the value it was increased to in L#30
        this.queueTotalItems++;   // counter for number of items in the queue

        return true;
    }

    remove(){
        if(this.isEmpty()){
            console.log("Can't remove from empty circular queue");
            return null;
        }

        let removedItem = this.data[this.startPointer];
        this.startPointer++;    // move start pointer forward since prev start pointer will be removed

        this.startPointer = this.startPointer % this.data.length;   // keep startPointer within the data array when it goes out-of-boundary to wrap around
        this.queueTotalItems --;

        return removedItem;
    }

    isFull(){
        return this.queueTotalItems === this.data.length;
    }

    isEmpty(){
        return this.queueTotalItems === 0;
    }

    startItem(){    // front
        if(this.isEmpty()){
            console.log("Circ queue empty");
            return null;
        }
        console.log(this.data[this.startPointer]);
        return this.data[this.startPointer];
    }

    display(){
        let counter = 0;
        let currentIndex = this.startPointer;

        while (counter < this.queueTotalItems) {
            process.stdout.write(this.data[currentIndex] + "->");
            currentIndex++
            currentIndex = currentIndex % this.data.length;
            // currentIndex = ++currentIndex % this.data.length;
            counter++
        }
        
        process.stdout.write("END\n")
    }
}

let circularQueue = new CircularQueue();
circularQueue.insert(10)
circularQueue.insert(20)
circularQueue.insert(30)
circularQueue.insert(40)
circularQueue.insert(50)
circularQueue.insert(60)
circularQueue.display();
circularQueue.remove();
// circularQueue.display();
// circularQueue.startItem()



///// ======= Dynamic Circular queue