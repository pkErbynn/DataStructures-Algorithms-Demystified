/*
# Problem Statement #
Given an array of sorted numbers, remove all duplicates from it.
You should not use any extra space (or array); after removing the duplicates in-place return the new LENGTH of the array.

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
function remove_duplicate_and_return_new_length(sortedNums){
    
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
console.log("x:", remove_duplicate_and_return_new_length([2, 3, 3, 3, 6, 9, 9]));


// two-pointers optimized approach

/*
1. 1st pointer at start of array
2. 2nd pointer at the rest so can compare with the 1st pointer value
*/

function remove_duplicate_to_return_new_length_optimized2(sortedNums){  //******
    let leftIndexPointer = 0;

    for (let rightIndexPointer = 1; rightIndexPointer < sortedNums.length; rightIndexPointer++) {
        let leftValue = sortedNums[leftIndexPointer];
        let rightValue = sortedNums[rightIndexPointer];
        
        if(leftValue === rightValue) {
            continue;   // right index auto moves forward
        }

        if(leftValue !== rightValue){
            leftIndexPointer++; // then move pointer forward to stand on the position that the non-duplicate value was inserted
            sortedNums[leftIndexPointer] = sortedNums[rightIndexPointer];   // insert the 'right' value in-front of left-index pointer
        }

    }

    // console.log("Result:", numbers.slice(0, leftIndexPointer));
    return leftIndexPointer + 1;    // since array is 0 indexed
}

console.log("y2:", remove_duplicate_to_return_new_length_optimized2([2, 3, 3, 3, 6, 9, 9]));
console.log("y2:", remove_duplicate_to_return_new_length_optimized2([2, 2, 2, 11]));
// console.log("y2:", remove_duplicate_to_return_new_length_optimized2([2, 3, 5, 7, 6, 7]));  // wrong input cus needs to be sorted


function remove_duplicate_to_return_new_length_optimized(sortedNums){
    let leftIndexPointer = 0;

    for (let rightIndexPointer = 1; rightIndexPointer < sortedNums.length; rightIndexPointer++) {
        let leftValue = sortedNums[leftIndexPointer];
        let rightValue = sortedNums[rightIndexPointer];
        
        if(leftValue === rightValue){
            continue;
        }
        else{   // different values
            sortedNums[leftIndexPointer + 1] = sortedNums[rightIndexPointer];   // insert the 'right' value in-front of left-index pointer
            leftIndexPointer++; // then move pointer forward to stand on the position that the non-duplicate value was inserted
        }
    }

    // console.log("Result:", numbers.slice(0, leftIndexPointer));
    return leftIndexPointer + 1;    // since array is 0 indexed
}

console.log("y:", remove_duplicate_to_return_new_length_optimized([2, 3, 3, 3, 6, 9, 9]));
console.log("y:", remove_duplicate_to_return_new_length_optimized([2, 2, 2, 11]));
