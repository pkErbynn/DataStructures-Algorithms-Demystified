### In sum...
- Frequency Counter:
    - Input: unsorted array/string
    - Process: counter, frequency, occurrance
    - Output: anagram, etc
- Multiple-Pointer / 2-Pointer:
    - Input: single sorted array/string
    - Process: base on condition
    - Output: pair of element/positions
- Sliding Window:
    - Input: an array/string
    - Process: maintain the window, add and subtract
    - Output: the maximum or minimum value or a subsequence or substring that satisfies certain constraints

> Differences summary here - https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed


### Tips..
- When does a nested loop have O(n²) time complexity and when does it become O(n)?
    - O(n²) when: 
        - One loop repeatedly scans the whole array for each iteration of the other...ie, onr loop repeats/goes back/revisits scanned element
        - Example algos: Bubble Sort 

    - O(n) when:
        - Both loops continuesly move forward through the data only once
        - Example algos: Sliding window, two pointers
    