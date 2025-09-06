/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation: The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation: All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/


/*

3 Options:
    1. Brute force: take each element and compare to the rest of elements...
        - Time: O(n^2)
        - Space: O(1)
    2. Sorting input and utilizing 2-pointer approach
        - Time: input sorting = O(n log n)....processing = O(n)....thus, O(n log n)
        - Space: O(1)
    3. Hashset to keep track and check recorded duplicate
        - Time: O(n)
        - Space: O(n)...hashset
        - NB: Sacrifices Space for Time while 2nd option sacrifices Time for Space 
*/


// Option 2
const hasDublicate = function(input) {
    let sortedInput = input.sort();

    let left = 0;
    let right = 1;

    while (right < sortedInput.length) {    // or right <= sortedInput.length - 1

        if(sortedInput[left] == sortedInput[right]){
            return true;
        }
        else{
            left = right;
            right++;
        }
    }

    return false;
}

console.log("hasDublicate1: ", hasDublicate([1, 2, 3, 1]));
console.log("hasDublicate2: ", hasDublicate([1, 2, 3 ,5]));


// Option 3
const containsDublicate = function(input) {
    let hashset = new Set();
    let i = 0;

    while (i < input.length) {
        if(hashset.has(input[i])){
            return true;
        }
        hashset.add(input[i])
        i++;
    }

    return false;
}

console.log("containsDublicate1: ", containsDublicate([1, 2, 3, 1]));
console.log("containsDublicate2: ", containsDublicate([1, 2, 3, 5]));


// Using forloop
function containsDuplicates(arr) {
    if (arr.length <= 1) {
        return false;
    }

    const seen = new Set();

    // for-loop
    for (let num of arr) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }

    return false;
}


// ===== collecting duplicates

function getDuplicates(arr){
    let seenSet = new Set();
    let duplicates = [];

    for(let num of arr){
        console.log(num);
        
        if(seenSet.has(num)){
            duplicates.push(num);
        }
        else {
            seenSet.add(num)
        }
    }

    return duplicates;
}

console.log(getDuplicates([1, 2, 3, 1, 1]))  



// ===== collecting duplicates using HashMap

function getDuplicates_hashMap(arr){
    let freqCount = {};
    let duplicates = [];

    for(let num of arr){
       freqCount[num] = freqCount[num] ? freqCount[num] + 1 : 1
    }

    for(let num in freqCount){      // key iteration
        if(freqCount[num] <= 1){
            continue;
        }
        for(let i = 1; i < freqCount[num]; i++){
            duplicates.push(Number(num))    // key is object(string) so need to me wrap
        }
    }

    return duplicates;
}

console.log(getDuplicates_hashMap([1, 2, 3, 1, 1])) 
