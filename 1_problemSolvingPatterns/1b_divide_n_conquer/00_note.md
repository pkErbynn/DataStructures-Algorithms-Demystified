#### Binary Search
- Input: SORTED input array + Searching
- Process: requires dividing the array in half
- Output: search term

##### Note: Binary Search Vs Binary Tree Search
Binary search and binary tree search are both search algorithms used in data structure problems, but they are different in several ways.

- Binary search is used to search for a particular value in a sorted array of elements. 
    - The algorithm works by repeatedly dividing the array in half and comparing the value being searched for with the middle element of the array. 
    - Depending on whether the middle element is greater than or less than the value being searched for, the search continues in the left or right half of the array, respectively. 
    - This process is repeated until the value is found or the search range is reduced to zero.

- Binary tree search, on the other hand, is used to search for a particular value in a binary tree data structure. 
    - In a binary tree, each node has at most two children, which are referred to as the left child and the right child. 
    - The tree is organized such that the left child of a node contains a value that is smaller than the node's value, and the right child contains a value that is greater than the node's value. 
    - To search for a value in a binary tree, the algorithm starts at the root node and compares the value being searched for with the node's value. 
    - Depending on whether the value is greater than or less than the node's value, the search continues in the left or right subtree, respectively. 
    - This process is repeated until the value is found or the search reaches a leaf node.
    <pre>
            7
           / \
          3   11
         / \  /  \
        1   5 9  13
    </pre>


- In summary, the main difference between binary search and binary tree search is:
    - the data structure being searched. Binary search is used to search for a value in a sorted array, while binary tree search is used to search for a value in a binary tree. 
    - Additionally, binary tree search requires traversing the tree from the root to the leaf node, whereas binary search only requires dividing the array in half.

#### The While-loop pure translation
- While I'm young I will continue to play football
    - Can be seen as:
        - Since I'm young, I'll continue to play football.
        - Until I am no longer young, I will continue to play football

- Example
    - While I'm young, I will continue to play football
    ```js
    // While I'm young, I will continue to play football => Since I'm young, I'll continue to play football.
    let age = 18; // Current age
    while (age < 30) { // Assuming "young" means under 30 years
        console.log("I will continue to play football.");
        age++; // Increment age each time (representing a year)
    }

    // Until I am no longer young, I will continue to play football
    let age = 18; // Example age
    while (age < 30) { // Assuming "young" means under 30 years
        console.log("I will continue to play football.");
        age++; // Increment age each time (representing a year)
    }

    ```