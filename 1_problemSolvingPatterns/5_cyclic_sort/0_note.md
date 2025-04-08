### Trick
- Cyclic Sort has a time complexity of O(n) since each element is visited and swapped once. 
    - can only be applied when the input array contains **integers in a specific range, typically from 1 to n**, where n is the size of the array.
    - If the array contains elements outside this range or has duplicates, the algorithm may not produce the desired sorting.

- When to use?
    - when need to sort elements
    - when given unsorted array in a 111
        - and array elements are **from withink range 1 to n, or 0 to (n-1)**
            - for hard questions(worse case): 
                - array contains _negative numbers_...no big deal, just swap them way to position +ve numbers to their right index position
                - element values _fall off the range by small margin_ like [2, 3, 4]...4 is beyond array length by small margin
        - and to find **missing** number(s)
        - and to find **duplicate** number(s)
    - when only O(1) space complexity is needed
    - when O(n) runtime complexity is needed

- Example
    - input: [3, 4, 5, 1, 2]
    - unsorted
    - smallest element starts from 1
    - biggest element is 5
    - input array size is also 5
    - no repeated element

- Tiime Complexity
    - Worse case: When all elements are complexity unsorted, ie. each element is in its wrong index position.
    - Eg: [3, 4, 5, 1, 2]
    - Standing at index 0, elements will be swapped to their correct index positions without moving the index
        - This means, (n - 1) swaps will be while pointer stand at index 0
    - Once swaps are made, array will be iterated making sure each element is in its correct index position
        - This takes, n iterations
    - Thus, total operations, O(n) = (n - 1) + n = 2n - 1 => **n**

- To determine if the Cyclic Sort pattern is suitable for a given problem, you can consider the following characteristics:
    1. Range of Elements: the array are within a specific range, typically from **(1 to n) or (0 to n-1)**, where n is the size of the array. 
        - If the elements fall within this range and 
        - there are no duplicates or missing elements, then 
        - Cyclic Sort can be a good fit.
    2. In-Place Sorting Algo: meaning it **doesn't require additional memory** or data structures. 
        - If you need to sort the elements in-place without using extra space, Cyclic Sort can be a suitable choice.

- Ref: https://www.youtube.com/watch?v=mkI_-m0x4U4&ab_channel=JeanTheCoder
