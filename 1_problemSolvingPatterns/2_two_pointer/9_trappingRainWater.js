/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4, 2, 0, 3, 2, 5]
Output: 9

====

NB: Vertical bars has no space b/n 'em cus it's TRAPPING H2O, spaces means leakage/drain/water-loss
vid: https://youtu.be/1_5VuquLbXg?si=6FPIba4npghZptyw

*/

function totalTrapRainWater(heights) {
    let leftPointer = 0;    // pointers
    let rightPointer = heights.length - 1;

    let leftMaxHeightValue = 0;    // max trackers
    let rightMaxHeightValue = 0;

    let totalWaterTrapped = 0;

    // Use the two-pointer approach to traverse the array from both ends towards the center
    while (leftPointer <= rightPointer) {
        
        // If the height value at the left pointer is smaller than the height at the right pointer, means water falls on the left side
        if(heights[leftPointer] <= heights[rightPointer]){

            // Note that before water is trapped, there should be a longer poll on the left of current heights[leftPointer] value, otherwise that becomes that longer poll so far

            // If the current max bar at 'left' is shorter than leftMaxHeightValue tracker, calculate trapped water
            if(leftMaxHeightValue > heights[leftPointer]){
                totalWaterTrapped += (leftMaxHeightValue - heights[leftPointer]);   // ...max l used as ref for subtraction
            }
            
            // update leftMaxHeightValue...condition not really needed
            // leftMaxHeightValue = Math.max(leftMaxHeightValue, heights[leftPointer])
            else if(leftMaxHeightValue <= heights[leftPointer]){
                leftMaxHeightValue = heights[leftPointer];     // record height value as current max left val   //....// ...max l/r is used as ref for subtraction
            }

            leftPointer++
        }

        // otherwise, water is trapped on the right side
        else if(heights[leftPointer] > heights[rightPointer]) {

            // Note that before water is actually trapped on right side, there should be a longer poll too on the right side of heights[rightPointer], otherwise that becomes that longer poll so far
            
            if(rightMaxHeightValue > heights[rightPointer]){
                totalWaterTrapped += (rightMaxHeightValue - heights[rightPointer])
            }

            else if(rightMaxHeightValue < heights[rightPointer]){
                rightMaxHeightValue = heights[rightPointer]     // record current highest height at right
            }

            rightPointer--;
        }
    }

    return totalWaterTrapped;
}

let height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log("tap:", totalTrapRainWater(height1));  // Output: 6

let height2 = [4, 2, 0, 3, 2, 5]
console.log("tap2:", totalTrapRainWater(height2));  // Output: 9

// NB: Vertical bars has no space b/n them