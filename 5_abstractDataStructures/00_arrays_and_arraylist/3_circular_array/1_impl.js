
// CRUD - Create, Read, Update, Delete

class CustomCyclicArray {
    dataContainer; // private fields
    itemCounter;  // item count tracker
    fixedSlot;  // array initial fixed size

    constructor(fixedSlot){
        this.itemCounter = 0;
        this.fixedSlot = fixedSlot;
        this.dataContainer = [] // storage area
    }

    // create
    add(item){
        console.log("Adding item...");
        let cyclicIndex = this.itemCounter % this.fixedSlot;
        this.dataContainer[cyclicIndex] = item
        this.itemCounter++;
    }

    // read
    get(index){
        // check if index is invalid    
        if(index < 0){
            console.log("Index is invalid");
            return
        }
        // when index is valid, ie. available + within boundary
        else {
            // then, get the value using the index position
            let cyclicIndex = index % this.fixedSlot
            if(cyclicIndex > this.itemCounter){
                console.log("No item found");
                return;
            }
            let value = this.dataContainer[cyclicIndex];
            return value;
        }
    }

    // update
    update(index, newValue){
        // check if index is invalid
        if(index < 0){
            console.log("Index is invalid");
            return
        }

        let cyclicIndex = index % this.fixedSlot
        if(cyclicIndex > this.itemCounter){
            console.log("No item found");
            return;
        }
        // assign new value to the old value
        this.dataContainer[cyclicIndex] = newValue;
    }

    // delete
    deleteAtIndex(index){
        if(index < 0){
            console.log("Index is invalid");
            return
        }

        let cyclicIndex = index % this.fixedSlot;
        if(this.dataContainer[cyclicIndex] == undefined || this.dataContainer[cyclicIndex] == null)
        {
            console.log("No item found");
            return;
        }

        const itemToDelete = this.dataContainer[cyclicIndex];

        // shifting
        for (let i = cyclicIndex; i < this.itemCounter - 1; i++) {
            this.dataContainer[i] = this.dataContainer[i + 1];
        }
        
        delete this.dataContainer[this.itemCounter - 1];
        
        this.itemCounter = this.itemCounter - 1;

        return itemToDelete;
    }


    // delete at last index/back
    pop(){
        this.deleteAtIndex(this.itemCounter - 1)
    }

    // Other: shift(), unshift()
}


let myCyclicArray = new CustomCyclicArray(3)
myCyclicArray.add(2)
myCyclicArray.add(4)
myCyclicArray.add(6)
console.log(myCyclicArray.dataContainer)
myCyclicArray.add(8)
console.log(myCyclicArray.dataContainer)
// console.log(myCyclicArray.fixedSlot)
// myCyclicArray.add(18)
myCyclicArray.deleteAtIndex(1)
console.log(myCyclicArray.dataContainer)

myCyclicArray.update(1, 50)
console.log(myCyclicArray.dataContainer)
myCyclicArray.update(7, 55)
console.log(myCyclicArray.dataContainer)

result = myCyclicArray.get(12)
console.log(result);

result = myCyclicArray.deleteAtIndex(12);
console.log(result);
console.log(myCyclicArray.dataContainer)

result = myCyclicArray.pop();
console.log(result);
console.log(myCyclicArray.dataContainer)

