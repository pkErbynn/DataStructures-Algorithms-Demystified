
## Frequency Counter Approach
- INPUT: 2 UNSORTED input arrays or strings based on condition
- prevents nexted loops
- mostly compares the two inputs that are UNSORTED
- Eg: Anagram problem
- OUTPUT: true/false

### Note
The frequency approach is a technique used in data structure questions to count or analyze the frequency of occurrences of elements in an array, string, or other data structure. 

#### scenarios to consider using the frequency approach:

- When you need to **count the occurrences of a specific element** in an array or string. 
In this case, you can create a frequency array or hashmap to keep track of the number of times each element appears in the data structure.

- When you need to find the most frequent element in an array or string. 
In this case, you can use a frequency array or hashmap to keep track of the number of times each element appears, and then find the element with the highest frequency.

- When you need to determine whether **two arrays or strings are anagrams** of each other. 
In this case, you can use two frequency arrays or hashmaps to count the occurrences of each character in each string, and then compare the frequency arrays to see if they are identical.

- When you need to find the intersection or union of two arrays. 
In this case, you can use frequency arrays or hashmaps to count the occurrences of each element in each array, and then use the counts to find the intersection or union of the two arrays.