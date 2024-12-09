### Core concepts ####
- String[] arr = new String[size]
    - arr are stored in Stack memory at compile time
    - object for arr is stored in the Heap and it's created at runtime
    - each element in the array is also a reference variable to an object in some memory allocation in the heap determine by the jvm
    - arr maps to a collection of reference vars 
- Premitives: int, char, boolean, float...cannot be broken down into other data structures
- Non-premitives: String, array... complex data structures, can be broken down further...string can be broken down to chars and array into individual elements 

- Dyanamic Array
    - Arrays has size at initialization, but what if we don't know the size of the array beforehand