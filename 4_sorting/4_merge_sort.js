/*
all prev algos don't scale up
they only works efficient on small data
However, merge sort is much efficient even on large dataset 

Merge Sort consists of 
- splitting
- merging while sorting

Works by decomposing array into smaller arrays of 0 or 1 element 
...and then building newly sorted array

//////////// Implementation
working in reverse
merge before sort

1. function to MERGE two sorted arrays and return a newly sorted array
...shouldn't modify the input sorted params
...timeComplexit = O(n+m)
...cus visiting reach elment in each array once

nb: very important for interviews 
*/

function merge(arr1, arr2) { 
    let result = [];

    // different pointers for each array
    // ...since each pointer will be moved differently
    let i = 0;
    let j = 0;

    // up to equal lengths of each array
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }

    // when one side ends its movement
    // ...but the other side got some data left
    // ...just pust the remaining into the result array
    // ...cus the two input data are already sorted at both sides
    // ...eg; [1,3,5,7], [2,4]
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++
    }

    // similarly, the other side
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}

// console.log(merge([2,4,6, 5, 15, 15, 18, 20], [1,3,9, 10]));
// console.log(merge([1,3,9, 10], [2,4,6, 5, 15, 18, 20]));



//////////////
// 2. Split each array into small chunk and merge the chunks

function merge_sort_with_spliting(arr){
    // base case or guard
    if(arr.length <= 1){
        return arr;
    }

    // split, by shallow copy, to divid array into 2 halves
    let midIndex = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, midIndex);  // can't use split() cus applies on string
    let rightHalf = arr.slice(midIndex, arr.length);
    console.log(leftHalf, rightHalf);

    // split further by recursion to achieve single/zero element, that are considered sorted
    let splitedLefttHalf = merge_sort_with_spliting(leftHalf);
    let splitedRightHalf = merge_sort_with_spliting(rightHalf);

    // merge the two further splited (sorted) halves
    let mergedArray = merge(splitedLefttHalf, splitedRightHalf);


    return mergedArray;
}

let sortedArray = merge_sort_with_spliting([2,4,5,1,0,6,2,-4]);
console.log('sorted:', sortedArray);




/*
/////////// analysis

The time complexity of Merge Sort is O(n log n), 
...where "n" is the number of elements in the array being sorted.

Why?
Because Merge Sort divides the array into smaller halves until there are only one or zero elements in each half, and then merges these sorted halves back together. 
The divide step takes O(log n) time - because the array is divided in half repeatedly, 
The merge step takes O(n) time - because it involves comparing and merging each element from the two halves.

So the total time complexity = the divide steps * merge steps
= n * log n =  O(n log n). 

This makes Merge Sort a very efficient algorithm for sorting large arrays
*/