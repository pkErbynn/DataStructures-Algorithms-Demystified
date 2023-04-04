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


The two-pointer approach is a common technique used in data structure questions that involve arrays, l
inked lists, or strings. It involves the use of two pointers, typically initialized at the beginning of the data structure, 
and moving in opposite directions or at different speeds until they meet or some other condition is met.

Here are some scenarios in which you might want to consider using the two-pointer approach:
    - When you need to "find a pair of elements in an array" that satisfy a certain condition, such as the sum of two elements being equal to a given target value. 
      In this case, you can use two pointers that start at opposite ends of the array or linked list and move towards each other until they find a pair of elements that meet the condition.
*/


function sumZero(sortedArray){
    let left = 0;
    let right = sortedArray.length - 1;

    while(left < right){
        if(sortedArray[left] + sortedArray[right] === 0){
            return [sortedArray[left], sortedArray[right]];
        }
        else if(sortedArray[left] + sortedArray[right] > 0){
            right--;
        }
        else { // < 0
            left++;
        }
    }
}

// sumZero([-2, -1, 0, 1, 2])
console.log(sumZero([-2, -1, 0, 1, 2]))
// sumZero([-2, 0, 1, 3])


// For this, 
// - pointers start from ends and move to the middle