/*

Radix Sort
- It's not a Comparison sorting algorigthm
- It sorts numbers into buckets 
- Efficient than comparison sort algos - Pivot n Merge Sort 
- Mostly asked in interviews

Pseudocode 
1. Get a function that finds the max number of digits in the number array
    - Max([3243, 545, 2]) = 4 digits
    - This number determines the number iterations the algo loop will run
2. Get a function that finds the digit in a number at a specified place value/index from the back 
    - getDigit(12345, 0) = 5 (ones digit)...getDigit(12345, 1) = 4 (tense digit)
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

// const digitCount = function(num) {
//     if(num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// const maxDigitCount = function(nums){
//     let maxDigit = 0;
//     for(let i=0; i<nums.length; i++){
//         if(digitCount(nums[i]) > maxDigit){
//             maxDigit = digitCount(nums[i]);
//         }
//     }
//     return maxDigit;
// }


// Combining the two methods above for conciseness
// |num| to prevent -ves, then map each num to its length and find max
// ...eg: maxDigitCount([43, 543,5534,00003, 00000000]) = 4...NB: |007| = 7
const maxDigitCount = function(nums) {
  return Math.max(...nums.map(num => Math.abs(num).toString().length)); 
}

// Finding digit at the ones, tense, or hundredths place
// Eg: ...getEachDigitFromNum(1234, 0) => 4 at ones place
// ...getEachDigitFromNum(1234, 1) => 3 at tense place
// ...getEachDigitFromNum(1234, 2) => 2 at hundredths place

/*
Dry test run:
(1234, 0) = 4 => 1234 % 10 = 4 
(1234, 1) = 3 => 123 % 10 = 3...But 123 => 1234/10 = 123.4 => floor(123.4) = 123
(1234, 2) = 2 => 12 % 10 = 3...But 12 => 1234/100 = 1234/10^2 = 12.34 => floor(12.34) = 12
(1234, 3) = 1 => 1 % 10 = 1...But 1 => 1234/1000 = 1234/10^3 = 1.234 => floor(1.234) = 1
*/
const getEachDigitFromNum = function(num, index){        // given num = 1234, index = 2
    let result = Math.abs(num) / Math.pow(10, index);    // 1234 / 10^2 = 1234/100 = 12.34
    result = Math.floor(result) % 10;                    // 12.34 % 10 => 12 % 10 = 2
    return result;                                       // result: 2
}


function radixSort(nums){
    // max number of digit in the given array of numbers
    let maxDigit = maxDigitCount(nums);

    // 10 bucket slots for all digits, 0 to 9...[[], [], []...]
    let bucket = Array.from({length: 10}, () => []); 
    
    // entire iteration depends on the max number of digits
    for(let i = 0; i < maxDigit; i++){

        // get the ones digit from each number, then to the tense digit from each number, then hundreths, then...
        for(let j = 0; j < nums.length; j++){

            let digit = getEachDigitFromNum(nums[j], i);   // eg: getEachDigitFromNum(1234, 0) = 4
            bucket[digit].push(nums[j]);
        }

        // regrouping numbers
        // replace existing nums array with the ordered/sorted bucket values after each sort based on the digit's ones, tense,... position
        nums = bucket.flatMap(r => r);

        // clean bucket so that can store new array of sorted numbers
        bucket = Array.from({length: 10}, () => [])
    }
    
    return nums;
}

console.log("radixSort:", radixSort([32, 3, 444, -30000, 7]));



function radixSort_WithInnerBucket(nums){

    // max number of digit in the given array of numbers
    let maxDigit = maxDigitCount(nums);
    
    // entire iteration depends on the max number of digits
    for(let i = 0; i < maxDigit; i++){

        // 10 bucket slots for all digits, 0 to 9...[[], [], []...]
        let bucket = Array.from({length: 10}, () => []); 
        
        for(let j = 0; j < nums.length; j++){

            let digit = getEachDigitFromNum(nums[j], i);
            bucket[digit].push(nums[j]);
        }

        // replace existing nums array with the ordered bucket values after each sort based on the digit's ones, tense,... position
        nums = bucket.flatMap(r => r);

        // NO Bucket cleanup
    }
    
    return nums;
}

console.log("radixSort_WithInnerBucket:", radixSort_WithInnerBucket([32, 3, 444, -30000, 7, 100000000000000000000000000, 3000000000000]));


/*

=== Time Complexity

- Best: O(nk)
...where n = number of numbers in the array to be sorted and 
...k = number of digits, ie. size of max digits

- Average: O(nk)

- Worse: O(nk)
...Downside is when a number is very loong, ie, 100000000000000000000000000


=== Space Complexity

- 0(n + k)

*/