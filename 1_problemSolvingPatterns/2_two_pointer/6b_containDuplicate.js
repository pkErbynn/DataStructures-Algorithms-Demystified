/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation: The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation: All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/


/*

3 Options:
    1. Brute force: take each element and compare to the rest of elements...
        - Time: O(n^2)
        - Space: O(1)
    2. Sorting input and utilizing 2-pointer approach
        - Time: input sorting = O(n log n)....processing = O(n)....thus, O(n log n)
        - Space: O(1)
    3. Hashset to keep track and check recorded duplicate
        - Time: O(n)
        - Space: O(n)...hashset
        - NB: Sacrifices Space for Time while 2nd option sacrifices Time for Space 
*/


// Option 2
const hasDublicate = function(input) {
    let sortedInput = input.sort();

    let left = 0;
    let right = 1;

    while (right < sortedInput.length) {

        if(sortedInput[left] == sortedInput[right]){
            return true;
        }
        else{
            left = right;
            right++;
        }
    }

    return false;
}

console.log("hasDublicate1: ", hasDublicate([1,2,3,1]));
console.log("hasDublicate2: ", hasDublicate([1,2,3,5]));


// Option 3
const containsDublicate = function(input) {
    let hashset = new Set();
    let i = 0;

    while (i < input.length) {
        if(hashset.has(input[i])){
            return true;
        }
        hashset.add(input[i])
        i++;
    }

    return false;
}

console.log("containsDublicate1: ", containsDublicate([1, 2, 3, 1]));
console.log("containsDublicate2: ", containsDublicate([1, 2, 3, 5]));

