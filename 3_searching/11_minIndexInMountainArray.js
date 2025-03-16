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

    if(targetIndex == -1){
        targetIndex = agnosticBinarySearch(inputArray, targetValue, peakIndexPointer + 1, inputArray.length)    // searching the other right half
    }

    return targetIndex;
}

function findPeakIndex(inputArray){
    let startPointer = 0;
    let endPointer = inputArray.length - 1;

    while (startPointer < endPointer) {
        let midPointer = Math.floor( startPointer + ( (endPointer - startPointer) / 2 ) )

        // if mid is the pivot...(p-1), p, (p-1)...3, 4, 3
        if(arr[midPointer + 1] < arr[midPointer]  &&  arr[midPointer] > arr[midPointer - 1]){
            return mid
        }
        
        // increasing
        if(inputArray[midPointer + 1] > inputArray[midPointer]){
            startPointer = midPointer + 1
        }
        // decreasing
        else if(inputArray[midPointer + 1] < inputArray[midPointer]) {
            endPointer = midPointer
        }
    }

    // peak value lies at when startPointer == endPointer
    return startPointer;
}

function agnosticBinarySearch(array, target, startPointer, endPointer) {    // agnostic => unknown sorted order, whether ascending/descending
    let isAscending = true;

    if(startPointer < endPointer){
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

console.log("find1:", findMinimumTargetIndexInMountainArray([1, 2, 3, 4, 5, 3, 1], 3));
console.log("find2:", findMinimumTargetIndexInMountainArray([0, 1, 2, 4, 2, 1], 3));
console.log("find2:", findMinimumTargetIndexInMountainArray([0, 1, 2, 4, 3, 2, 1], 3));
