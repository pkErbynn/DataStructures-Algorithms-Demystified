### Intro

Unlike Arrays where items are key-value pairs    
- where key are strictly numbers
- and the keys are ordered / indexed from 0

HashTables also a DS that store key-value pairs in large array, and works by hashing the keys
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
        
### Implementation
Hashing conceptualization
- implemented just like arrays but uses any other ds like strings
- converts string into an index, store in that array index and keep the associated value in that index
- uses hash function (hash function) for the conversion of string/object(keys) into a **hash value/code**
        

Qualities of Good hashmap
- fast, ie constant time cus it'll be called regulary
- no collissions, ie doesn't conflict/cluster output at specifix index, but distribute uniformly
- consistent, ie same input yeilds same output

### Core Reason
- To get value very fast in constant time when we use the key



Hash Functions
- converts string into a number corresponding to an index in an array
- uses hash function for the conversion of string/object(keys) into a **hash value/code**
    - all **hashcode must be represented as +ve numbers**, these numbers represent the slots locations
    - if hashcode is larger than the entire array
    - reduce it, such that to be less than and contained in the entire array, using **modulo**
        - eg: 
        ```
        Given:
            m = entire array size
        If hash("abc") = 43453, > m, then 
            hash("abc") = 43453 % m
        ```
- In hash functions, prime numbers reduces index collissions
- the .charCodeAt(index)
    - each character can be represented in numeric
    - eg: "a".charCodeAt(0) = 97....97 - 96 = 1
- Types hash functions methodologies includes:
    - Division Method (used above)
    - Multiplication Method
    - Universal hashing

Dealing/Handling Collisions in Hash Functions
- 2 ways:
- Separate Chaining (Chaining)
- Linear Probing

- Separate Chaining
    - means storing multiple key-value pair data at same index using sofiscated data structure like an array/linked-list
    - iterate over the multiple data
    - eg: 
        - arr[2] = [[], []]
        - [xx, xx, [xx, xx, xx], xx]
    - If **worse case scenario**, all keys ends in same hashcode, causing load in only one index slot,
        - Use Uniform Hashing to solve this
            - Given: m = size of entire slots
            - and n = number of elements' keys to store
            - find **load factor = n / m** = expected number of element key per slot
            - O(1)
    - Size of HashTable adjustment to optimize chaining
        - Increasing table size by 1 when full (slow, as insertion of new key is o(n^2))
            - create new array storage
            - then, copy old hashtable to it
            - then, increase size by 1
            - then, add the new element
        - Or Multiply entire size by 2 when it gets full (efficient, as insertion of new key is o(n))
            - create new array storage *2 size
            - copy old elements to it
            - then add new one, until it get full again


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
```js
hashTable = [
    [k, v],
    [k, v],
    [k, v]
]
```


### Separate Chaining Vs Linear Probing
Use Separate Chaining when:
- Handling High Load Factors: Efficiently manages a high number of collisions without degrading performance significantly.
- Flexible Hash Table Size matters: The array size doesn't need to be adjusted as frequently, since each bucket can grow independently.

Linear Probing when:
- Memory Efficiency matters: All elements are stored within the array, avoiding the need for additional data structures.
- Cache Performance: Better cache performance cus not pointer reference is required(unlike Chaining that might use linkedList).
