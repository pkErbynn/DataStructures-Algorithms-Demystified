
// Position/Index
// Value
// Length/Size
// position => value ....[]

// CRUD - Create, Read, Update, Delete

class CustomArray {
    dataContainer; // private fields
    length;  // lenght of the array

    constructor(){
        this.length = 0
        this.dataContainer = [] // storage area
    }

    // create
    add(element){
        console.log("Adding...");
        this.dataContainer[this.length] = element
        this.length++;
    }

    // read
    get(index){
        // check if index is invalid
        if(index < 0 || index >= this.dataContainer.length){
            return "Index is invalid"
        }
        
        // then, get the value using the index position
        let value = this.dataContainer[index];
        return value;
    }

    // update
    update(index, newValue){
        // check if index is invalid
        if(index < 0 || index >= this.dataContainer.length){
            return "Index is invalid"
        }
        else {
            // assign new value to the old value
            this.dataContainer[index] = newValue;
        }
    }

    // delete
    deleteAtIndex(index){
        const elementToDelete = this.dataContainer[index];

        // shifting
        for (let i = index; i < this.length - 1; i++) {
            this.dataContainer[i] = this.dataContainer[i + 1];
        }
        
        delete this.dataContainer[this.length - 1];
        
        this.length = this.length - 1;

        return elementToDelete;
    }


    // delete at last index/back
    pop(){
        this.deleteAtIndex(this.dataContainer.length - 1)
    }
}

let myArray = new CustomArray()
myArray.add(2)
myArray.add(4)
myArray.add(6)
myArray.add(8)
console.log(myArray.dataContainer)

myArray.deleteAtIndex(1)
console.log(myArray.dataContainer)
myArray.pop();
console.log(myArray.dataContainer)

