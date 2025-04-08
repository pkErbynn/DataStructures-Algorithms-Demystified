/*

// Amazon'ed
Given a mountain array mountainArr, return the MINIMUM index such that mountainValue == target. If such an index does not exist, return -1.

Example 1:

Input: mountainArr = [1,2,3,4,5,3,1], target = 3
Output: 2
Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.

Example 2:

Input: mountainArr = [0,1,2,4,2,1], target = 3
Output: -1
Explanation: 3 does not exist in the array, so we return -1.


*/


function findMinimumTargetIndexInMountainArray(inputArray, targetValue){
    let peakIndexPointer = findPeakIndex(inputArray);
    let targetIndex = agnosticBinarySearch(inputArray, targetValue, 0, peakIndexPointer)

    // search the other right half if targetValue not found at left side, then min index will fall at right side
    if(targetIndex == -1){
        targetIndex = agnosticBinarySearch(inputArray, targetValue, peakIndexPointer + 1, inputArray.length)
    }

    return targetIndex;
}

function findPeakIndex(inputArray){
    let startPointer = 0;
    let endPointer = inputArray.length - 1;

    while (startPointer < endPointer) {
        let midPointer = Math.floor( startPointer + ( (endPointer - startPointer) / 2 ) )

        // if mid is the pivot...(p-1), p, (p-1)...3, 4, 3
        if(inputArray[midPointer + 1] < inputArray[midPointer]  &&  inputArray[midPointer] > inputArray[midPointer - 1]){
            return midPointer
        }
        
        // increasing
        if(inputArray[midPointer + 1] > inputArray[midPointer]){
            startPointer = midPointer + 1
        }
        // decreasing
        else if(inputArray[midPointer + 1] <= inputArray[midPointer]) {     // if mountain can be flat, eg: [1,2,3,3,2,1]
            endPointer = midPointer
        }
        
        //// ======= Flat mountain check: When flat mountain input(1,2,3,3,2,1) is NOT ALLOWED
        // else if(inputArray[midPointer + 1] < inputArray[midPointer]) {      // what if peak part is flat, eg: [1,2,3,3,2,1]
        //     endPointer = midPointer
        // }
        // else {
        //     throw new Error("Invalid mountain array — contains plateau or flat region.");
        // }
    }

    // peak value lies at when startPointer == endPointer
    return startPointer;
}

// agnostic => unknown sorted order, whether ascending/descending
function agnosticBinarySearch(array, target, startPointer, endPointer) {
    let isAscending = true;

    if(array[startPointer] > array[endPointer]){
        isAscending = false;
    }
    
    while (startPointer <= endPointer) {
        
        let midPointer = Math.floor( startPointer + (endPointer - startPointer) / 2)

        if (target == array[midPointer]) return midPointer;


        if (isAscending){
            if (target > array[midPointer]) {
                startPointer = midPointer + 1;
            }
            else {
                endPointer = midPointer - 1;
            }
        }
        
        if (!isAscending) {
            if (target > array[midPointer]) {
                endPointer = midPointer - 1;
            }
            else {
                startPointer = midPointer + 1;
            }
        }

    }

    return -1
}

// console.log("find1:", findMinimumTargetIndexInMountainArray([1, 2, 3, 4, 5, 3, 1], 3));
// console.log("find2:", findMinimumTargetIndexInMountainArray([0, 1, 2, 4, 2, 1], 3));
// console.log("find3:", findMinimumTargetIndexInMountainArray([0, 1, 2, 4, 3, 2, 1], 3));
console.log("find0:", findMinimumTargetIndexInMountainArray([1,2,3,3,2,1], 3)); // only


/*

Peak Index in a Mountain Array
•	Key Idea: The array has one peak where values increase and then decrease.
•	    How increasing/decreasing part is detected: The check is centered around the mid index itself.
•	
    Why?
•	Since we know the array is a mountain array (it first increases then decreases), we can simply compare arr[mid] with arr[mid-1] and arr[mid+1] to determine whether:
•	    - We are at the peak (arr[mid] > arr[mid-1] and arr[mid] > arr[mid+1]).
•	    - We are in the increasing part (arr[mid] < arr[mid+1]), meaning the peak is ahead, so we move start = mid + 1.
•	    - We are in the decreasing part (arr[mid] > arr[mid+1]), meaning we might have found the peak or it’s to the left, so we move end = mid.
•	
    Why not use start as a reference?
•	In a mountain array, the start value does not help determine the trend at the current mid position.
•	The local trend (whether increasing or decreasing) depends only on mid, mid-1, and mid+1.

*/