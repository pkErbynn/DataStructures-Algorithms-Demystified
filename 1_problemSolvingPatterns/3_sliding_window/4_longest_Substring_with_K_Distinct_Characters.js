/*

Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".


Hint:
This problem follows the Sliding Window pattern and we can use a similar dynamic sliding window strategy as discussed previously

*/

function longest_Substring_with_K_Distinct_Characters(str, k){
    let maxLength = 0;
    let charFrequency = {};
    let windowStart = 0;
  
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
  
      while (Object.keys(charFrequency).length > k) {
        const leftChar = str[windowStart];
        charFrequency[leftChar]--;
  
        if (charFrequency[leftChar] === 0) {
          delete charFrequency[leftChar];
        }
  
        windowStart++;
      }
  
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
}
  
  // Example usage:
  console.log(longest_Substring_with_K_Distinct_Characters("araaci", 2)); // Output: 4
  console.log(longest_Substring_with_K_Distinct_Characters("araaci", 1)); // Output: 2
  console.log(longest_Substring_with_K_Distinct_Characters("cbbebi", 3)); // Output: 5