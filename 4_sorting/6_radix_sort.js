/*

Radix Sort
- Mostly asked in interviews
- It's not a Comparison sorting algorigthm
- Efficient than comparison sort algos - Pivot n Merge Sort 


How 
1. Get the max number of digits in the number array
    - Max([3243, 545, 2]) = 4
    - This number determines the number iterations the algo loop will run
2. Get a function that returns the digit in a number at a specified place value/index from the back 
    - getDigit(12345, 0) = 5...getDigit(12345, 1) = 4

*/

// const digitCount = (num) => (Math.abs(num) + "").length; // Edge case when num = 0007
const digitCount = function(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const maxDigitCount = function(nums){
    let maxDigit = 0;
    for(let i=0; i<nums.length; i++){
        if(digitCount(nums[i]) > maxDigit){
            maxDigit = digitCount(nums[i]);
        }
    }
    return maxDigit;
}

const getEachDigitFromNum = function(num, index){
    let result = Math.abs(num) / Math.pow(10, index);    // 23/10^2
    result = Math.floor(result) % 10;
    return result;
}

console.log(getEachDigitFromNum(432));

function radixSort(nums){
    // max number of digit in the given array of numbers
    let maxDigit = maxDigitCount(nums);

    for(let i=0; i<maxDigit; i++){
        let buck = Array.from({length:10}, () => []);
        // loop based on the max digit number 
        for(let j=0; j<nums.length; j++){
            let digit = getEachDigitFromNum(nums[j], i);
            buck[digit].push(nums[j]);
        }

        nums = buck.flatMap(r => r);
    }
    
    return nums;
}

console.log("radix:", radixSort([32,3,444,-30000]));
