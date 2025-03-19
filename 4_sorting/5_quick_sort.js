/*

QuickSort 

- Popular sorting algorithm that uses a divide-and-conquer approach to sort an array of elements around a pivot element.
- The algorithm works @ high level by... 
    1. Selecting on of the elements as "Pivot"...Pivot can be at Start, Middle or End 
    2. Partitioning the array around the Pivot...ie, spliting into two sub-array
        a. Left half containing elements LESS THAN the pivot
        b. Right half containing elements GREATER THAN or equal to the pivot
        c. Remember that at this point, the order of the element in each half doesn't matter. What matters is that left < pivot > right half.
    3. Recursively repeating step (1) on each half of the sub-array until sub-array has only one element or empty...ie, all elements becomes sorted, in their little pieces of subarrays [] [] []

- This is done IN-PLACE...ie, no extra memory is used

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
function pivotPartitionHelper(arr, startIndxPointer = 0, endIndxPointer = arr.length){
    let pivotElement = arr[startIndxPointer];   // pivot element as first element...eg: [3(pivot), 2, 6, -3, 0]
    let pivotIndexForSwap = startIndxPointer;   // this keeps track of the position where the pivot element should end up / placed through swapping

    // loop through the rest of array elements till the end, thus i = start + 1
    for(let i = startIndxPointer + 1; i < endIndxPointer; i++){     //...eg: [ 3(pivot), 2(i-index), 6, -3, 0 ]

        // compare current element with the pivot element
        // if current element is less than the pivot element, it should fall at far left side
        // ...nb: at this time, smaller elements are not placed at left side of the pivot because pivot is still the first element(at left corner) and can't be moved to the correct place/position/index until the loop is done
        if(arr[i] < pivotElement){      // ...eg: [ 3(pivot), 2(i-index), 6, -3, 0 ]...2 is < 3(pivot)...so should be placed further right

            // move pivot pointer forward to place the smaller element there through swap...moved forward so that current pivot pointer's value doesn't get overridden by the smaller element
            pivotIndexForSwap++;    // ...eg: [ 3(pivot), 2(i-index)(pivot-index), 6, -3, 0 ]...(pivot-index) has moved foward

            // optimized
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


function quickSort(arr, start = 0, end = arr.length){
    
    // base case required...since quick sort is recursive
    if(start >= end) {
        return arr;
    }

    let pivotIndex = pivotPartitionHelper(arr, start, end);

    // left
    quickSort(arr, start, pivotIndex);
    // right
    quickSort(arr, pivotIndex + 1, end);
    
    return arr;
}

console.log("quickSort1", quickSort([3, 2, 6, -3, 0]));
console.log("quickSort2", quickSort([2, 1, 5, 0, -1, 10, -1, -120, 3, 100, -100, 4]));



// NB:
// Can't use (arr.length <= 1) as base condition since we're not creating new array from the original
// or reducing the size of the original array
// since same array is being modified, condition can be made w/ the pointers (start >= end)

// if L27 param is (pivotIndex-1) then (i <= end) in L5




////////////// simplified - uses extra space ///////////////

function quickieSort(arr){
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

    return [...quickieSort(left), pivotEle, ...quickieSort(right)];
}

console.log("x2", quickieSort([2,1,5,0, -1, 10, -1, -120, 3, 100, -100, 4]));
console.log("y2", quickieSort([3,2,6,-3,0]));




/*
NB:

=== Time Complexity
- Can depend on how pivot is selected

Worse-case 
= O(n^2) ==> ALREADY sorted or NEARLY sorted, 
cus the pivot element will always be the largest or smallest element in the array and the partitioning will result in subarrays of size n-1 and 1.
eg. [2,3,4,5,6]
there will not be any working partitioning, left element n right element, thus, not a n('log n') but n(n-1) = n^2
To avoid this, it is often recommended to use a randomized pivot selection method
```const pivot = arr[Math.floor(Math.random() * arr.length)];
         pivote = arr[randomIndex]
```

Worse Case = n^2 because
...on partially sorted array, when the partition is made wrt to the pivot,
...one half will be empty while the other half will be full element
...meaning, the PIVOT will be compared to all the other element except itself
...ie, PIVOT compared to (N-1)...ie, 1 pivot element compared to n-1 elements, ie, 1 * (n-1)
...also, by default/intutively, the pivot also get transitioned or moved each time to visit each element which is 'n'
...so it becomes n(n) = n^2

Best Case, on the flipside, = (n log n) because
...during partition, the PIVOT is being compared to only HALF of the array element, ie, 1 * logn
...where the HALVING means 'divide and conquer', thus log n
...ie, n * log n
...so it becomes (n log n)

Average case = O(n log n), ==> for mixed data
...which makes it an efficient sorting algorithm for large datasets.


=== Space Complexity 
    - o(log n) that makes it memory efficient than Merge sort which it o(n)



----------------------
VS Merge Sort
- 
*/
