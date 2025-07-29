// https://www.youtube.com/watch?v=yuws7YK0Yng&ab_channel=AlgoMasterIO

const prefixSum = function(arr) {
    let prefSum = new Array(arr.length);

    prefSum[0] = arr[0];        // maintain same value

    for (let i = 1; i < arr.length; i++) {
        prefSum[i] = prefSum[i - 1] + arr[i];
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
