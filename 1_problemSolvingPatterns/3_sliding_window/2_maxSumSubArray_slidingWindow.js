// NB:
// - sibling loop instead of nested
// - calc the first num items as first loop
// - use second loop to visit rest of elements in Array
// - while visiting, be computing the sum, finding max sum alongside


function maxSumArray_SlidingWindow(arr, num){
    if(num > arr.length) return null;   // subarray > fullarray

    let maxSum = 0;
    let tempSum = 0;    // as window sum
    
    // calc first loop sum as current max sum
    for(let i=0; i<num; i++){
        maxSum += arr[i];
    }

    // keep copy of current max sum for future(next sibling loop) modification...+ and -
    tempSum = maxSum;

    // sibling loop doesn't calc sum for itself/boundaries, 
    // it just help access rest of elements in array individually for computation
    for(let i=num; i<arr.length; i++){

        // add next element, then compute to remove prev element by calc its index, ie (variable ele - constant ele)
        // eg; [3-3]=[0], [4-3]=[1], [5-3]=[2]
        tempSum = tempSum + arr[i] - arr[i-num];

        // once temp sum is computed then we compare with prev maxSum before we to next element in array
         if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }

    return maxSum;
}

console.log(maxSumArray_SlidingWindow([20,3,4,5,1,6], 3));
console.log(maxSumArray_SlidingWindow([20,3,4,5,30,6], 3));
console.log(maxSumArray_SlidingWindow([1, 2, 3, 4, 5, 6], 3));
console.log(maxSumArray_SlidingWindow([1, 2, 3, 4], 2));
console.log(maxSumArray_SlidingWindow([2,6,9,2,1,8,5,6,3], 3));


// TimeComplexity = o(n)