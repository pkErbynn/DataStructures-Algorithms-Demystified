/*

- Prefix sum used to find the cummulative sum of element from start of array to a given index
- Eg: [3, 7, 2, 5, 8]
    - to [3, 10, 12, 17, 25]...suming element up to current element

    - Now, what is the sum of element from 0 to index 2? 
    - Ans: simply 12...at index 2
    - TC: O(n) one-time...subsequent query will be O(n)
    - Instead of Naive approach: suming from 0 to n everytime query is made
*/

// https://www.youtube.com/watch?v=yuws7YK0Yng&ab_channel=AlgoMasterIO

const prefixSum = function(arr) {
    let prefSum = new Array(arr.length);

    prefSum[0] = arr[0];        // maintain same value

    for (let i = 1; i < arr.length; i++) {
        prefSum[i] = prefSum[i - 1] + arr[i];   // no out-of-bound error cus starting from index 1 :)
    }

    return prefSum;
}

console.log("prefixSum: ", prefixSum([1, 2, 3]));



// If memory is a constraint
const prefixSumInPlace = function(arr) {

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1] + arr[i];
    }

    return arr;
}

console.log("prefixSumInPlace: ", prefixSumInPlace([1, 2, 3]));


// ===== Next Question
// Given array, answer queries that ask for the sum of the element between two indices INCLUSIVE


function rangeSum(left, right) {
    if (left === 0)     // just like the first question
        return prefixSum[right];

    return prefixSum[right] - prefixSum[left - 1];  // -1 cus needs to open up to include left index
}

// Time complexity = O(1) instead of O(n)