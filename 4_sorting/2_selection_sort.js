// TipGist:
// Unlike Bubble, swapping adjascent elements, and placing BIG values to far RIGHT,
// Selection places SMALL values to the LEFT end
// ...sort of opposite to Bubble Sort
// ...compare through the entire array to SELECT the SMALLEST element and place it at beginning of unsorted array BY SWAPPING
// ...Selection select first element (temp smallest from unsorted portion) with the smallest element in the rest (n-1) of the unsorted array, if found smalles
// ...Swapping is done using Index position
// ...in sum, select the smallest value, and place it in the correct possition index through swapping
// CoreTip: 
// SelectionnSort = more effort into SELECTING the correct + less effort(naturally) to place/insert in correct position

function selectionSort(arr){
    for (let outerIndexPointer = 0; outerIndexPointer < arr.length; outerIndexPointer++) {
        let smallestIndex = outerIndexPointer;
        
        // if innerIndex start from 0, you will slip to compare with already sorted element
        for (let innerIndexPointer = outerIndexPointer; innerIndexPointer < arr.length; innerIndexPointer++) {
            if(arr[innerIndexPointer] < arr[outerIndexPointer]){
                // innerIndexPointer needed not the value, 
                // in order to get access to the position even outside the loop
                // for swapping after each iteration 
                smallestIndex = innerIndex;
            }
        }

        // swapping
        [arr[outerIndexPointer], arr[smallestIndex]] = [arr[smallestIndex], arr[outerIndexPointer]];
    }

    return arr;
}

const result = selectionSort([3,6,4,1,8]);
console.log("result:", result);




/////////////// optimised
function selectionSort2(arr){   // *********
    // (arr.length - 1) => outerIndex=(4-1)=3, innerIndex=4
    for (let outerIndex = 0; outerIndex < arr.length - 1; outerIndex++) {
        let smallestIndex = outerIndex;
        
        for (let innerIndex = outerIndex + 1; innerIndex < arr.length; innerIndex++) {
            if(arr[innerIndex] < arr[outerIndex]){
                smallestIndex = innerIndex;
            }
        }

        // optimized swap...preventing self swap 
        // ...where pointer in the unsorted portion is already the smallest, we don't have to do a self swap with its self index
        // ...eg: [1,4,3]is the 
        if(outerIndex === smallestIndex) continue;  // if selected element position same as swap position, don't swap cus you're swapping to same position
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
// CoreTip: 
// SelectionnSort = more effort into SELECTING the correct + less effort(naturally) to place/insert in correct position

// TimeComplexity 
// best case = O(n^2)...nearly sorted
// worse case = O(n^2)

// Useful when wanna REDUCE swapping / writing to memory space too much