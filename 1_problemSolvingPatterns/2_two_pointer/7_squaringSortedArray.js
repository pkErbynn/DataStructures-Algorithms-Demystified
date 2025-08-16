/*
Problem Statement #
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [4, 2, 0, 4, 9] => [0, 1, 4, 4, 9]

Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]

=== impl ===
Given Ex 1: [-2, -1, 0, 2, 3]
1. Stick pointers are ends of the array 
2. Compare the pointer values - push the biggest in an array
    - guaranteed that one of them will difinitely be the biggest value amongst the entire array, since the array is sorted having the big -ve and +ve values at ends
3. Now add the biggest value to a stack using an array
    - stack because the biggest value added to the stack should be the last element when i read the entire stack's data (FistInLastOut)
    - that's why data is pushed to the beginging of the array instead of the end of the array
    - example Adding big values:
        []
        add 10: 10 -> []: ...[10]
        add 8: 8 -> [10]: ...[8, 10]
        add 7: 7 -> [8, 10]: ...[7, 8, 10]
        add 6: 6 -> [7, 8, 10]: ...[6, 7, 8, 10]

    - final result: [6, 7, 8, 10]
        - from small to big
*/


function createSquaredSortedArray(numbers) {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    let result = []; // Initialize result as an empty array and stack

    while (leftPointer <= rightPointer) {
        let leftValueSquared = numbers[leftPointer] * numbers[leftPointer];
        let rightValueSquared = numbers[rightPointer] * numbers[rightPointer];

        if (leftValueSquared <= rightValueSquared) {
            result.unshift(rightValueSquared); // Add to the beginning of the result array if less or equal to right values
            rightPointer--;     // rightPtr moves in cus it's bigger as taking a big numbers....otherwise, leftPtr
        } else {
            result.unshift(leftValueSquared); // Add to the beginning of the result array
            leftPointer++;
        }
    }

    return result;
}

console.log("createSquaredSortedArray:", createSquaredSortedArray([-2, -1, 0, 2, 3]));

/*

Time: 
    - Runs in O(n) time complexity.
Space:
    - O(n)

NB:
- an expensive computation is incured when data is huge, 
- there are efficiency concerns due to the use of unshift(), which affects performance.
- unshift(value) inserts elements at the beginning of the result array.
- Problem: 
    - Each unshift() operation rearranges all elements, making it O(n) per operation.
    - Worst-case scenario: Instead of O(n), it results in O(n²) total time complexity.
- ie. shifting made by element from left to right is expensive, since it's an array that is being used as a Stack 
    - in view of that, the next implementation fixes that, by using actual pointer to place values in the array_result

*/

const createSquaredSortedArray_optimized = (numbers) => {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    let result = new Array(numbers.length);
    let resultPointer = numbers.length - 1; // without using stack, but this is how stack is impl under-the-hood
    
    while (leftPointer <= rightPointer) {
        let leftValueSquare = numbers[leftPointer] * numbers[leftPointer];
        let rightValueSquare = numbers[rightPointer] * numbers[rightPointer];

        if(leftValueSquare > rightValueSquare){
            result[resultPointer] = leftValueSquare;
            leftPointer++;
        }
        else {
            result[resultPointer] = rightValueSquare;
            rightPointer --;
        }

        resultPointer--;    // change storage, left to right
    }
    return result;
}

console.log("createSquaredSortedArray_optimized:", createSquaredSortedArray_optimized([-2, -1, 0, 2, 3]));

/*
- why pointers didn't move together from left to right
    - cus since array is sorted, and contains +ve and -ve values, largest squared number can only come from the start/end elements
- why initialize pre-allocated size memory
    - so that largest element can be inserted to the end, thus sorting from smallest to largest

Since the numbers at both the ends can give us the largest square, could use two pointers starting at both the ends of the input array. 
At any step, whichever pointer gives us the bigger square we add it to the result array and move to the next number according to the pointer. 


Time complexity #
O(N) as we are iterating the input array only once.

Space complexity #
O(N) space used for the output array.
*/
