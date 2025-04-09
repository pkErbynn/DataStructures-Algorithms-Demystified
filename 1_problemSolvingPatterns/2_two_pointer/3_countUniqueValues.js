// implement a fxn called CountUniqueValues, 
// - which accept sorted
// - and counts the unique values in the Array
// - array can contain -ve numbers but sorted
// - input = [1,1,1,2,2,2]...output = 2

// solution
// using Pointer-pointer pattern

/*

1. Pin pointer to 1st/start of array 
2. Pin another pointer to 2nd element in the array till the end
    - till the end because it will be used to compare all the rest of elements on the right side to that of the 1st/left pointer 
3. Compare 1st pointer to the 2nd pointer (representing the rest of the elements step by step)
4. If the current 2nd pointer value is different/distinct from that of the 1st pointer, 
    - shift the 1st pointer forward by one, in order to be at the position where the distinct value will be placed at

nb: if the array was unsorted like this [1,2,1,2,2,2], the unique count will be errored, cus it will count 1,2 at 2 and at 2, 1 as 3, then 1, 2 again as 4
    - but since the array input is always sorted, it can be the case
*/

function countUniqueValues(sortedArray){
    if(sortedArray.length === 0){
        return 0;
    }

    let leftIndex = 0;
   
    for (let rightIndex = 1; rightIndex < sortedArray.length; rightIndex++) {

        if(sortedArray[leftIndex] !== sortedArray[rightIndex]){
            leftIndex++;    // shift left position pointer forward to new position so that it can can place the unique value to the new position
            sortedArray[leftIndex] = sortedArray[rightIndex];   // ...move current right pointer value to left pointer position shifted to
        }
    }

    return leftIndex + 1;   // +1, since index started from 0
}

console.log(countUniqueValues([1,1,1,2,2,2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1,1,1,1, 2, 4, 443]));

/*

Time Complexity:
    - This algorithm runs in O(n) time complexity since it iterates through the array once.

Space Complexity: O(1)
    - The algorithm runs in-place, meaning it does not use extra space proportional to the input size. 
    - Instead, it modifies the input array directly using two pointers.

*/

// ======= Optimized ========

function countUniqueValues_optimized(arr){
    if(arr.length === 0){
        return 0;
    }

    let leftIndex = 0;
   
    for (let rightIndex = 1; rightIndex < arr.length; rightIndex++) {
        if(arr[leftIndex] !== arr[rightIndex]){
            leftIndex++;    // shift left position pointer to forward
            
            // Opmized: when both pointers on same value no need to set value again
            if(leftIndex == rightIndex) 
                skip;

            arr[leftIndex] = arr[rightIndex];   // ...move current right pointer value to left pointer position shifted to
        }
    }

    return leftIndex + 1;   // +1, since index started from 0
}

console.log(countUniqueValues_optimized([1,1,1,2,2,2]));
console.log(countUniqueValues_optimized([]));
console.log(countUniqueValues_optimized([1,1,1,1, 2, 4, 443]));
console.log(countUniqueValues_optimized([1,2,3,4, 4]));

/*

Time Complexity:
    - This algorithm runs in O(n) time complexity since it iterates through the array once.

Space Complexity: O(1)
    - The algorithm runs in-place, meaning it does not use extra space proportional to the input size. 
    - Instead, it modifies the input array directly using two pointers.

*/

