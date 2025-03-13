#### Sliding Window Approach
- creates a window, from one position to another
- creates subset of data that is continuous, consecutive (next to each other)
- input: unsorted data
- output: sum of subset

> Leverage SlidingWindow when dealing with problems having an array (or a LinkedList), where asked to find or calculate something among all the **contiguous subarrays** (or sublists) of a **given size**.


##### Note
The sliding window approach is commonly used in data structure questions that involve finding a maximum or minimum value, a subarray with a certain property, or a substring with a certain property.

- Useful when you are given an array, string, or some other sequence, and you need to find a subsequence or substring that satisfies certain constraints. The basic idea behind the sliding window approach is to maintain a window of elements from the sequence that satisfies the given constraints, and to slide the window over the sequence to find the optimal subsequence or substring.

- For example, consider the problem of finding the maximum sum of a subarray of length k in an array of n integers. One way to solve this problem using the sliding window approach is to start with a window of size k at the beginning of the array, and slide the window over the array one element at a time, updating the maximum sum as you go. At each step, you add the next element to the window and remove the first element from the window, so that the window always contains exactly k elements.

- The sliding window approach can also be used to solve problems that involve finding all substrings or subarrays that satisfy certain constraints. For example, if you need to find all substrings of a string that contain exactly k distinct characters, you can use the sliding window approach to maintain a window of k distinct characters and slide the window over the string to find all substrings that satisfy the constraint.


#### Frequency Counter vs 2-Pointer vs Sliding Window Approaches
This may not be entirely true but so far this is my relization:

- Realized FC, 
    - inputs: unsorted inputs(arrays, string)

- Realized 2P, pointer one starts from 0 and pointer two starts from 1 (i,e. next index) || left = 0, right = length - 1 (ie. last index)
    - inputs: mostly for sorted inputs(arrays, linkedList) + ordered string
    - pointers move towards, right or middle
    - sorted/ordered input so that pointers can move towards the middle
    - **when you think sorted, think 2-pointer**

- Realized SW, pointer 1 starts from 0 and pointer 2 also starts from 0 or anywhere
    - inputs: mostly for unsorted inputs
    - retrieves subset of the entire input **contiguously**
    - it's special kind of 2-pointer but in close boundary
