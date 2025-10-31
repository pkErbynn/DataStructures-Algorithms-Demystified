/*

Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any 
other uppercase English character. You can perform this operation at most k times.
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

function longestSubstringWithRepeatingCharReplacement(inpString, k) {
    let leftPointer = 0;
    let maxWindowSize = 0;
    let freqMapper = {};
    let maxfreq = 0

    for (let rightPointer = 0; rightPointer < inpString.length; rightPointer++) {
        // track char occurrences
        const char = inpString[rightPointer]
        freqMapper[char] = (freqMapper[char] || 0) + 1  // access existing value then +1 or default 0 then +1
        
        // find char w/ max freq 
        maxfreq = Math.max(maxfreq, freqMapper[char]);
        
        // shrink window if number-of-char-to-change go beyond limit
            // ...rightPointer - leftPointer + 1 => current window size
            // ...windowSize - maxfreq => number of char to change
        while(((rightPointer - leftPointer + 1) - maxfreq) > k){
            leftPointer++;
            freqMapper[inpString[leftPointer]]--;  // update map for that char
        }
        
        // find max win
        let windowSize = rightPointer - leftPointer + 1;    // recalculate win size as might change
        maxWindowSize = Math.max(maxWindowSize, windowSize)
    }
    
    return maxWindowSize;
}

console.log("a1:", longestSubstringWithRepeatingCharReplacement("AABABBA", 1));
console.log("a2:", longestSubstringWithRepeatingCharReplacement("ABAB", 2));
console.log("a3:", longestSubstringWithRepeatingCharReplacement("AABABCCBCCB", 2));


/*
- Note: that since both loops move forward through the data once → TC = O(n + n) = O(n)

- When does a nested loop have O(n²) time complexity and when does it become O(n)?
    - O(n²) when: 
        - One loop repeatedly scans the whole array for each iteration of the other...ie, onr loop repeats/goes back/revisits scanned element
        - Example algos: Bubble Sort 

    - O(n) when:
        - Both loops continuesly move forward through the data only once 
        - In worse case where left pointer shrinks window from start to the right at the end (ie, zero/one size window), time complexity will still be O(n + n) = O(n)....similar to sibbling loops
        - Example algos: Sliding window, two pointers

- Pattern: slide until you go beyond the condition then strink
    - the key logic is calculating the number of char that can be replaced
*/