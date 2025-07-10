### Bubble Sort
Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements that are in the wrong order. Here are some key points you may want to know about bubble sort for an interview:

- Time complexity: O(n^2) in the worst case, where n is the number of elements to be sorted. This makes it inefficient for large arrays.

- Space complexity: O(1), meaning it sorts the array in place without using any additional memory of array.

- Algorithm steps: The algorithm works by iterating through the array and comparing adjacent elements. If they are in the wrong order, they are swapped. This process is repeated until the array is sorted.

- Best-case performance: If the input array is already sorted, the best-case performance of bubble sort is O(n), which is much better than its worst-case performance.

- Usage: Bubble sort is rarely used in practice because it is less efficient than other sorting algorithms such as quicksort and mergesort. However, it has the advantage of **simplicity**, and it can be useful for educational purposes or for **sorting very small arrays**.


### Selection Sort
Selection sort is another simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and swapping it with the first element of the unsorted part. Here are some key points you may want to know about selection sort for an interview:

- Time complexity: O(n^2) in the worst case, where n is the number of elements to be sorted. This makes it inefficient for large arrays.

- Space complexity: O(1), meaning it sorts the array in place without using any additional memory.

- Algorithm steps: The algorithm works by iterating through the array and selecting the smallest element in the unsorted part of the array. It then swaps that element with the first element of the unsorted part of the array and considers the rest of the array as unsorted.

- Best-case performance: The best-case performance of selection sort is also O(n^2), which means that it does not perform better than its worst-case performance.

- Usage: Selection sort is rarely used in practice because it is less efficient than other sorting algorithms such as quicksort and mergesort. However, it has the advantage of simplicity, and it can be useful for educational purposes or for sorting very small arrays.


### Insertion Sort
Insertion sort is a simple sorting algorithm that iteratively inserts each element of an unsorted array into its correct position within a sorted subarray. Here are some key points you may want to know for an interview:

- Time complexity: O(n^2) in the worst case, where n is the number of elements to be sorted. This makes it inefficient for large arrays.

- Space complexity: O(1), meaning it sorts the array in place without using any additional memory.

- Algorithm steps: The algorithm works by iterating through each element in the array, comparing it with the elements in the sorted subarray to its left, and shifting those elements to the right until the correct position is found for the current element.

- Best-case performance: If the input array is already sorted or nearly sorted, the best-case performance of insertion sort is O(n), which is much better than its worst-case performance.

- Usage: While insertion sort may not be the most efficient sorting algorithm for large arrays, it can be useful for small arrays or for arrays that are already partially sorted. It is also used as a **subroutine in more complex sorting algorithms**, such as quicksort and mergesort.


### In Sum...
TIME COMPLEXITIES

- Bubble sort
    - Best case: o(n)   // partially sorted
    - Worse case: o(n^2)

- Selection sort
    - Best case: o(n^2)
    - Worse case: o(n^2)

- Insertion sort
    - Best case: o(n)
    - Worse case: o(n^2)

SPACE COMPLEXITIES
- Bubble, Selection, Insertion: O(1)
- Constant space cus no new memory is used to store xtra data set


CONCLUSION
- Selection sort doesn't work well for nearly sorted data
- Insertion sort is more efficientt and applicable when listening to incoming data and sorting it with existing data by placing it in the right position 