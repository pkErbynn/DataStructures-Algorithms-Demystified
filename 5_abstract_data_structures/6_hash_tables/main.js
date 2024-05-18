/* 

==== intro ====
Unlike Arrays where items are key-value pairs 
    - where key are strictly numbers
    - and the keys are ordered / indexed from 0
HashTables also a ds that store key-value pairs in large array, and works by hashing the keys
    - but the keys are not ordered/indexed
    - they fast in all operations
        - finding element
        - adding element
        - removing element
    - depending on the programming lang, they are called:
        - HashMap
        - Object(only strings as keys) / Maps
        - Dictionary
Vs Arrays 
    - element access
    - in arrays: 
        - color[2] = #fffff
    - in HashMaps:
        - color["white"] = #ffff
        - much better
        
=== Implementation
Hashing conceptualization
- implemented just like arrays but uses any other ds like strings
- converts string into an index, store in that array index and keep the associated value in that index
- uses hash function for the conversion of string/object into a hash value/code

Qualities of Good hashmap
- fast, ie constant time cus it'll be called regulary
    - 
- no collissions, ie doesn't conflict/cluster output at specifix index, but distribute uniformly
- consistent, ie same input yeilds same output



Hash Functions
- converts string into a number corresponding to an index in an array
- In hash functions, prime numbers reduces index collissions
- the .charCodeAt(index)
    - each character can be represented in numeric
    - eg: "a".charCodeAt(0) = 97....97 - 96 = 1

Dealing/Handling Collisions in Hash Functions
- 2 ways:
- Separate Chaining
- Linear Probing

- Separate Chaining
    - means storing multiple key-value pair data at same index using sofiscated data structure like an array/linked-list
    - iterate over the multiple data
    - eg: 
        - arr[2] = [[], []]
        - [xx, xx, [xx, xx, xx], xx]
- Linear Probing
    - means storing data in other index (either before, after) if actual index in already full

Why the name property name, KeyMap
- A hashtable is a data structure that stores key-value pairs, 
    - where the key is used to index and quickly retrieve the associated value.
    - The key is typically a unique identifier that is used to locate the value in the hashtable.

- In programming, a "keymap" typically refers to a data structure that maps keys (such as keyboard keys) to their associated actions or functions. 
    - For example, a keymap might map the "A" key to the action of typing the letter "A", and the "Enter" key to the action of submitting a form.

Class definition
- properties
    - array of size
- methods
    - setter
        1. accept key and value
        2. hash the key for hashcode(index)
        3. store key value, at hashcode, in Hashtable array via Separate Chaining
    - getter
        1. accept key
        2. hash the key for hashcode(index)
        3. lookup hashtable to retrieve key-value pair

HashTable Structure
hashTable = [
    [k, v],
    [k, v],
    [k, v]
]

*/



class HashTable {
    // max index size = [0...9], by default
    constructor(maxSize = 5) {
        this.keyMapData = new Array(maxSize); // [[k,v], [k,v], ...]
    }

    // convert sum of string's char codes into an index = [0...maxSize-1] to store data into
    // basic hash
    // _hash(keyString){
    //     let total = 0;
    //     for (let i = 0; i < keyString.length; i++) {
    //         let char = keyString[i];
    //         let numericRep = char.charCodeAt(0) - 96;  // -96 => to give actual digit rep...a=97-96=1, b=98-96=2
    //         total += numericRep;
    //     }
    //     return total % this.keyMapData.length;
    // }

    // convert sum of string's char codes into an index = [0...maxSize-1] to store data into
    // imroved with prime number + upper bound limit of 100
    _hash(keyString){
        const WEIRD_PRIME = 29;
        let total = 0;
        for (let i = 0; i < Math.min(keyString.length, 100); i++) {
            let char = keyString[i];
            let numericRep = char.charCodeAt(0) - 96;  // -96 => to give actual digit rep...a=97-96=1, b=98-96=2
            total = (total * WEIRD_PRIME) + numericRep;
        }
        return total % this.keyMapData.length;
    }

    // yet to understand
    // set(key, value){
    //     let index = this._hash(key);
    //     this.keyMapData[index] = [];  // will always clean existing data for new data
    //     this.keyMapData[index].push([key, value]);
    //     // this.keyMapData[index][key] = value;
    // }
    
    set(key, value){
        let index = this._hash(key);  // index = hashcode
        if(!this.keyMapData[index]){
            this.keyMapData[index] = [];  // initializes the index with empty array to prepare for pushing of element
        }
       
        this.keyMapData[index].push([key, value]);
    }

    get(key){
        let index = this._hash(key);

        if(this.keyMapData[index]){
            let keyValueData = this.keyMapData[index];

            for(let i = 0; i < keyValueData.length; i++){
                if(keyValueData[i][0] === key){
                    return keyValueData[i][1];
                }
            }
        }
        
        return null;
    }

    keys(){
        let allKeys = this.keyMapData.flat().map(x => x[0]);
        return allKeys;
    }

    values(){
        let allValues = this.keyMapData.flat().map(x => x[1]);
        return allValues;
    }

    
}

let ht = new HashTable();
ht.set("john", "kwesi");
ht.set("magie", "nyanba");
ht.set("raph", "nyan");
ht.set("raph", "nyan2");
ht.set("tony", "mensa");
ht.set("tony", "mensa2");



/*
=== NOTE ===
Setting key-value
    why can't the condition for checking if the index for a key-value pair is present in the data object return undifined or null or just return 
    In the add method of the HashTable class, the condition for checking if the index for a key-value pair is present in the data object is !this.data[index], which evaluates to true if this.data[index] is falsy.
    
    The reason we can't simply return undefined, null, or just return without any check is because if the index for a key-value pair doesn't exist in the data object, we need to initialize it to an empty object before adding the key-value pair to it. 
    If we simply return without any check, or return undefined or null, the code would not execute the logic to initialize the index to an empty object and would instead skip directly to assigning the key-value pair to the index. 
    This would result in a TypeError because we would be attempting to assign a value to an index that doesn't exist in the data object.
    
    Therefore, we need to check if the index for a key-value pair is present in the data object, and if it is not, initialize it to an empty object before assigning the key-value pair to it. This ensures that the code executes safely without encountering any errors.

=== Time complexities
- My implementation with manual hashing function
    The time complexity of the hash function hash(key) is O(k), where k is the length of the key. This is because it iterates through the characters of the key and performs a constant amount of work for each character.
    
    The time complexity of the add(key, value) function is O(k), where k is the length of the key. This is because it calls the hash function, which has a time complexity of O(k), and then adds the key-value pair to the hash table. Adding the key-value pair takes constant time because it involves inserting an item into an object.
    
    The time complexity of the get(key) function is O(k), where k is the length of the key. This is because it calls the hash function, which has a time complexity of O(k), and then looks up the value associated with the key in the hash table. Looking up the value takes constant time because it involves accessing an item in an object.
    
    Therefore, the time complexity of all operations in the hash table implementation is O(k), where k is the length of the key being hashed.

- If better built-in hashing with constant time used
    - insertion = o(1)
    - deletion = o(1)
    - access = o(1)

*/