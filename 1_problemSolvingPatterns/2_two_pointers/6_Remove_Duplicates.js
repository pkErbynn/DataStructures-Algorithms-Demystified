/*
# Problem Statement #
Given an array of sorted numbers, remove all duplicates from it.
You should not use any extra space (or array); after removing the duplicates in-place return the new length of the array.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

*/


// brute-force approach
function remove_duplicate(sortedNums){
    
    for(let index = 0; index < sortedNums.length; index++){
        let leftValue = sortedNums[index];
        let rightValue = sortedNums[index+1];

        while(leftValue === rightValue){
            sortedNums.splice(index+1, 1);  // remove current 'right' value from the array, using its index
            rightValue = sortedNums[index+1]; // update rightValue to remain its position otherwise infinite loop to remove everything
        }
    }
    return sortedNums.length;
}
console.log("x:", remove_duplicate([2, 3, 3, 3, 6, 9, 9]));


// two-pointers approach
function remove_duplicate_2pnt(sortedNums){
    let leftIndex = 0;

    for (let rightIndex = 1; rightIndex < sortedNums.length; rightIndex++) {
        let leftValue = sortedNums[leftIndex];
        let rightValue = sortedNums[rightIndex];
        
        if(leftValue === rightValue){
            continue;
        }else{
            sortedNums[leftIndex+1] = sortedNums[rightIndex];   // insert the 'right' value in-front of left-index pointer
            leftIndex++;
        }
    }

    return leftIndex+1;
}

console.log("y:", remove_duplicate_2pnt([2, 3, 3, 3, 6, 9, 9]));
console.log("y2:", remove_duplicate_2pnt([2, 2, 2, 11]));


// ======================= revisit

'use strict';

const remove_duplicate_revisit = (numbers) => {
    let leftPointer = 0;
    for (let rightPointer = 1; rightPointer < numbers.length; rightPointer++) {
        let leftElement = numbers[leftPointer];
        let rightElement = numbers[rightPointer];

        if(leftElement === rightElement) continue;  // not affect result since, on falsy of 2nd if-statement, rightPointer++ happens 
        if(leftElement !== rightElement){
            numbers[leftPointer+1] = rightElement;
            leftPointer++;
        }
    }
    // console.log("Result:", numbers.slice(0, leftPointer));
    return leftPointer + 1;
}

console.log("unique:", remove_duplicate_revisit([2, 3, 3, 3, 6, 9, 9, 1, 1, 1]));
