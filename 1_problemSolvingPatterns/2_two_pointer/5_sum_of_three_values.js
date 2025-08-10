// Input with no duplicates

function findSumOfThree(nums, target) {
    nums = nums.sort((a, b) => a - b);  // sorted in order

    for(let currentIndexPointer = 0; currentIndexPointer < nums.length; currentIndexPointer++){
        let leftIndexPointer = currentIndexPointer + 1;
        let rightIndexPointer = nums.length - 1;

        while(leftIndexPointer < rightIndexPointer){    // 'currentIndexPointer' not used here sake of its auto increament...nb: seems only pointers are used while-loop
            let sum = nums[currentIndexPointer] + nums[leftIndexPointer] + nums[rightIndexPointer];
            if(sum === target) {
                console.log("numbers:", [nums[currentIndexPointer], nums[leftIndexPointer], nums[rightIndexPointer]]);
                return true;
            }

            if(sum < target) {
                leftIndexPointer++; // move pointer to the right to bigger values to meet target, since below target
            }
            else if(sum > target) {
                rightIndexPointer--;    // since over target, move pointer down to smaller values 
            }
        }

    }
    return false;
}

console.log("sum:", findSumOfThree( [3, 5, 2, 0, 5, 2, 3], 10 ));

/*

Time Complexity:
•	Sorting takes O(n log n).
•	The two-pointer approach runs in O(n) inside a loop.
•	Total complexity: O(n²) (since we iterate n times with an O(n) search).

Space Complexity:
•	O(1) because sorting is done in-place, and only a few integer variables are used.

*/