/*

Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

*/

function firstAndLastPosition(nums, target){
    let ans = [-1, -1];

    ans[0] = search(nums, target, true);
    ans[1] = search(nums, target, false);   // false, implies finding the end position

    return ans;
}

function search(nums, target, isFindingStartIndex) {
    let ans = -1;

    let start = 0;
    let end = nums.length - 1;

    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);  // prevents potential overflow issues with large numbers

        if(target < nums[mid]){
            end = mid - 1;  // move torwards the start
        }
        else if(target > nums[mid]){
            start = mid + 1;    // move towards the end
        }
        else {
            ans = mid;  // potential ans...cus other ans might exist either left or right...so basically keeping copy of found element, and looking left and right side for matching element
            // once, return index, you terminate execution and can't look around

            // if true flag, then move pointer to search at left side
            if(isFindingStartIndex){
                end = mid - 1;
            }
            // if false flag, then move pointer to search towards the right
            // ...meaning, else by default, binary searh will move to find element on the right side
            // ...eg, 1,2,2,3 => default to index 2 instead of 1
            else {
                start = mid + 1;
            }
        }
    }

    return ans;
}

console.log("firstAndLastPosition:", firstAndLastPosition([5,7,7,8,8,10], 8));
console.log("firstAndLastPosition:", firstAndLastPosition([5,7,7,8,8,10], 6));
console.log("firstAndLastPosition:", firstAndLastPosition([], 0));

/*

NB:
The method start + (end - start) / 2 
    - helps avoid potential overflow issues that might occur if start and end are very large numbers. 
    - By subtracting start from end first, the values stay within a safe range before division, ensuring the calculation remains accurate and efficient

Clue: 
- 90% of "sorted array" questions are solved with BS
- nlogn is another clue
*/