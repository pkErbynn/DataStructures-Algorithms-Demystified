/**
 * Sachs
 * 
 * Problem:
 * 
 * You’re given an array of only 1’s and 0’s.
 * Task: Find the length of the longest continuous sequence (subarray) of 1’s.
 * 
 * Example Input:
 * [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0]
 * 
 * Expected Output:
 * 4 — because the longest continuous sequence of 1s is [1, 1, 1, 1].
 */


function findLongestOnesSlidingWindow(nums) {
    let leftPointer = 0;
    let maxWindowLen = 0;

    for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
        if (nums[rightPointer] === 0) {
            // Reset window start after a 0
            leftPointer = rightPointer + 1;
        } 
        else {
            // Update maxWindowLen as we move the rightPointer pointer
            let currentWindowSize = rightPointer - leftPointer + 1;
            maxWindowLen = Math.max(maxWindowLen, currentWindowSize);
        }
    }

    return maxWindowLen;
}

// Alternatively, Without sliding window
function findLongestOnes(nums) {
    let maxWindowLength = 0;    // Tracks the maximum sequence length
    let currentCount = 0;       // Tracks the current sequence length

    for (const num of nums) {
        if (num === 1) {
            currentCount++;     // Continue the streak
            maxWindowLength = Math.max(maxWindowLength, currentCount);  // Update max if needed
        }
        else {
            currentCount = 0; // Reset when a 0 is encountered
        }
    }

    return maxWindowLength;
}

// Test input
const input1 = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0];
console.log(findLongestOnesSlidingWindow(input1)); // Expected: 4



/**
 * Problem:
 * 
 * Provide the index of one 0 that, if it were replaced with a 1, 
 * would create the longest sequence of consecutive 1s.
 *
 * Example:
 * [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0]
 * Flipping index 10 gives longest run → [1,1,1,1,1] — length 5
 */

function findBestZeroToFlip(nums) {
    if (!nums || nums.length === 0) return -1;

    let left = 0;
    let zeroCount = 0;
    let bestIndex = -1;
    let maxWindowLen = 0;
    let lastZeroIndex = -1;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
            lastZeroIndex = right; // track the latest 0 inside the window
        }

        // Shrink window if it has more than one zero
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // If this window is the longest so far, record info
        let currentWindowSize = right - left + 1;
        if (currentWindowSize > maxWindowLen) {
            maxWindowLen = currentWindowSize;
            bestIndex = lastZeroIndex;
        }
    }

    console.log("max window length:" + maxWindowLen);
    
    return bestIndex;
}

// Test input
const input2 = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0];
console.log("Index to flip:", findBestZeroToFlip(input2)); // Expected: 10
const input3 = [0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
console.log("Index to flip2:", findBestZeroToFlip(input3)); // Expected: 0
