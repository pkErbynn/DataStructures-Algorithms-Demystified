/*

LC#76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s 
such that every character in t (including duplicates) is included in the window. 
If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
NB: the order does not matter

Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Ref: https://www.youtube.com/watch?v=jSto0O4AJbM
*/

function minWindow(inpString, target) {
    if(target.length > inpString.length || target === "") return "";    // invalid

    const needTargetMap = {};
    for(let char of target){
        needTargetMap[char] = (needTargetMap[char] || 0) + 1;
    }
    const needTargetCounter = Object.keys(needTargetMap).length;

    const windowMap = {};
    let haveCounter = 0;

    let leftPointer = 0;
    let minWindow = Infinity;
    let minLeftPointerOfValidWindow = 0;

    // Input: s = "ADOBECODEBANC", t = "ABC"
    for (let rightPointer = 0; rightPointer < inpString.length; rightPointer++) {
        const char = inpString[rightPointer];
        windowMap[char] = (windowMap[char] || 0) + 1;

        if(needTargetMap.hasOwnProperty(char) && windowMap[char] === needTargetMap[char]){
            haveCounter++;
        }

        // Shrink window while all required chars are satisfied
        while (haveCounter === needTargetCounter) {
            // record min valid window
            let currentWindow = rightPointer - leftPointer + 1;
            if(currentWindow < minWindow){
                minWindow = currentWindow;
                minLeftPointerOfValidWindow = leftPointer;  // keep copy of the starting index of current smallest valid window, so that will be used for substring extraction
            }

            // strink window from left
            let leftChar = inpString[leftPointer];
            windowMap[leftChar]--;  // update map
            if(windowMap[leftChar] < needTargetMap[leftChar]){
                haveCounter--;  // update counter
            }
            leftPointer++;  // update pointer by moving forward, after minWindow, map and counter updated
        }
    }

    if(minWindow === Infinity){
        return "";
    }

    return inpString.substring(minLeftPointerOfValidWindow, minLeftPointerOfValidWindow + minWindow);
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("ADOBECODEBANC", ""));    // ""
console.log(minWindow("a", "a"));               // "a"
console.log(minWindow("a", "aa"));              // ""
