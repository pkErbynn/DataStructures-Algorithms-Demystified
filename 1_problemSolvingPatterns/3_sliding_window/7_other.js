/*

Problem:

You’re given an array of only 1’s and 0’s.
Task: Find the length of the longest continuous sequence (subarray) of 1’s.
Example Input:
[0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0]
Expected Output:
4 — because the longest continuous sequence of 1s is [1, 1, 1, 1].

*/

// Change implementation to js 

class Solution {
    public static void main(String[] args) {
        // Test input
        int[] arr = {0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0};

        // Call the method and print result
        System.out.println(findLongestOnes(arr)); // Expected: 4
    }

    /**
     * Returns the length of the longest sequence of consecutive 1's in the array.
     */
    public static int findLongestOnes(int[] nums) {
        int maxLength = 0; // Tracks the maximum sequence length
        int currentCount = 0; // Tracks the current sequence length

        for (int num : nums) {
            if (num == 1) {
                currentCount++; // Continue the streak
                maxLength = Math.max(maxLength, currentCount); // Update max if needed
            } else {
                currentCount = 0; // Reset when a 0 is encountered
            }
        }

        return maxLength;
    }
}


// Problem 2

Problem 2:

Provide the index of one 0 that, if it were replaced with a 1, would create the longest sequence of consecutive 1s.



