### Trick
- Cyclic Sort has a time complexity of O(n) since each element is visited and swapped once. 
    - can only be applied when the input array contains **integers in a specific range, typically from 1 to n**, where n is the size of the array.
    - If the array contains elements outside this range or has duplicates, the algorithm may not produce the desired sorting.

- When to use?
    - when need to sort elements
    - when given unsorted array in a given range of n
    - and array start from 1 to n, or 0 to (n-1)

- Example
    - input: [3, 4, 5, 1, 2]
    - unsorted
    - smallest element starts from 1
    - biggest element is 5
    - input array size is 5
    - no repeated element

- To determine if the Cyclic Sort pattern is suitable for a given problem, you can consider the following characteristics:
    1. Range of Elements: the array are within a specific range, typically from 1 to n or 0 to n-1, where n is the size of the array. 
        - If the elements fall within this range and there are no duplicates or missing elements, Cyclic Sort can be a good fit.
    2. In-Place Sorting Algo: meaning it doesn't require additional memory or data structures. 
        - If you need to sort the elements in-place without using extra space, Cyclic Sort can be a suitable choice.

- Watch
    - Vid tut: https://www.youtube.com/watch?v=mkI_-m0x4U4&ab_channel=JeanTheCoder
