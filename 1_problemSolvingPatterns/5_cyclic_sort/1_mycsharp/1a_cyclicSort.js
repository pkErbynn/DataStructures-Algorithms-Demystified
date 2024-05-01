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

NB: using any other known sort algorithim will give us: O(logn) or O(nlogn) which is NOT O(n)
*/



const cyclicSort = (numbers) => {
    // since will not be always increase the index (to jump to the next value) in each iteration,
    // only increment based on a condition, so for-loop won't be used
    // instead, while loop will be used    
    
    let index = 0;
    while(index < numbers.length){
        let currentNumber = numbers[index];
        let rightNumber = numbers[currentNumber - 1];
        
        if(currentNumber != rightNumber && currentNumber < numbers.length){     // DON'T FORGET "WITHIN-RANGE" CONDITION
            [numbers[index], numbers[currentNumber - 1]] = [numbers[currentNumber - 1], numbers[index]];
        }
        else{
            index++;
        }
    }

    return numbers;
}

console.log("Result:", cyclicSort([2, 6, 4, 3, 1, 5]));


// ========= reversed condition

const cyclicSort2 = (numbers) => { // ***

    let index = 0;
    while(numbers[index]){  // while number exists
        let currentNumber = numbers[index];
        let rightNumber = numbers[currentNumber - 1];

        if(currentNumber == rightNumber){
            index++;
        }
        else if(currentNumber != rightNumber && currentNumber < numbers.length){
            [numbers[index], numbers[currentNumber - 1]] = [numbers[currentNumber - 1], numbers[index]];
            // [numbers[index], numbers[currentNumber - 1]] = [numbers[currentNumber - 1], numbers[index]];
        }
    }

    return numbers;
}

console.log("Result2:", cyclicSort2([2, 6, 4, 3, 1, 5]));


/******
 * Use while loop instead of forloop cus it's not after every operation that the index moves forward
 * */