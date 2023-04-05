// TipGist:
// - swaps adjascent elements
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

console.log("A:",bubbleSort([1,7,2,10,3,4,9,6]))


//////////// optimization with increasing outer loop ***
// optimized for nearly sorted data
// use this impl
function bubbleSortEffective(array) { // ***
    for (let i = 0; i < array.length; i++) {
        let isSwapped = false;

        // j = 0...5, 0...4, 0...3, 0...2, 0...
        // can be up to `array.length - i - 1`
        for (let j = 0; j < array.length - i; j++) {
            // swap adjescent elements
           if(array[j] > array[j+1]){
               [array[j], array[j+1]] = [array[j+1], array[j]]; 
               isSwapped = true; // since swap is made
            }
        }

        if(!isSwapped){
            break;
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
