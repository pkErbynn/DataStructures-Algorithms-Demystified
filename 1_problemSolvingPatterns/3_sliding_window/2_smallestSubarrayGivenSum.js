/*
=== DYNAMIC SLIDING WINDOW ===

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


There is one different:
- Previous: Find maxSum, given the number of elemeents, K
- This time, rather DYNAMICALLY finding 'K'(ie, number of elements) given the Sum
- the size of the sliding window is not fixed.

- Instead of calculating the first k-block'sum and then begin sliding then adding and removing element alongside, unlike the prev question,
- ...here, you start sliding immediately to the right, calculating the sum 
- ...as soon as the sum goes beyond the threshold,
- ...calculate the size of the current window then compare with previous size to find which has minimum len
- ...now, remove the first element it started the sliding from, then move the pointer forward so that it can start another iteration 


- sliding window: cus of "contiguous subarray"

*/


function smallest_subarray_given_sum(arr, sum){
    let windowStartIndex = 0;   // current startIndex(pointer one) at 0...// Start of the sliding window
    let windowSum = 0;  // initial sum as no slide has occurred for reculculation....// Sum of the current window
    let windowMinLength = Infinity; // set smallest subarray length right now to biggest number

    // slide windowEndIndex(pointer two) to the right...stretch window to the right until 'windowSum' becomes equal/more than input 'sum'
    for(let windowEndIndex = 0; windowEndIndex < arr.length; windowEndIndex++){

        // Add the next element to the window
        windowSum = windowSum + arr[windowEndIndex];

        // Shrink the window as small as possible while the window's sum is greater than or equal to 'sum'
        while(windowSum >= sum){
            // calculate current length of window
            // + compare window size with prev to save current minimum window
            const currentWindowLength = (windowEndIndex - windowStartIndex) + 1; // +1 since it's 0-indexed, and need +1 to get actual size
            windowMinLength = Math.min(windowMinLength, currentWindowLength);

            // reduce windowSum by removing start/begining element from current windowsum
            // then move start pointer forward after each windowSum reduction, to recalculate current minLength
            windowSum = windowSum - arr[windowStartIndex];
            windowStartIndex++;
        }
    }

    if(windowMinLength == Infinity) return 0;   // if no subarray exists, then it means my initial min length remains same as set
    
    return windowMinLength; // there exists an answer 

    // return minLength === Infinity ? 0 : minLength;
}

console.log("k1:", smallest_subarray_given_sum([2, 1, 5, 2, 3, 2, 8], 7));
console.log("k2:", smallest_subarray_given_sum([2, 1, 5, 2, 3, 2], 7));
console.log("k3:", smallest_subarray_given_sum([1, 1, 1, 2], 7));
console.log("k4:", smallest_subarray_given_sum([1, 2, 3, 4, 5], 15));   // whole array



/*

Time Complexity:
- O(n): The array is traversed only once, and each element is processed at most twice (once when expanding the window and once when shrinking it).

*/



// brute force
function smallest_subarray_given_sum_bruteforce(arr, sum) {
    let minLength = Infinity;

    // Loop over each starting point of the subarray
    for (let start = 0; start < arr.length; start++) {
        let currentSum = 0;

        // Loop to add elements and extend the subarray
        for (let end = start; end < arr.length; end++) {
            currentSum += arr[end];

            // If the sum becomes greater than or equal to 'S', check the subarray length
            if (currentSum >= sum) {
                const currentLength = end - start + 1;
                minLength = Math.min(minLength, currentLength);
                break; // Stop extending this subarray since we found a valid sum
            }
        }
    }

    // If no subarray was found, return 0
    return minLength === Infinity ? 0 : minLength;
}
// O(n^2)
console.log("l1:", smallest_subarray_given_sum_bruteforce([2, 1, 5, 2, 3, 2], 7)); // Output: 2
console.log("l2:", smallest_subarray_given_sum_bruteforce([2, 1, 5, 2, 8], 7));    // Output: 1
console.log("l3:", smallest_subarray_given_sum_bruteforce([3, 4, 1, 1, 6], 8));    // Output: 3
