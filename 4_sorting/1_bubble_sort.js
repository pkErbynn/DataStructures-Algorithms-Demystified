// TipGist:
// - swaps adjascent elements, placing large values at far right end
// - creating sorted portion at far right end

function bubbleSort(array) {
    //outer + inner loop starts at very begining
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
           if(array[j] > array[j+1]){
                //swap
                [array[j], array[j+1]] = [array[j+1], array[j]]; 
            }
        }
    }
    return array;
}

console.log("A:", bubbleSort([2,3,4,1]))


//////////// optimization with increasing outer loop ***
// optimized for nearly sorted data
// use this impl

function bubbleSortEffective(array) { // ***
    for (let i = 0; i < array.length; i++) {
        let isSwapped = false;  // no swap initially

        // j = 0...5, 0...4, 0...3, 0...2, 0... => deduction (-1) made by i => helps j forcus of unsorted area
        // can be up to `array.length - i - 1`
        for (let j = 0; j < array.length - i; j++) {    // targeting only the unsorted portion
            // swap adjescent elements
           if(array[j] > array[j+1]){
               [array[j], array[j+1]] = [array[j+1], array[j]]; 
               isSwapped = true; // since swap is made
            }
        }

        if(!isSwapped){    // same as: (isSwapped == false)...good to check if the array is sorted after one full inner iteration trip, if noSwap occur, then no need for the rest of the iterations to happen with the outer loop counts, cus the array is already sorted
            break;  // break from the entire loop cus all elements are sorted
        }
    }
    return array;
}

console.log("C:",bubbleSortEffective([1,7,2,10,3,4,9,6]));
console.log("C2:",bubbleSortEffective([2,3,4,1]));




///////////////
// nb
// i<arr.length or i<=arr.length-1 are same


// Time Complexity
// best case = O(n)....nearly sorted
// worse case = O(n^2)...not nearly sorted

// therefore, bubblesort algo can be used on nearly sorted algo


// Purpose: 
// The purpose of the isSwapped flag is to optimize the bubble sort algorithm by breaking out of the outer loop early if no swaps were made during a pass through the array. If no swaps are made in a pass, it means the array is already sorted, and further iterations are unnecessary.
