/*
 
Given an integer array nums, return an array answer such that answer[i] is equal to the product 
of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count
as extra space for space complexity analysis.)


=== Brainstorming
- 1st Option: nested loop could be use to solve this but will result in O(n^2) TC...meanwhile question says in O(n)
- 2nd Option: if total product of numbers in array is divided by a current number at a particular index, it will 
result in the product of all numbers except that number at that index...but question says don't use division
- 3nd Option: two array containers could be used to hold prefix n postfix, then multiplied...Good as it result in O(n) TC but O(n) SC
- 4th Option: make two passes, first in-forward, second in-reverse, to compute products in-place...GREAT cus of O(n) TC but O(1) SC (as result space not considered as extra space)
    - Techinque used: Prefix & Suffix Product (no division)...Left-to-right and right-to-left cumulative pass
    - full context: https://www.youtube.com/watch?v=bNvIQI2wAjk&ab_channel=NeetCode

*/

const productExceptSelf = function(nums) {
    const result = [];

    // forward pass...calculating and shifting baseProduct forward in result
    let baseProduct = 1
    result[0] = baseProduct;    // first baseProduct shift inside result
    for (let i = 0; i < nums.length - 1; i++) {    // nums.length - 1 cus index starts from 0
        baseProduct = baseProduct * nums[i];
        result[i + 1] = baseProduct;
    }

    // backward pass...calculating and shifting baseProduct backwards in result for overide after multiplied w/ existing data
    baseProduct = 1
    for (let i = nums.length - 1; i > 0; i--) {
        baseProduct = baseProduct * nums[i]
        result[i - 1] = result[i - 1] * baseProduct;
    }

    return result
}

console.log("productExceptSelf1: ", productExceptSelf([1, 2, 3, 4]));
console.log("productExceptSelf2: ", productExceptSelf([-1, 1, 0, -3, 3]));


// TC: O(n)...done in-place
// SC: O(n)
