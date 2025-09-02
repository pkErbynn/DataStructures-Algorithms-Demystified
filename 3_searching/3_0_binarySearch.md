Sorted input array + search = Binary Search

NB:
Normally 
- let mid = Math.floor((start + end) / 2); works fine

But...
- If start and end are very large integers, adding them might cause **integer overflow** in some languages (like Java, C++, etc.).
- Example: if start = 2,000,000,000 and end = 2,000,000,000,
    - then (start + end) = 4,000,000,000, which is bigger than the max 32-bit integer.

Safer way
- let mid = Math.floor(start + (end - start) / 2);
    - end - start is small (fits safely).
	- Then you add it to start, avoiding **overflow**.
	- Same result, but safer.