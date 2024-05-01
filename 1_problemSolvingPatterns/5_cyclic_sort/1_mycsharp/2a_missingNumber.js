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
    let index = 0;
    while(index < numbers.length){
        let currentNumber = numbers[index];
        let correctNumberThatShouldBeAtCorrectIndex = numbers[currentNumber];   // no nums[num-1], since array size is 0 to n, value 0 should be at index 0, value 1 should be at index 1, value 2 should be at index 2...

        if(currentNumber !== correctNumberThatShouldBeAtCorrectIndex && currentNumber < numbers.length){
            [numbers[index], numbers[currentNumber]] = [numbers[currentNumber], numbers[index]];    // [currentNumber, correctNumberThatShouldBeAtCorrectIndex] = [correctNumberThatShouldBeAtCorrectIndex, currentNumber]...using the values itself doesn't swap, unless index is used 
        }else {
            index += 1;
        }
    }
    console.log(numbers); // [ 0, 1, 4, 3 ]

    // find missing numbers
    // check if numbers are not same as their respective indexes, return that index as missed
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] !== i){
            return i;
        }
    }

    // Case where all elements sorted, missing element is the next element outside the array, since index starts from "i", next missing number is array.length
    // Also, Case where missing number is not found in array [1, 0, 3, 2] = [0, 1, 2,3]...means 4 is missing so return the array length
    return numbers.length;
}
console.log("R1:", findMissingNumber([4, 0, 2, 3, 1]));