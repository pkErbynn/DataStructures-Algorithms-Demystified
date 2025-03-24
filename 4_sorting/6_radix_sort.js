/*

Radix Sort
- It's not a Comparison sorting algorigthm
- It sorts numbers into buckets 
- Efficient than comparison sort algos - Pivot n Merge Sort 
- Mostly asked in interviews

Pseudocode 
1. Get a function that finds the max number of digits in the number array
    - Max([3243, 545, 2]) = 4
    - This number determines the number iterations the algo loop will run
2. Get a function that finds the digit in a number at a specified place value/index from the back 
    - getDigit(12345, 0) = 5...getDigit(12345, 1) = 4
3. Create/declare buckets for each digit (from 0 to 9)
    - ...eg [] for 0, [] for 1, [] for 2...to 9
    - ...array of array with 10 slots [[], [], []...] 
4. Loop from k=0 to the max number of digits 
    - Place each number in the appropriate bucket slot based on its kth digit
        - ...eg. 123 placed in 3's buck based on its ones place(ie index 0 from the back)
        - ...eg. 123 placed in 2's buck based on its tense place(ie index 1 from the back)
5. Replace existing array numbers with the ordered bucket numbers values

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

// combining the two methods for conciseness
const maxDigitCount = function(nums) {
  return Math.max(...nums.map(num => Math.abs(num).toString().length));
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

    // 10 bucket slots for all digits, 0 to 9...[[], [], []...]
    let buck = Array.from({length:10}, () => []); 
    
    for(let i=0; i<maxDigit; i++){

        for(let j=0; j<nums.length; j++){
            let digit = getEachDigitFromNum(nums[j], i);
            buck[digit].push(nums[j]);
        }

        // replace existing nums array with the ordered bucket values
        nums = buck.flatMap(r => r);
    }
    
    return nums;
}

console.log("radix:", radixSort([32,3,444,-30000]));
