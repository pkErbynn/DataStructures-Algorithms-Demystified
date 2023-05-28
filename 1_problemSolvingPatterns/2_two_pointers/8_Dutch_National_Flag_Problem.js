/*

Problem Statement #
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

Example 1:

Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]

Example 2:

Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]


===== Brute Forces

1st Approach: using a merge sort algo
    - TC: O(nlogn)
    - SC: O(1)
    - can be better? yes

2nd Approach: keeping count for unique element, and restoring element in array based on count
    - TC: O(2n) => O(n)
    - SC: O(1)
    - can be better? yes

3rd Approach: using Dutch National Flag algo, using 3 pointers
    - TC: O(n)
    - SC: O(1)

*/


const sortArrayElements = (numbers) => {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    let midPointer = 0;     // for swapping to either leftPointer/rightPointer

    while (midPointer <= rightPointer) {
        if(numbers[midPointer] === 0){
            [numbers[leftPointer], numbers[midPointer]] = [numbers[midPointer], numbers[leftPointer]];
            leftPointer++;
            midPointer++;
        }
        else if(numbers[midPointer] === 1){
            midPointer++;
        }
        else if(numbers[midPointer] === 2){
            [numbers[midPointer], numbers[rightPointer]] = [numbers[rightPointer], numbers[midPointer]];
            rightPointer--;
            midPointer++;
        }
    }
    return numbers;
}

console.log("Result:", sortArrayElements([1, 0, 2, 1, 0]));
console.log("Result2:", sortArrayElements([2, 0, 2, 1, 1, 0])); 
