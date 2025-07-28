/*
 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.


Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/


// Hint: make two passes, first in-forward, second in-reverse, to compute products

const productExceptSelf = function(input) {
    const result = [];

    // forward pass...calculating and shifting baseProduct forward in result
    let baseProduct = 1
    result[0] = baseProduct;    // first baseProduct shift inside result
    for (let i = 0; i < input.length - 1; i++) {    // input.length - 1 cus index starts from 0
        baseProduct = baseProduct * input[i];
        result[i + 1] = baseProduct;
    }

    // backward pass...calculating and shifting baseProduct backwards in result for overide after multiplied w/ existing data
    baseProduct = 1
    for (let i = input.length - 1; i > 0; i--) {
        baseProduct = baseProduct * input[i]
        result[i - 1] = result[i - 1] * baseProduct;
    }

    return result

}

console.log("productExceptSelf1: ", productExceptSelf([1, 2, 3, 4]));


// TC: O(n)...done in-place
// SC: O(n)