/*

Given a string, find the length of the longest substring in it with no more than K distinct characters.

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
This problem follows the Sliding Window pattern and we can use a similar dynamic sliding window strategy as discussed previously

*/

// String="araaci", K=2
// keys == 2 and not > 2 

function longest_Substring_with_K_Distinct_Characters(str, k){
    let maxLength = Number.NEGATIVE_INFINITY;   // give -ve while looking for max positive

    let charFrequency = {}; // keeps track of the window counters...map/object used cus keys are distinct as well
    let windowStart = 0;  // 0
  
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const windowEndValue = str[windowEnd];  // 
      // populate frequency counter {}
      charFrequency[windowEndValue] = !charFrequency[windowEndValue] ? 1 : charFrequency[windowEndValue] + 1; // charFrequency = { "a": 2, c: 1 };
  
      // convert object to map to get access to key length
      while (Object.keys(charFrequency).length > k) { // 1 !> 2
        const currentWindowStartValue = str[windowStart];
        
        // update its counter by decreasing value or remove the key when counter is zero or 1
        if(charFrequency[currentWindowStartValue] >= 2){  // > 1
            charFrequency[currentWindowStartValue] = charFrequency[currentWindowStartValue] - 1;
        } 
        else {
          // count = 0, delete key-value pair from object
          // updating the "Object.keys(charFrequency).length"
            delete charFrequency[currentWindowStartValue];
        }

        // move windowStart forward
        windowStart++; // a
      }
  
      const windowLength = windowEnd - windowStart + 1; // 2 - 0 + 1 = 3
      maxLength = Math.max(maxLength, windowLength);  // 4
    }
  
    return maxLength;
}
  
// Example usage:
console.log(longest_Substring_with_K_Distinct_Characters("araaci", 2)); // Output: 4
console.log(longest_Substring_with_K_Distinct_Characters("araaci", 1)); // Output: 2
console.log(longest_Substring_with_K_Distinct_Characters("cbbebi", 3)); // Output: 5
