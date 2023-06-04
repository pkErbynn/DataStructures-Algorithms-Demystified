/*
Smallest Subarray with a given sum (easy)

Given an array of positive numbers and a positive number ‘S’, 
find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
Return 0, if no such subarray exists.


Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].


There is one difference though:
- we're rather dynamically finding 'k' this time around
- the size of the sliding window is not fixed.
- sliding window: cus of "contiguous subarray"
*/

function smallest_subarray_given_sum(arr, sum){
    let windowStartIndex = 0;
    let windowSum = 0;
    let windowMinLength = Infinity;

    for(let windowEndIndex = 0; windowEndIndex < arr.length; windowEndIndex++){
        windowSum = windowSum + arr[windowEndIndex];

        while(windowSum >= sum){
            const windowLength = (windowEndIndex - windowStartIndex) + 1; // +1 since it's 0-indexed 
            windowMinLength = Math.min(windowMinLength, windowLength);

            // remove current start element from current windowsum until less than sum 
            // + move start pointer forward
            windowSum = windowSum - arr[windowStartIndex];
            windowStartIndex++;
        }
    }

    if(windowMinLength == Infinity) return 0;   // if none of subarray exists
    return windowMinLength; 
}

console.log("k:", smallest_subarray_given_sum([2, 1, 5, 2, 3, 2, 8], 7));
console.log("k:", smallest_subarray_given_sum([2, 1, 5, 2, 3, 2], 7));
console.log("k:", smallest_subarray_given_sum([1, 1, 1, 2], 7));

