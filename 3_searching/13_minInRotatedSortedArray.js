/*

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

*/

// https://www.youtube.com/watch?v=nhEMDKMB44g&ab_channel=takeUforward


const minRotatedSortedValue = function(array) {
    
    let minValue = Number.MAX_VALUE;
    let leftPtr = 0;
    let rightPtr = array.length - 1;

    while (leftPtr <= rightPtr) {
        
        let midPtr = Math.floor((leftPtr + rightPtr) / 2);

        // optimization: for fully sorted array, first value is simply the min
        if(array[leftPtr] <= array[rightPtr]){
            return array[leftPtr]
        }
        // if(array[leftPtr] <= array[rightPtr]){
        //     minValue = Math.min(minValue, array[leftPtr])
        //     break
        // }

        // find sorted part and find the min value
        if(array[leftPtr] <= array[midPtr]){
            minValue = Math.min(minValue, array[leftPtr])
            leftPtr = midPtr + 1;
        }

        // when mid pointer value is smaller, then it will be the current min...and it means small numbers are on the right to move pointer there
        else {
            minValue = Math.min(minValue, array[midPtr])
            rightPtr = midPtr - 1;
        }
    }

    return minValue;
}

console.log("minRotatedSortedValue:", minRotatedSortedValue([3, 4, 5, 1, 2]));
console.log("minRotatedSortedValue2:", minRotatedSortedValue([4, 5, 6, 7, 0, 1, 2]));
console.log("minRotatedSortedValue3:", minRotatedSortedValue([0, 1, 2, 3, 4]));


/////////// ======= Next Question: Finding Max value in rotated search array => finding Pivot

const findPiiiivot = function(array) {
    
    let maxValue = Number.MIN_VALUE;
    let leftPtr = 0;
    let rightPtr = array.length - 1;

    while (leftPtr <= rightPtr) {
        
        let midPtr = Math.floor((leftPtr + rightPtr) / 2);

        // optimization: for fully sorted array, first value is simply the min
        // if(array[leftPtr] <= array[rightPtr]){
        //     return array[leftPtr]
        // }
        if(array[leftPtr] <= array[rightPtr]){
            maxValue = Math.max(maxValue, array[rightPtr])
            break
        }

        if(array[leftPtr] <= array[midPtr]){
            maxValue = Math.max(maxValue, array[midPtr])
            leftPtr = midPtr + 1;
        }

        else {
            maxValue = Math.max(maxValue, array[leftPtr])
            rightPtr = midPtr - 1;
        }
    }

    return maxValue;
}

console.log("findPiiiivot1:", findPiiiivot([4, 5, 6, 7, 0, 1, 2]));
console.log("findPiiiivot2:", findPiiiivot([6, 7, 0, 1, 2, 4]));
console.log("findPiiiivot3:", findPiiiivot([7, 0, 1, 2, 4, 6]));
console.log("findPiiiivot4:", findPiiiivot([0, 1, 2, 4, 6, 7]));


