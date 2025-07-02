/*
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1], 
Output: 2

Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7

=== why use cyclic sort
- input range from 0 to n
- array size is of n


=== watch explaination:
- https://www.youtube.com/watch?v=JfinxytTYFQ&t=380s
*/

'use strict'

const findMissingNumber = (numbers) => {
    let startIndex = 0;

    // while the index falls within valid range 
    while(startIndex < numbers.length){
        let currentNumber = numbers[startIndex];
        let correctNumberThatShouldBeAtCorrectstartIndex = numbers[currentNumber];   // no nums[num-1], since array size is 0 to n, value 0 should be at startIndex 0, value 1 should be at startIndex 1, value 2 should be at startIndex 2...

        // since we know that some of the values in the array can not be at their right place,
        // ...this pointer movement condition will not work because 4 will not be a valid index 
        // if(currentNumber == rightNumber){
        //     startIndexPointer++;
        // }

        if(currentNumber !== correctNumberThatShouldBeAtCorrectstartIndex && currentNumber < numbers.length){
            // swap
            [numbers[startIndex], numbers[currentNumber]] = [numbers[currentNumber], numbers[startIndex]];    // [currentNumber, correctNumberThatShouldBeAtCorrectstartIndex] = [correctNumberThatShouldBeAtCorrectstartIndex, currentNumber]...using the values itself doesn't swap, unless startIndex is used 
        }
        else {
            startIndex += 1;
        }
    }
    // console.log(numbers); // [ 0, 1, 4, 3 ]

    // in finding missing number, 
    // check if numbers are not same as their respective indexes, the return that index as missed
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] !== i){   // compared to 'i', cus the input array values starts from 0
            return i;
        }
    }

    // Case where all elements sorted, missing element is the next element outside the array, since startIndex starts from "i", next missing number is array.length
    // Also, Case where missing number is not found in array [1, 0, 3, 2] = [0, 1, 2, 3]...means, 4 is missing so return the array length
    return numbers.length;
}

console.log("R1:", findMissingNumber([4, 0, 2, 3, 1]));
console.log("R2:", findMissingNumber([3, 0, 2, 1, 3]));

/*

Basic Core Algo Concepts: 
1. Swap numbers to sort
2. Then, loop through to get misplaced element/index

*/