/*

Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

Info: https://www.youtube.com/watch?v=ExY8svHF_Eo&t=961s
*/





/*
- Note: that since both loops move forward through the data once → TC = O(n) NOT O(n²)

- When does a nested loop have O(n²) time complexity and when does it become O(n)?
    - O(n²) when: 
        - One loop repeatedly scans the whole array for each iteration of the other...ie, onr loop repeats/goes back/revisits scanned element
        - Example algos: Bubble Sort 

    - O(n) when:
        - Both loops continuesly move forward through the data only once 
        - In worse case where left pointer shrinks window from start to the right at the end (ie, zero/one size window), time complexity will still be O(n + n) = O(n)....similar to sibbling loops
        - Example algos: Sliding window, two pointers
*/