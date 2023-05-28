export function findSumOfThree(nums, target) {
    nums = nums.sort((a, b) => a - b);  // sorted in order

    for(let currentIndex = 0; currentIndex < nums.length; currentIndex++){
        let leftIndex = currentIndex + 1;
        let rightIndex = nums.length - 1;

        while(leftIndex < rightIndex){
            let sum = nums[currentIndex] + nums[leftIndex] + nums[rightIndex];
            if(sum === target) return true;

            if(sum < target) leftIndex++;
            else if(sum > target) rightIndex--;
        }

    }
    return false
}
