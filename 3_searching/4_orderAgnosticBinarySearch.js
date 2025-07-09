/*

Order Agnostive Binary Search
=> This means, you're given an array you don't know whether array is sorted in ascending / descending order
=> This need to be known because it affect the implementation as to which side of half to look for the 'target' value 
=> https://youtu.be/f6UU7V3szVw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=2725

Does it matter if the element is sorted in ascending or descending order ? 
=> Yes, it does matter whether the array is sorted in ascending or descending order for the binary search algorithm to work correctly. 
=> The binary search algorithm assumes that the array is sorted in a specific order and uses this order to eliminate half of the search space at each step.

Binary Search in Ascending Order
=> The implementation provided earlier assumes that the array is sorted in ascending order. 
=> If the array is sorted in ascending order, the algorithm compares the target value to the middle element and then determines which half of the array to search next:
    => If the target is greater than the middle element, the algorithm searches the right half.
    => If the target is less than the middle element, the algorithm searches the left half.

Binary Search in Descending Order
=> If the array is sorted in descending order, the comparison logic needs to be adjusted accordingly:
    => If the target is greater than the middle element, the algorithm should search the left half.
    => If the target is less than the middle element, the algorithm should search the right half.

*/

function agnostic_binary_search(arr, target){
    let start = 0;
    let end = arr.length - 1;

    // I'm assuming arr is ascending by default...means the first element is smaller than the last one
    // ...false, if the first element turns out to be bigger than the last, ie, descending
    let isAscending = true;
    if(arr[start] > arr[end])
    {
        isAscending = false;
    }
    
    while (start <= end){   // uses the index so doesn't affect the order (whether in ascending/descending)

        let mid = Math.floor( start + (end - start) / 2 );  

        if(target === arr[mid]) return mid;

        if(isAscending){
            if(target > arr[mid]){
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }

        if(!isAscending){
            // arr = [8, 7, 6, 5, 4, 3, 2]...target = 7
            //       (s)      (m)      (e)...target > m...hence, target falls on the left...thus, move e pointer further to the left
            if(target > arr[mid]){
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
       
    }
    
    // For ascendin' array, pointer positions after loop termination, ie. start > end
    // arr = [2,  3,  4,  5,  6,  7,  8]...target = 7
    //                           (e) (s)
}

console.log("binarySearch_iteration", agnostic_binary_search([9,8,7,6,5,4,3,2,1], 3));  // wrong solution
console.log("binarySearch_iteration", agnostic_binary_search([1,2,3,4,5,6,7,8,9], 3));


/*

WHEN TO APPLY BINARY SEARCH 
- When given sorted array and doing search, BS works 90% in such problems
- Given sequence of sorted numbers 

*/