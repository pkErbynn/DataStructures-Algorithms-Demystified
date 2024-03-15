// Refactored and improved with MultiplePointers pattern


// Write a function called SumZero
// - accepts a sorted array of integers
// - it should print out (or create) the **first** pair where sum is 0
// - should return pair that is an array of both values that sum to zero
// - or should return undefined if pair doesn't exist


/*

2-pointer procedure
- INPUT: mostly one SORTED array input
- prevents from using 2 for-loops on same array
- index positions can be moved around to meet certain conditions
- sorted cus pointer move either toward the begining, MIDDLE or END based on condition
- OUTPUT: positions/indexes

*/


function sumZero(sortedArray){
    let leftIndexPointer = 0;
    let rightIndexPointer = sortedArray.length - 1;    // n-1 cus left pointer starts from 0

    while(leftIndexPointer < rightIndexPointer){
        if( (sortedArray[leftIndexPointer] + sortedArray[rightIndexPointer]) === 0){
            return [sortedArray[leftIndexPointer], sortedArray[rightIndexPointer]];
        }
        else if(sortedArray[leftIndexPointer] + sortedArray[rightIndexPointer] > 0){
            rightIndexPointer--;
        }
        else { // < 0
            leftIndexPointer++;
        }
    }
}


// sumZero([-2, -1, 0, 1, 2])
console.log(sumZero([-2, -1, 0, 1, 2]))
// sumZero([-2, 0, 1, 3])


// For this, 
// - pointers start from ends and move to the middle