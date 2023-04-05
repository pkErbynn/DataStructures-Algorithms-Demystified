// TipGist:
// Unlike Bubble, swapping adjascent elements, 
// Selection swaps the selected element with the first element

function selectionSort(arr){
    for (let outerIndex = 0; outerIndex < arr.length; outerIndex++) {
        let smallestIndex = outerIndex;
        
        for (let innerIndex = outerIndex; innerIndex < arr.length; innerIndex++) {
            if(arr[innerIndex] < arr[outerIndex]){
                // innerIndex needed not the value, 
                // in order to get access to the position even outside the loop
                // for swapping after each iteration 
                smallestIndex = innerIndex;
            }
        }

        // swapping
        [arr[outerIndex], arr[smallestIndex]] = [arr[smallestIndex], arr[outerIndex]];
    }

    return arr;
}

const result = selectionSort([3,6,4,1,8]);
console.log("result:", result);


/////////////// optimised
function selectionSort2(arr){
    // (arr.length - 1) => outerIndex=(4-1)=3, innerIndex=4
    for (let outerIndex = 0; outerIndex < arr.length - 1; outerIndex++) {
        let smallestIndex = outerIndex;
        
        for (let innerIndex = outerIndex + 1; innerIndex < arr.length; innerIndex++) {
            if(arr[innerIndex] < arr[outerIndex]){
                smallestIndex = innerIndex;
            }
        }

        // optimized swap...preventing self swap 
        // ...where pointer in the unsorted portion is the smallest
        // ...eg: [1,4,3]is the 
        if(outerIndex === smallestIndex) continue;
        [arr[outerIndex], arr[smallestIndex]] = [arr[smallestIndex], arr[outerIndex]];

        // if(outerIndex !== smallestIndex){
        //     [arr[outerIndex], arr[smallestIndex]] = [arr[smallestIndex], arr[outerIndex]];
        // }
    }

    return arr;
}

const x = selectionSort2([3,6,4,1,8]);
console.log("result2:", x);





//////////////////// conclusion
//// Bubble vs Selection
// unlike bubble sort where swap is done inside the inner loop with only inner loops indexes,
// selection sort, does that outside the inner loop with both the outer and inner loop indexes
// - "Selection sort" => 'select' the smallest in the list and then place it in the left sorted wing

// TimeComplexity 
// best case = O(n^2)...nearly sorted
// worse case = O(n^2)