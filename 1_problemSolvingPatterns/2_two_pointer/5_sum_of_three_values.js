function findSumOfThree(nums, target) {
    nums = nums.sort((a, b) => a - b);  // sorted in order

    for(let currentIndexPointer = 0; currentIndexPointer < nums.length; currentIndexPointer++){
        let leftIndexPointer = currentIndexPointer + 1;
        let rightIndexPointer = nums.length - 1;

        while(leftIndexPointer < rightIndexPointer){
            let sum = nums[currentIndexPointer] + nums[leftIndexPointer] + nums[rightIndexPointer];
            if(sum === target) {
                console.log("numbers:", [nums[currentIndexPointer], nums[leftIndexPointer], nums[rightIndexPointer]]);
                return true;
            }

            if(sum < target) {
                leftIndexPointer++;
            }
            else if(sum > target) {
                rightIndexPointer--;
            }
        }

    }
    return false;
}

console.log("sum:", findSumOfThree( [3, 5, 2, 0, 5, 2, 3], 10 ));

