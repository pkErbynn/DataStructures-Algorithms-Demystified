
// Position/Index
// Value
// Length/Size
// position => value ....[]

// CRUD - Create, Read, Update, Delete

class CustomArray {
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
        if(this.itemCounter <= this.fixedSlot - 1){
            console.log("Adding item...");
            this.dataContainer[this.itemCounter] = item
            this.itemCounter++;
        }
        else {
            console.log("Slot is full...");
        }
    }

    // read
    get(index){
        // check if index is invalid    
        if(index < 0 || index > this.itemCounter - 1){
            console.log("Index is invalid");
            return
        }
        // when index is valid, ie. available + within boundary
        else {
            // then, get the value using the index position
            let value = this.dataContainer[index];
            return value;
        }
    }

    // update
    update(index, newValue){
        // check if index is invalid
        if(index < 0 || index > this.itemCounter - 1){
            console.log("Index is invalid");
            return
        }

        // assign new value to the old value
        this.dataContainer[index] = newValue;
    }

    // delete
    deleteAtIndex(index){
        if(index < 0 || index > this.itemCounter - 1){
            console.log("Index is invalid");
            return
        }

        const itemToDelete = this.dataContainer[index];

        // shifting
        for (let i = index; i < this.itemCounter - 1; i++) {
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

/*
let myArray = new CustomArray(3)
// let myArray = new CustomArray(10)
myArray.add(2)
myArray.add(4)
myArray.add(6)
console.log(myArray.dataContainer)
myArray.add(8)
myArray.add(18)
console.log(myArray.dataContainer)
myArray.deleteAtIndex(1)
console.log(myArray.dataContainer)
myArray.add(18)
console.log(myArray.dataContainer)

myArray.update(1, 50)
console.log(myArray.dataContainer)

let result = myArray.get(2)
// console.log(result);

result = myArray.deleteAtIndex(1);
console.log(result);
console.log(myArray.dataContainer)

result = myArray.pop();
console.log(result);
console.log(myArray.dataContainer)

*/





//////////////


// CRUD - Create, Read, Update, Delete

class CustomArrayList {
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
        if(this.itemCounter <= this.fixedSlot - 1){
            console.log("Adding item...");
            this.dataContainer[this.itemCounter] = item
            this.itemCounter++;
        }
        else {
            console.log("Slot is full, slot expanded");
            this.fixedSlot = this.fixedSlot * 2;
            this.dataContainer[this.itemCounter] = item;
            this.itemCounter++;
        }
    }

    // read
    get(index){
        // check if index is invalid    
        if(index < 0 || index > this.itemCounter - 1){
            console.log("Index is invalid");
            return
        }
        // when index is valid, ie. available + within boundary
        else {
            // then, get the value using the index position
            let value = this.dataContainer[index];
            return value;
        }
    }

    // update
    update(index, newValue){
        // check if index is invalid
        if(index < 0 || index > this.itemCounter - 1){
            console.log("Index is invalid");
            return
        }

        // assign new value to the old value
        this.dataContainer[index] = newValue;
    }

    // delete
    deleteAtIndex(index){
        if(index < 0 || index > this.itemCounter - 1){
            console.log("Index is invalid");
            return
        }

        const itemToDelete = this.dataContainer[index];

        // shifting
        for (let i = index; i < this.itemCounter - 1; i++) {
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


// let myArrayList = new CustomArrayList(3)
// // let myArrayList = new CustomArray(10)
// myArrayList.add(2)
// myArrayList.add(4)
// myArrayList.add(6)
// console.log(myArrayList.dataContainer)
// myArrayList.add(8)
// console.log(myArrayList.dataContainer)
// console.log(myArrayList.fixedSlot)
// myArrayList.add(18)
// myArrayList.deleteAtIndex(1)
// console.log(myArrayList.dataContainer)

// myArrayList.update(1, 50)
// console.log(myArrayList.dataContainer)

// result = myArrayList.get(2)
// // console.log(result);

// result = myArrayList.deleteAtIndex(1);
// console.log(result);
// console.log(myArrayList.dataContainer)

// result = myArrayList.pop();
// console.log(result);
// console.log(myArrayList.dataContainer)

