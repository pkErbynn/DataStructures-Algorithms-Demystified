/*

Problem Statement (Easy) #
Given an array containing 0s, 1s and 2s, sort the array in-place. 
You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

Example 1:

Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]

Example 2:

Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]


===== Brute Forces

1st Approach: using a merge sort algo
    - TC: O(n log n)
    - SC: O(1)
    - can be better? yes

2nd Approach: keeping count for unique element, and restoring element in array based on count
    - TC: O(2n) => O(n)
    - SC: O(1)
    - can be better? yes

3rd Approach: using Dutch National Flag algo, using 3 pointers
    - TC: O(n)
    - SC: O(1)

Video: https://www.youtube.com/watch?v=yj_14t67Bh0&t=654s
*/


const sortArrayElements = (numbers) => {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    let midPointer = 0;     // for swapping to either leftPointer/rightPointer...this is technically a 2-pointer cus this not part, serves as a slider from l to r

    while (midPointer <= rightPointer) {    // midPointer is the key reference pointer that does all relevant movements/swapping under all conditions...midPtr goes from start to end, the rest serves as placeholders
        if(numbers[midPointer] === 0){
            [numbers[leftPointer], numbers[midPointer]] = [numbers[midPointer], numbers[leftPointer]];  // swap values (cus 0's should fall at the beginning not mid) and increase indexes
            leftPointer++;  // index filled with correct value(0), so pointer should move forward
            midPointer++; 
        }
        else if(numbers[midPointer] === 1){
            midPointer++;   // pointer should not swap, maintain value, skip and move pointer forward...since 1's are supposed to fall in the middle
        }
        else if(numbers[midPointer] === 2){
            [numbers[midPointer], numbers[rightPointer]] = [numbers[rightPointer], numbers[midPointer]];    // swap with rightPointer cus 2's should fall on the right side
            rightPointer--; // index filled with correct value, so pointer should move backwards
            midPointer++; // don't need to cus it will break the look prematurelly
        }
    }
    return numbers;
}

console.log("Result:", sortArrayElements([1, 0, 2, 1, 0]));
console.log("Result2:", sortArrayElements([2, 0, 2, 1, 1, 0])); 


/*

[1, 0, 2, 1, 0]
[0, 0, 2, 1, 1]
[0, 0, 2, 1, 1]
[0, 0, 1, 1, 2]


[0, 0, 1, 1, 2]

====

Input: [2, 2, 0, 1, 2, 0]
[0, 2, 0, 1, 2, 2]
[0, 2, 0, 1, 2, 2]

Output: [0 0 1 2 2 2 ]
*/


/****
 * 
 * Right now, if there is one thing to get from these implementation so far is that;
 * 1. When you think of SORTED input array, think of BINARY SEARCH + TWO-POINTER approach
 *  
 * 
***/