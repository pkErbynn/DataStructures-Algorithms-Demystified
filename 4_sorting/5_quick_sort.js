/*

QuickSort 

- Popular sorting algorithm that uses a divide-and-conquer approach to sort an array of elements around a pivot element.
- The algorithm works @ high level by... 
    1. Selecting on of the elements as "Pivot"...Pivot can be at Start, Middle or End 
    2. Partitioning the array around the Pivot...ie, spliting into two sub-array
        a. Left half containing elements LESS THAN the pivot
        b. Right half containing elements GREATER THAN or equal to the pivot
        c. Remember that at this point, the order of the element in each half doesn't matter. What matters is that left < pivot > right half.
    3. Recursively repeat step (1) on each half of the sub-array until sub-array has only one element or empty...ie, all elements becomes sorted, in their little pieces of subarrays [] [] []

- This is done IN-PLACE...ie, no extra memory is required

- Partition the array arount the Pivot: Algorithm @ low level
    1. Choose the first element as the pivot
    2. Store a copy of the current pivot possition/indx that will be used to keep track of where the pivot element should end up
    3. Iterate through the array from start+1 to the end
        a. If current array elemnt in the loop is < the pivot element,
            ...increament the stored pivot-pointer-copy to move forward by 1
            ...then swap the current smaller number with that increamented-pivot pointer index
    4. When the loop is done, the pivot-pointer-copy will fall at the correct place, 
        ...so just swap the original start-pivot pointer with the copy-version
    5. Then return the correct pivot element's position/indx

Nb: Confusing but easy so interviwers like it...they like confusing algo :)

*/


// Example: Arr = [3, 2, 6, -3, 0]

function pivotPartitionHelper(arr, startIndxPointer = 0, endIndxPointer = arr.length - 1){
    let pivotElement = arr[startIndxPointer];   // pivot element as first element...eg: [3(pivot), 2, 6, -3, 0]
    let pivotIndexForSwap = startIndxPointer;   // this keeps track of the position where the pivot element should end up / placed through swapping

    // loop through the rest of array elements till the end, thus i = start + 1
    for(let i = startIndxPointer + 1; i <= endIndxPointer; i++){     //...eg: [ 3(pivot), 2(i-index), 6, -3, 0 ]

        // compare current element with the pivot element
        // if current element is less than the pivot element, it should fall at far left side
        // ...nb: at this time, smaller elements are not placed at left side of the pivot because pivot is still the first element(at left corner) and can't be moved to the correct place/position/index until the loop is done
        if(arr[i] < pivotElement){      // ...eg: [ 3(pivot), 2(i-index), 6, -3, 0 ]...2 is < 3(pivot)...so should be placed further right

            // move pivot pointer forward to place the smaller element there through swap...moved forward so that current pivot pointer's value doesn't get overridden by the smaller element
            pivotIndexForSwap++;    // ...eg: [ 3(pivot), 2(i-index)(pivot-index), 6, -3, 0 ]...(pivot-index) has moved foward

            // optimized...when two diff pointers wants to swap same value at same position
            if(pivotIndexForSwap === i) continue;   // ...eg: [ 3(pivot), 2(i-index)(pivot-index), 6, -3, 0 ]...no swap since all on same index position, other will swap on next line operation

            // now, swap foward-moved-pivot pointer w/ current smaller element
            [arr[pivotIndexForSwap], arr[i]] = [arr[i], arr[pivotIndexForSwap]];
        }
    }

    // finally, place the pivot element at its correct position/index in the array
    // ...this is made possible because while the 'pivotIndexForSwap' counter was used for inner swapping, it was tracking the number of all elements less than the pivot value through the inner-swapping process
    [arr[startIndxPointer], arr[pivotIndexForSwap]] = [arr[pivotIndexForSwap], arr[startIndxPointer]];

    return pivotIndexForSwap;
}


function quickSort(arr, leftPointer = 0, rightPointer = arr.length - 1){

    // base case required...since quick sort is recursive
    if(leftPointer >= rightPointer) {
        return;
    }

    let pivotIndexPointer = pivotPartitionHelper(arr, leftPointer, rightPointer);

    // Format: [left....pivot-1, pivot, pivot+1...right]...then apply quickSort to each side of the pivot, excluding the pivot itself
    // left side = left to pivot-1
    quickSort(arr, leftPointer, pivotIndexPointer - 1);
    // right = pivot+1 to right
    quickSort(arr, pivotIndexPointer + 1, rightPointer);
    
    return arr;
}

console.log("quickSort1", quickSort([4, 6, 9, 1, 2, 5, 3]));
console.log("quickSort3", quickSort([3, 2, 6, -3, 0, 2]));
console.log("quickSort3", quickSort([2, 1, 5, 0, 10, -1, 3, -100, 4]));

/*

============ IMPORTANT NOTES... ==============

=== Base Case...
- Ain't using empty/one-array-element (arr.length <= 1) as base condition because:
...1. it's the same original array input used throughout and its length DOESN'T change 
...2. new array is NOT created from the original while spliting unlike the Merge Sort
...3. the elements are modified in-place, ie. the size of the original array stay the same

- Thus, base condition has to be w/ the pointers movement, ie (leftPointer >= rightPointer)
...implicitly meaning, the pointers are on the same element
...explicitly meaning, that element is sorted


=== Time Complexity...
- Can depend on how/where the pivot is selected

- Best Case = (n log n) because
...during partition, the PIVOT is being compared to only HALF of the array element, ie, n * logn
...where the HALVING means 'divide and conquer', thus log n
...ie, n * log n
...so it becomes (n log n)

- Average case = O(n log n), ==> for mixed data
...which makes it an efficient sorting algorithm for large datasets.

- Worse Case => n^2
...occurs when array is ALREADY or NEARLY SORTED 
...during the partition made wrt to the pivot,
...one half will be empty while the other half will be full n-1 elements
...meaning, the PIVOT will be compared to all the other element except itself
...ie, PIVOT compared to (N-1)...ie, 1 pivot element compared to n-1 elements
...since it's not VERY UNBALANCED, the pivot splits the array into [1 element] + [n - 1 elements → O(n²)
...also, by default/intutively, the pivot also get transitioned or moved each time to visit each element which is 'n'
...we partition n elements and do n-1 comparisons to separate them, so it becomes n*(n) = n^2
...FIX: To avoid this, it is often recommended to use a randomized pivot selection withing the array
```
    const randomPivotIndex = Math.floor(Math.random() * arr.length)
    const pivotValue = arr[randomPivotIndex]
```

- In sum...
In Quick Sort’s average case, the time complexity is O(n log n) because... 
...the array is typically divided into two roughly equal halves (log n levels of recursion), and at each level, all n elements are processed during partitioning. 
...so, the total work done is the number of levels (log n) multiplied by the work per level (n), resulting in O(n log n). 
...This assumes a good pivot choice that leads to balanced splits, unlike the worst case where unbalanced splits cause O(n²) behavior.

=== Space Complexity 
...is o(log n) that makes it memory efficient than Merge sort which it o(n)

*/


////////////// simplified - uses extra space ///////////////

function quickieSortExtraMemory(arr){
    if (arr.length <= 1) {
        return arr;
    }

    let pivotEle = arr[0];
    let left = [];
    let right = [];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivotEle){
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }

    return [...quickieSortExtraMemory(left), pivotEle, ...quickieSortExtraMemory(right)];
}

console.log("quickieSortExtraMemory1", quickieSortExtraMemory([3, 2, 6, -3, 0]));


