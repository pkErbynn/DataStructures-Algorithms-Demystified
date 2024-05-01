/*
[Hard but Starred]
Given an unsorted array containing numbers and a number ‘k’, 
find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.

Example 2:

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.

Example 3:

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.
*/



const x = smallestKMissingPositiveNumbers = (arr, numOfTimes) => {
    // cyclic sort
    // go through the array from start to finish
    let index = 0;

    while (index < arr.length) {
        const curentNumber = arr[index];
        const correctNumber = arr[curentNumber - 1];

        if(curentNumber != correctNumber 
            && curentNumber > 0 && curentNumber < arr.length ){    // considering only positive numbers in within range
            [arr[index], arr[curentNumber - 1]] = 
            [arr[curentNumber - 1], arr[index]];
        }
        else {
            index++;
        }
    }
    
    let missingValues = [];

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] != (index+1)){
            missingValues.push(index+1)
        }
    }
    console.log("missingValues:", missingValues);

    // adding extra array values to meet K times
    let arrLen = arr.length;
    
    while(missingValues.length < numOfTimes)
    {
        let nextValue = arrLen++;
        if(!arr.includes(nextValue)){
            missingValues.push(nextValue)
        }
    }

    return missingValues;

    // my algo======
    //      if an element is not at expected place based on its index
    //          swap element to move to correct place
    // once all is done, array is sorted

    // storage 
    // now, go through the sorted array
    //      if element is not expected place, store its index in storage

    // storage lenth is not up to k yet,
    //      at next number to storage, but make sure it's not found in array

    // return storage
}

console.log("final missingValues::", x([3, -1, 4, 5, 5], 3));
