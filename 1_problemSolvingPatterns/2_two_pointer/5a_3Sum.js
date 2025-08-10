// Input with duplicates

/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2], [-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.


Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.


Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/


function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i++){

        // Skip duplicate values for i
        if(i > 0 && nums[i] == nums[i - 1]) continue;

        let leftPtr = i + 1;
        let rightPtr = nums.length - 1;

        while (leftPtr < rightPtr) {
            let sumZero = nums[i] + nums[leftPtr] + nums[rightPtr];

            if(sumZero < 0){
                leftPtr++;
            }
            else if(sumZero > 0){
                rightPtr--;
            }
            else {  // equal 0
                result.push([nums[i], nums[leftPtr], nums[rightPtr]]);

                rightPtr--;
                leftPtr++;

                // Skip duplicates for left and right pointers
                while (leftPtr < rightPtr && nums[leftPtr] == nums[leftPtr - 1]) {
                    leftPtr++;
                }
                while (leftPtr < rightPtr && nums[rightPtr] == nums[rightPtr + 1]) {
                    rightPtr--;
                }
            }
        }
    }

    return result;
}

console.log("threeSum", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("threeSum", threeSum([-2, -2, -2, -1, -1, -1, 0, 0, 0, 2, 2, 2, 2]));
