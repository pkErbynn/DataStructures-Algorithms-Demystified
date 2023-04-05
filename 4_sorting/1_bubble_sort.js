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




///////////////////////
// optimized
// doesn't loop up to the far rigth end again after being sorted at that right-end wing
function bubbleSort3(array) {
    //from right end to left begining
    for (let index = array.length; index > 0; index--) { 
        // index2 < index...since the far right gets sorted
        // bound decrease after each sort iteration..8,7,6...
        // only used as bound
        for (let index2 = 0; index2 < index; index2++) {
        //    console.log(array);
           if(array[index2] > array[index2+1]){
            //    console.log(`${array[index2]} > ${array[index2+1]}, swap`);
               [array[index2], array[index2+1]] = [array[index2+1], array[index2]];
            }
        }
    }
    return array;
}

console.log("B:", bubbleSort3([1,7,2,10,3,4,9,6]));


//////////// optimization with increasing outer loop ***
// optimized for nearly sorted data
// use this impl
function bubbleSortEffective(array) { // ***
    for (let i = 0; i < array.length; i++) {
        let isNotSwapped = true;

        // j = 0...5, 0...4, 0...3, 0...2, 0...
        // can be up to `array.length - i - 1`
        for (let j = 0; j < array.length - i; j++) {
            // swap adjescent elements
           if(array[j] > array[j+1]){
               [array[j], array[j+1]] = [array[j+1], array[j]]; 
               isNotSwapped = false; // since swap is made
            }
        }

        if(isNotSwapped){
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
