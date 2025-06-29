/*

Given a string, find the length of the longest substring in it with not more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with not more than '2' distinct characters is "araa".

Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with not more than '1' distinct characters is "aa".

Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with not more than '3' distinct characters are "cbbeb" & "bbebi".


Hint:
- Simply put, find the longest subarray chunk/block/window that contains only 2(ie. k) different letters 
- This problem follows the Sliding Window pattern and similar dynamic sliding window strategy can be used

What the Code Does:
- The function longest_Substring_with_K_Distinct_Characters calculates the length of the longest substring containing at most ( K ) distinct characters in a given string.
- It uses a sliding window approach with two pointers (windowStart and windowEnd) to dynamically adjust the size of the window while iterating through the string.
- A hashmap (charFrequency) is used to keep track of the frequency of characters within the current window.
- If the number of distinct characters in the window exceeds ( K ), the window is shrunk from the left by adjusting windowStart and updating the hashmap.

Algo:
- start sliding from start pointer
- Keep sliding until we get more then K diff unique letters 
- we need a way to make sure that unique elements in the window does not exceed certain threshold 
...if it does, we need to find a way to reduce the number of distinct elements during shrinkage 
...can find the len of that block and compare to prev for the max 
...also, need to keep track of the number of occurences i have in that window 
...thus, hashmap serves these purpose, where keys will be the #(distinct elements) and values as occurences 
...with this, when shrinkage happens on the left, then need to update the map's key and value occurence accordingly 

*/

// Str="araaci", K=2

function longest_Substring_with_K_Distinct_Characters(strInput, k){
  // guard clause handling edge case
  if (!strInput || k <= 0) return 0;
  
  let maxLength = Number.NEGATIVE_INFINITY;   // set smallest -ve as default while looking for max positive

  let charFrequency = {}; // keeps track of the window counters...map/object used cus keys are distinct, which can help find distinct chars's length
  let windowStart = 0;  // 0

  for (let windowEnd = 0; windowEnd < strInput.length; windowEnd++) {
    const windowEndValue = strInput[windowEnd];
    // populates frequency counter {}
    charFrequency[windowEndValue] = !charFrequency[windowEndValue] ? 1 : charFrequency[windowEndValue] + 1; // charFrequency = { "a": 2, c: 1 };

    // convert object to map to get access to key length which represent the length of distinct letters 
    // used to ensure that whenever the number of diff/unique letters is more than the k, then remove the firstEle from the window block to resize it 
    while (Object.keys(charFrequency).length > k) {
      
      const currentWindowStartValue = strInput[windowStart];
      
      // update map counter by decreasing its value or remove the key when counter is zero or 1
      if(charFrequency[currentWindowStartValue] >= 2){  // > 1
          charFrequency[currentWindowStartValue] = charFrequency[currentWindowStartValue] - 1;
      } 
      else {
        // if count = 0 or 1, delete key-value pair from object entirely
        // updating the "Object.keys(charFrequency).length"
          delete charFrequency[currentWindowStartValue];
      }
      
      /*
      
      const windowStartValue = strInput[windowStart];
      charFrequency[windowStartValue]--;

      if (charFrequency[windowStartValue] === 0) {
        delete charFrequency[windowStartValue];
      }
      
      */

      // move windowStart forward, after updating the Object{}
      windowStart++;
      
      // Update maxLength after adjusting the window
      // calc length once the number of distinct exceeds k
      const windowLength = (windowEnd - windowStart) + 1;
      maxLength = Math.max(maxLength, windowLength);  // after dealing with {} calc length
    }

  }

  return maxLength;
}
  
// Example usage:
console.log(longest_Substring_with_K_Distinct_Characters("araaci", 2)); // Output: 4
console.log(longest_Substring_with_K_Distinct_Characters("araaci", 1)); // Output: 2
console.log(longest_Substring_with_K_Distinct_Characters("cbbebi", 3)); // Output: 5
                                                                                                                                      
