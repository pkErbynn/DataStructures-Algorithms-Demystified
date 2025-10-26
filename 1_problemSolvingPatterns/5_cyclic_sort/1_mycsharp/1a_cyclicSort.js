/*
Problem Statement #
We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. 
This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. 
For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

Example 1:

Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]

Example 2:

Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]

Example 3:

Input: [1, 5, 6, 4, 3, 2]
Output: [1, 2, 3, 4, 5, 6]

======

NB: 
- using any other known efficient sort algorithim will give us: O(logn) or O(nlogn) which is NOT O(n)
- the number itself is used as index for checking
*/


const cyclicSort = (numbers) => {
    let startIndexPointer = 0;

    // since array index will NOT be always increase (to jump to the next value) in each iteration,
    // only increment based on a condition, so for-loop won't be used
    // instead, while-loop will be used
    while(startIndexPointer < numbers.length){
        let currentNumber = numbers[startIndexPointer];
        let rightNumber = numbers[currentNumber - 1];   // the number value itself is used as index for checking 
         
        // keep swapping until right value at right index is found, then move pointer forward
        if(currentNumber != rightNumber && currentNumber < numbers.length){     // DON'T FORGET "WITHIN-RANGE" CONDITION
            [numbers[startIndexPointer], numbers[currentNumber - 1]] = [numbers[currentNumber - 1], numbers[startIndexPointer]];
        }
        else{
            startIndexPointer++; // move to next number only when swap didn't happen, means the number is in its correct possition
        }
    }

    return numbers;
}

console.log("Result:", cyclicSort([2, 6, 4, 3, 1, 5]));



/*

// ========= reversed condition
// ...downside: figured this algo doesn't work with subsequent improved question, findingMissing
const cyclicSort2 = (numbers) => { // ***

    let startIndexPointer = 0;

    while(numbers[startIndexPointer] < numbers.length){  // or( <= numbers.length - 1) // while number exists 'while(numbers[startIndexPointer])' won't work cus when value at that index is 0, it will evaluate to false ( if(0) = false ), use array length as range
        let currentNumber = numbers[startIndexPointer];
        let rightNumber = numbers[currentNumber - 1];   // use the current number as index

        // move pointer to next element only when the current number is at the right place
        // ...since we know eventually all the elements in the array will fall in the right place
        
        if(currentNumber == rightNumber){
            startIndexPointer++;
        }
        else if(currentNumber != rightNumber && currentNumber < numbers.length){
            [numbers[startIndexPointer], numbers[currentNumber - 1]] = [numbers[currentNumber - 1], numbers[startIndexPointer]];
            // [numbers[startIndexPointer], numbers[currentNumber - 1]] = [numbers[currentNumber - 1], numbers[startIndexPointer]];
        }
    }

    return numbers;
}

console.log("Result2:", cyclicSort2([2, 6, 4, 3, 1, 5]));

*/

/******
 * Use while loop instead of forloop cus it's not after every operation that the index moves forward
 * */