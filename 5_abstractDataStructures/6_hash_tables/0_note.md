### Intro

Unlike Arrays where items are key-value pairs    
- where key are strictly numbers
- and the keys are ordered / indexed from 0
- eg. 
```
let fruits = ["apple", "banana", "cherry"];
index/key -> value
0         -> apple
1         -> banana
2         -> cherry
```
- Keys/Indexes are always numbered from 0
- _Order means_ the indexes (keys) are in a defined, sequential order — starting from 0, then 1, 2, and so on...and the values are just placed at those positions, so their "**order" is only meaningful because the indexes are ordered**.
    - Order of the value is always maintained by the keys pattern from 0 -> 1 -> 2 so that anytime i get a particular index i can have same value, 
    - and when I the values even mix up in the array, the access pattern is still ordered from 0 -> 1 -> 2,..., (because i can't do random index access 5 -> 8) but for different values will be accessed
    - so bassically, so form of Order is maintained — that’s the whole point of arrays! and the values are stored in memory based on their index: 0 → 1 → 2 → ...and so if the values don't change, accessing array[1] will always return the same value every time.


**HashTables** also a DS that store key-value pairs in large array, and works by hashing the keys
- but the keys are not ordered/indexed
- eg:
```
let user = {
  "name": "Kwesi",
  "age": 26,
  "country": "Ghana"
};

key         -> value
"name"      -> kwesi
"age"       -> 26
"country"   -> Ghana
```
- Internally, a hash function converts these keys into array positions (not visible to us):
```
hashed key        -> value
hash("name")      -> apple
hash("age")       -> banana
hash("country")   -> cherry
```
- Keys can be any data type (string, number index, or even an object)
- Order is not guarandeed 

---

#### *Deep-Diving: 'the order'*

In arrays, the term “ordered” refers to the fact that the keys (indexes) are always strictly sequential — starting from `0` and increasing step-by-step as `1, 2, 3, 4....` This sequential structure ensures that when you access `array[2]`, for instance, it consistently returns the value stored at index 2 — as long as the data hasn’t been modified.

Now, even if you reshuffle or reorder the values within the array, the array still maintains its sequential index structure — `0 → 1 → 2 → 3...`. The actual values might have changed positions, which means that accessing `array[2]` could now return a different value than before, but the indexing pattern itself is guaranteed and preserved.

So:

> The index-driven structure is fixed, while the values may change.
The order of access is always in sequence — from index `0` onward — even if the value order has changed due to reshuffling.


<br>
In contrast, with hash tables, even though the data is also stored in an underlying array-like structure, the keys are not ordered or sequential. Instead, each key (like "name" or "country") is passed through a hash function that transforms it into a numeric value used to determine the bucket index in the internal structure.

However, this index isn't something you control or rely on directly — it could be something like `3`, `7`, `9`, `2`, etc., and it won’t follow a clean `0 → 1 → 2...` sequence like an array. What’s important is not the order of the keys, but that the same key always hashes to the same bucket, allowing consistent access to the associated value.

The major benefit here is abstraction:

- You don’t have to remember any numeric index at all.
- Instead, you use a simple, meaningful keyword (like "email"), which acts as a human-readable alias for the actual bucket location.
- This avoids the mental overhead of remembering or depending on index positions — which becomes even more helpful if values are added, removed, or shifted internally.

Final Thought:
> - Arrays are ordered in the sense that their keys (indexes) are strictly sequential, and accessing them relies on knowing the index.
>
> - Hash tables, on the other hand, are unordered, and you access values using descriptive keys (and not position/index) — the internal index is handled for you via hashing.

---

### Key Differences
- Key Types: Array is number index | HashTable is any type but usually string
- Order: Array is ordered from index 0 | HashTable is unordered, depends on the hash function
- Access pattern: Array is via index | HashTable is via key

- HashTable is **fast in all operations**
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
- uses **hash function** for the conversion of string/object(keys) into a **hash value/code**
    - that corresponse to an index in an array
        

Qualities of Good hashmap
- fast, ie constant time cus it'll be called regulary
- no collissions, ie doesn't conflict/cluster output at specifix index, but distribute uniformly
- consistent, ie same input yields same output

### Core Reason
- To get value very fast in constant time when we use the key



Hash Functions
- converts string into a number corresponding to an index in an array
- uses **hash function** for the conversion of string/object(keys) into a **hash value/code**
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
    - The **key is typically a unique identifier that is used to locate the value in the hashtable**.

- In programming, a **"keymap"** typically refers to a data structure that maps keys (such as keyboard keys) to their associated actions or functions. 
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
