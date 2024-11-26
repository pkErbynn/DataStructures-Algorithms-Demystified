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
            sortedNums.splice(index + 1, 1);  // remove current 'right' value from the array, using its index
            rightValue = sortedNums[index+1]; // update rightValue to remain its position otherwise infinite loop to remove everything
        }
    }
    return sortedNums.length;
}
console.log("x:", remove_duplicate([2, 3, 3, 3, 6, 9, 9]));


// two-pointers approach
function remove_duplicate_2pnt(sortedNums){
    let leftIndexPointer = 0;

    for (let rightIndexPointer = 1; rightIndexPointer < sortedNums.length; rightIndexPointer++) {
        let leftValue = sortedNums[leftIndexPointer];
        let rightValue = sortedNums[rightIndexPointer];
        
        if(leftValue === rightValue){
            continue;
        }else{
            sortedNums[leftIndexPointer + 1] = sortedNums[rightIndexPointer];   // insert the 'right' value in-front of left-index pointer
            leftIndexPointer++;
        }
    }

    // console.log("Result:", numbers.slice(0, leftIndexPointer));
    return leftIndexPointer+1;
}

console.log("y:", remove_duplicate_2pnt([2, 3, 3, 3, 6, 9, 9]));
console.log("y2:", remove_duplicate_2pnt([2, 2, 2, 11]));

