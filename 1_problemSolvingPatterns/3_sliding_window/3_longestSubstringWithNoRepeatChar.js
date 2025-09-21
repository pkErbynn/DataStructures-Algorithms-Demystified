/*

Problem Statement #
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".


HINT #
- This problem follows the Sliding Window pattern and we can use a similar dynamic sliding window strategy as discussed in Longest Substring with K Distinct Characters. 
- We can use a HashMap to remember the last index of each character we have processed. 
- Whenever we get a repeating character we will shrink our sliding window to ensure that we always have distinct characters in the sliding window

- Vid: https://www.youtube.com/watch?v=-zSxTJkcdAo
*/


function lengthOfLongestSubstringWithNoCharRepeat(strInput){
    let windowStartIndex = 0;
    let maxLength = 0;
    let charIndexMap = {};  // keeps track of the last-seen index of each char

    // Input: String="abccde"

    for (let windowEndIndex = 0; windowEndIndex < strInput.length; windowEndIndex++) {
        const currentChar = strInput[windowEndIndex];

        // If the character is seen again, jump the windowStart to the next index after the previous occurrence, using the mapObject {}
        if(currentChar in charIndexMap){    // (charIndexMap[currentChar]) is wrong cus if index is 0, it will evaluate to 'false' instead of 'true'
            windowStartIndex = charIndexMap[currentChar] + 1;  // when the currentChar has been seen before, adjust the window start to the next index and start a new window
            // windowStartIndex = Math.max(windowStartIndex, charIndexMap[currentChar] + 1);   // move to jump the window startPointer ref forward to (currentIndx + 1) when characters repeat.            
        }

        // Update the maximum length of the substring
        let currentWindowLength = (windowEndIndex - windowStartIndex) + 1;
        maxLength = Math.max(maxLength, currentWindowLength);

        // Track/update the last seen index of the character after window slide
        charIndexMap[currentChar] = windowEndIndex;
    }

    return {maxLength};
}

console.log(lengthOfLongestSubstringWithNoCharRepeat("aabccbb"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("abbbb"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("abccde"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("aaaaaaaa"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("abccdefhg"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("uvwxyz"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("z"));


// Using whileLoop
function lengthOfLongestSubstringWithNoCharRepeat_WhileLoop(strInput){
    let windowStartIndex = 0;
    let windowEndIndex = 0;
    let maxLength = 0;
    let charIndexMap = {};

    while (windowEndIndex <= strInput.length) {
        let currentChar = strInput[windowEndIndex];

        // Track index in hashMap
        if(currentChar in charIndexMap){
            windowStartIndex = charIndexMap[currentChar] + 1;
        }

        // Compute length
        let currentWindowLength = (windowEndIndex - windowStartIndex) + 1;
        maxLength = Math.max(maxLength, currentWindowLength);

        // Update index in Hashmap
        charIndexMap[currentChar] = windowEndIndex;

        windowEndIndex++;
    }

    return {maxLength};
}

console.log("While:",lengthOfLongestSubstringWithNoCharRepeat_WhileLoop("aabccbb"));

/*
Why use the index?: 
- tells exactly where the character was last seen, so to move the window past that point, avoiding any repeats.

Why not just the current character?: 
- Knowing only the current character doesn't help to know where it repeated, and without the index tracking with {}, extra work has to be done to figure out how far back the repetition occurred.
- Previous question(longest_Substring_with_K_Distinct_Characters()) used Occurrence as value in {} cus needed to find repeating chars somehow, but this question says 'unique' char on each subarray
- Means pointers has to move to the current new position if it's a repeat
    => use index values in {}, when NO repeat....notice: left pointer slowly moves forward stepwise
    => use frequency values in {}, repeat is okay...notice: left pointer jumps forward

Time Complexity = o(n)
    where ‘n’ = number of characters in the input string.

Space Comp = o(k) = o(1)
    where 'k' = number of distinct chars stored in hashmap

    the whole string might not have any repeating character so the entire string will be added to the HashMap. 
    Having said that, since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), 
    we can say that the algorithm runs in fixed space = O(1); 
*/

