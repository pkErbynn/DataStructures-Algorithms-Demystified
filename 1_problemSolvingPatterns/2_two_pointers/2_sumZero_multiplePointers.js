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
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while(leftIndex < rightIndex){
        if( (sortedArray[leftIndex] + sortedArray[rightIndex]) === 0){
            return [sortedArray[leftIndex], sortedArray[rightIndex]];
        }
        else if(sortedArray[leftIndex] + sortedArray[rightIndex] > 0){
            rightIndex--;
        }
        else { // < 0
            leftIndex++;
        }
    }
}

function sz(arr) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while (leftPointer < rightPointer) {
        if( (arr[leftPointer] + arr[rightPointer]) == 0){
            return [arr[leftPointer], arr[rightPointer]]
        }
        else if ( (arr[leftPointer] + arr[rightPointer]) > 0){
            rightPointer--;
        }else{
            leftPointer++;
        }
    }
}

// sumZero([-2, -1, 0, 1, 2])
console.log(sumZero([-2, -1, 0, 1, 2]))
// sumZero([-2, 0, 1, 3])

console.log(sz([-3, -2, -1, 0, 1, 2, 3]))

// For this, 
// - pointers start from ends and move to the middle