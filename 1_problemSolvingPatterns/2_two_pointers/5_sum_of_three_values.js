export function findSumOfThree(nums, target) {
    nums = nums.sort((a, b) => a - b);

    for(let currentIndex = 0; currentIndex < nums.length; currentIndex++){
        let lowIndex = currentIndex + 1;
        let highIndex = nums.length - 1;

        while(lowIndex < highIndex){
            let sum = nums[currentIndex] + nums[lowIndex] + nums[highIndex];
            if(sum === target) return true;

            if(sum < target) lowIndex++;
            else if(sum > target) highIndex--;
        }

    }
    return false
}
