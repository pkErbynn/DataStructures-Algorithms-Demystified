// QuickSort 
// - popular sorting algorithm that uses a divide-and-conquer approach to sort a list or an array of elements. 
// - The algorithm works by selecting a pivot element, partitioning the list around the pivot, and recursively sorting the sublists created by the partitioning.

// nb: very important for interviews 


function pivotHelper(arr, startPivot = 0, end = arr.length){
    let pivotIndexForSwap = startPivot;

    // compare init pivot w/ rest of array elements
    for(let i = startPivot+1; i < end; i++){
        if(arr[i] < arr[startPivot]){
            // move pivot pointer forward
            pivotIndexForSwap++;
            // swap moved pivot pointer w/ current loop element
            [arr[pivotIndexForSwap], arr[i]] = [arr[i], arr[pivotIndexForSwap]];
        }
    }
    // finally, migrate the pivot element to the right position in the array using the pivot++ index counter
    [arr[startPivot], arr[pivotIndexForSwap]] = [arr[pivotIndexForSwap], arr[startPivot]];

    return pivotIndexForSwap;
}


function quickSort(arr, start = 0, end = arr.length){
    if(start >= end) {
        return arr;
    }

    let pivotIndex = pivotHelper(arr, start, end);

    // left
    quickSort(arr, start, pivotIndex);
    // right
    quickSort(arr, pivotIndex + 1, end);
    
    return arr;
}

console.log("x", quickSort([2,1,5,0, -1, 10, -1, -120, 3, 100, -100, 4]));
console.log("y", quickSort([3,2,6,-3,0]));



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
nb

Worse-case time complexity = O(n^2) ==> ALREADY sorted or NEARLY sorted, 
cus the pivot element will always be the largest or smallest element in the array and the partitioning will result in subarrays of size n-1 and 1.
eg. [2,3,4,5,6]
there will not be any working partitioning, left element n right element, thus, not a n('log n') but n(n-1) = n^2
To avoid this, it is often recommended to use a randomized pivot selection method
```const pivot = arr[Math.floor(Math.random() * arr.length)];
         pivote = arr[randomIndex]
```

Average case = O(n log n), ==> for mixed data
which makes it an efficient sorting algorithm for large datasets.

Worse Case = n^2 because
...on partially sorted array, when the partition is made wrt to the pivot,
...one half will be empty while the other half will be full element
...meaning, the PIVOT will be compared to all the other element except itself
...ie, PIVOT compared to (N-1)
...also, by default/intutively, the pivot also get transitioned or moved each time to visit each element which is 'n'
...so it becomes n(n) = n^2

on the flipside, Best Case = (n log n) because
...during partition, the PIVOT is being compared to only HALF of the array element
...where the HALVING means 'divide and conquer', thus log n
...ie, n * log n
...so it becomes (n log n)


space complexity is o(log n) that makes it memory efficient than Merge sort which it o(n)

*/
