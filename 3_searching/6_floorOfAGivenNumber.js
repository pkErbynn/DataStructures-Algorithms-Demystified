/*
Floor in a sorted array

Given a sorted array and a value x, the floor is the greatest element smaller than or equal to x. 
Assume that the array is sorted in non-decreasing order. Write efficient functions to find the floor and floor of x. 

Examples : 

For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
For x = 1:    floor  = 1
For x = 5:    floor  = 2
For x = 0:    floor doesn't exist in array, -1
For x = 20:   floor  = 19

Explaination found in vid: https://youtu.be/W9QJ8HaRvJQ?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=2084
*/


function binarySearch_floor(sortedArr, target){
    let start = 0;
    let end = sortedArr.length - 1;

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

    return end;  // the index
}

console.log("binarySearch_floor:", binarySearch_floor([1, 2, 8, 10, 10, 12, 19], 1));
console.log("binarySearch_floor:", binarySearch_floor([1, 2, 8, 10, 10, 12, 19], 5));
console.log("binarySearch_floor:", binarySearch_floor([1, 2, 8, 10, 10, 12, 19], 0));
console.log("binarySearch_floor:", binarySearch_floor([1, 2, 8, 10, 10, 12, 19], 20));

// Clue: 
// 90% of "sorted array" questions are solved with BS