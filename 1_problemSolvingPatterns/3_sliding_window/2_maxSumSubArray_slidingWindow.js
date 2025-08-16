/*
Given an array of positive numbers and a positive number ‘k’, 
find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

- sibling loop instead of nested
- calc the first num items as first loop
- use second loop to visit rest of elements in Array
- while visiting, be computing the sum, finding max sum alongside

If you observe closely, you will realize that to calculate the sum of a contiguous subarray we can utilize the sum of the previous subarray. 
...For this, consider each subarray as a Sliding Window of size ‘k’ to calculate
...the maximum sum of any contiguous subarray of size ‘k’.

*/

// k static size 
function maxSumArray_SlidingWindow(arr, k){
    if(k > arr.length) return null;   // subarray > fullarray

    let maxSum = 0;
    let windowSum = 0;
    
    // calc first loop sum as current max sum
    for(let i = 0; i < k; i++){
        windowSum += arr[i];
    }

    // keep copy of current windowSum for future(next sibling loop) modification...+ and -
    maxSum = windowSum;

    // sibling loop doesn't calc sum for itself/boundaries, 
    // it just help access rest of elements in array individually for computation
    // start after the first window
    for(let i = k; i < arr.length; i++){    // i = k...cus previous window reached k-1

        // add next element, then compute to remove prev element by calc its index, ie (variable index - constant element)
        // eg; [i-k] => [3-3]=[0], [4-3]=[1], [5-3]=[2]
        windowSum = windowSum + arr[i] - arr[i - k];    // [i - k] gives 0, first element for subtraction
 
        // once temp sum is computed then we compare with prev maxSum before we to next element in array
        if(windowSum > maxSum){
            maxSum = windowSum;
        }
        // maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log("a:", maxSumArray_SlidingWindow([20,3,4,5,1,6], 3));
console.log("b:", maxSumArray_SlidingWindow([20,3,4,5,30,6], 3));
console.log("c:", maxSumArray_SlidingWindow([1, 2, 3, 4, 5, 6], 3));
console.log("d:", maxSumArray_SlidingWindow([1, 2, 3, 4], 2));
console.log("e:", maxSumArray_SlidingWindow([2,6,9,2,1,8,5,6,3], 3));


// TimeComplexity = o(n)