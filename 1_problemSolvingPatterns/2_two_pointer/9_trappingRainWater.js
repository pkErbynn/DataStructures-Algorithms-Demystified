/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

*/

function trapRainWater(heights) {
    let leftPointer = 0;    // pointers
    let rightPointer = heights.length - 1;

    let leftMaxHeightValue = 0;    // max trackers
    let rightMaxHeightValue = 0;

    let waterTappings = 0;

    // Use the two-pointer approach to traverse the array from both ends towards the center
    while (leftPointer <= rightPointer) {
        
        // If the height value at the left pointer is smaller than the height at the right pointer, means water falls on the left side
        if(heights[leftPointer] <= heights[rightPointer]){

            // If the current max bar at 'left' is shorter than leftMaxHeightValue tracker, calculate trapped water
            if(leftMaxHeightValue > heights[leftPointer]){
                waterTappings += (leftMaxHeightValue - heights[leftPointer]);
            }
            
            // update leftMaxHeightValue
            else if(leftMaxHeightValue <= heights[leftPointer]){
                leftMaxHeightValue = heights[leftPointer];     // record height value as current max left val
            }

            leftPointer++
        }

        else if(heights[leftPointer] > heights[rightPointer]) {
            if(rightMaxHeightValue > heights[rightPointer]){
                waterTappings += (rightMaxHeightValue - heights[rightPointer])
            }

            else if(rightMaxHeightValue < heights[rightPointer]){
                rightMaxHeightValue = heights[rightPointer]     // record current highest height at right
            }

            rightPointer--;
        }
    }

    return waterTappings;
}

let height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log("tap:", trapRainWater(height1));  // Output: 6

let height2 = [4, 2, 0, 3, 2, 5]
console.log("tap2:", trapRainWater(height2));  // Output: 9