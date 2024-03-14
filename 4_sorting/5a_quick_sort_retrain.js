
// set default start and end values
const quickSort = function(arr, start = 0, end = arr.length){

    // base case
    if(start >= end) return arr;

    let pivotIndex = findPivotIndex(arr, start, end);

    quickSort(arr, start, pivotIndex);  // left partition

    quickSort(arr, pivotIndex + 1, end);    // right partition

    return arr;
}


const findPivotIndex = function(arr, start = 0, end = arr.length) {
    let pivotIndexToSwapWith = start;
    let pivotValueToCompareWith = arr[start];

    for(let i = start + 1; i < end; i++){   // end < cus index start from 0
        
        if(arr[i] < pivotValueToCompareWith){
            pivotIndexToSwapWith++;   // move forward cus can't swap to original pivot start index directly, need to swap with other values in front of current value
            
            if(pivotIndexToSwapWith == i) continue; // optimizes since it prevents self-value swap
            [ arr[i], arr[pivotIndexToSwapWith] ] = [ arr[pivotIndexToSwapWith], arr[i] ];
        }
    }    

    [ arr[start], arr[pivotIndexToSwapWith] ] = [ arr[pivotIndexToSwapWith], arr[start] ]; // now can place pivot to its correct position
    
    return pivotIndexToSwapWith;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3])); // start & end computed automatically
console.log(quickSort([4, 8, 2, 2, 1, 5, 7, 6, 3, -4])); // start & end computed automatically

