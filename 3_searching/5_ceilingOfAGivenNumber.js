/*
Ceiling in a sorted array

Given a sorted array and a value x, the ceiling of x is the smallest element in an array greater than or equal to x. 
Assume that the array is sorted in non-decreasing order. Write efficient functions to find the floor and ceiling of x. 
Examples : 

For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
For x = 1:    ceil = 1, at index 0
For x = 5:    ceil = 8, at index 2
For x = 0:    ceil = 1, at index 0
For x = 20:   ceil doesn't exist in array, -1

Further explanation: https://youtu.be/W9QJ8HaRvJQ?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=839

returns index if found
returns -1 if not found
*/


function binarySearch_ceiling(sortedArr, target){
    let start = 0;
    let end = sortedArr.length - 1;

    // target falls outside of the array
    if(target > sortedArr[end])
    {
        return -1;
    }

    while(start <= end){
        
        let midIndex = Math.floor(start + (end - start) / 2);

        if(target === sortedArr[midIndex]) return midIndex;

        // arr = [2, 3, 4, 5, 6, 7, 8]...target = 7
        //       (s)      (m)      (e)...target > m...hence, target falls on the right...hence, move s pointer further to the right
        if(target > sortedArr[midIndex]){
            start = midIndex + 1;
        }
        else {
            end = midIndex - 1;
        }
    }

    // pointer positions after loop termination as it didn't find target, ie. start > end
    // arr = [2,  3,  4,  5,  6,  7,  9]...target = 8, Result: 9 cus target is not found and ceil of 8 is 9  || target 7.5, Result: 8
    //                           (e) (s)

    return start;  // the index of the ceiling number
}

console.log("binarySearch_ceiling1:", binarySearch_ceiling([1, 2, 8, 10, 10, 12, 19], 1));
console.log("binarySearch_ceiling2:", binarySearch_ceiling([1, 2, 8, 10, 10, 12, 19], 5));
console.log("binarySearch_ceiling3:", binarySearch_ceiling([1, 2, 8, 10, 10, 12, 19], 0));
console.log("binarySearch_ceiling4:", binarySearch_ceiling([1, 2, 8, 10, 10, 12, 19], 20));

// Clue: 90% of "sorted array" questions can be solved with BS