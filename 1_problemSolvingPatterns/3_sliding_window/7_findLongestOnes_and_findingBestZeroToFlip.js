
/**
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

function findLongestOnes(nums) {
    let maxLength = 0; // Tracks the maximum sequence length
    let currentCount = 0; // Tracks the current sequence length

    for (const num of nums) {
        if (num === 1) {
            currentCount++; // Continue the streak
            maxLength = Math.max(maxLength, currentCount); // Update max if needed
        } else {
            currentCount = 0; // Reset when a 0 is encountered
        }
    }

    return maxLength;
}

// Test input
const input1 = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0];
console.log(findLongestOnes(input1)); // Expected: 4



/**
 * Problem:
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
    let maxLen = 0;
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
        let windowSize = right - left + 1;
        if (windowSize > maxLen) {
            maxLen = windowSize;
            bestIndex = lastZeroIndex;
        }
    }

    return bestIndex;
}

// Test input
const input2 = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0];
console.log("Index to flip:", findBestZeroToFlip(input2)); // Expected: 10


