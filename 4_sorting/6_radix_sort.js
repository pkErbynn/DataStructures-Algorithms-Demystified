// Radix Sort
// mostly asked in interviews

const digitCount = (num) => (Math.abs(num) + "").length;

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
