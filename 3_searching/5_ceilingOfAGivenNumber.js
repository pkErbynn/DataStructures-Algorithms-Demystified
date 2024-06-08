/*
Ceiling in a sorted array

Given a sorted array and a value x, the ceiling of x is the smallest element in an array greater than or equal to x. 
Assume that the array is sorted in non-decreasing order. Write efficient functions to find the floor and ceiling of x. 
Examples : 

For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
For x = 1:    ceil  = 1
For x = 5:    ceil  = 8
For x = 0:    ceil  = 1
For x = 20:   ceil doesn't exist in array, -1

Explaination found in vid: https://youtu.be/W9QJ8HaRvJQ?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=839
*/


function binarySearch_ceiling(sortedArr, target){
    let start = 0;
    let end = sortedArr.length - 1;

    if(target > sortedArr[end])
    {
        return -1;
    }

    while(start <= end){
        
        let midIndex = Math.floor(start + (end - start) / 2);

        if(target === sortedArr[midIndex]) return midIndex;

        if(target < sortedArr[midIndex]){
            end = midIndex - 1;
        }
        else {
            start = midIndex + 1;
        }
    }

    return start;  // the index not value
}

console.log("binarySearch_ceiling:", binarySearch_ceiling([1, 2, 8, 10, 10, 12, 19], 1));
console.log("binarySearch_ceiling:", binarySearch_ceiling([1, 2, 8, 10, 10, 12, 19], 5));
console.log("binarySearch_ceiling:", binarySearch_ceiling([1, 2, 8, 10, 10, 12, 19], 0));
console.log("binarySearch_ceiling:", binarySearch_ceiling([1, 2, 8, 10, 10, 12, 19], 20));

