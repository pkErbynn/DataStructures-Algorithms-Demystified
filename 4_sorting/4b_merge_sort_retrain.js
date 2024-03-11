function merge_sort_algo(arr) {
 
    // SPLITTING
    if(arr.length <= 1){  // base case
        return arr;
    }

    let midIndex = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, midIndex);  // slice(start from, end to but not included)
    let rightHalf = arr.slice(midIndex, arr.length);
    
    let lResult = merge_sort_algo(leftHalf); // don't forget to collect the returned results
    let rResult = merge_sort_algo(rightHalf); 
    

    // MERGING
    let leftPointer = 0;
    let rightPointer = 0;
    let mergedResult = [];

    // moving same steps in each half
    while (leftPointer < lResult.length && rightPointer < rResult.length) {
        if(lResult[leftPointer] < rResult[rightPointer]){
            mergedResult.push(lResult[leftPointer]);
            leftPointer++;
        } 
        else {
            mergedResult.push(rResult[rightPointer]);
            rightPointer++;
        }
    }

    // when after same steps, some array half still have some values, then push the rest to result
    while(leftPointer < lResult.length){
        mergedResult.push(lResult[leftPointer])
        leftPointer++;
    }


    while(rightPointer < rResult.length){
        mergedResult.push(rResult[rightPointer])
        rightPointer++;
    }

    return mergedResult;
}

console.log("result", merge_sort_algo([4,3,5,2,8,6, -1]))



//////////////////// with MODULAR FUNCTIONS

function merge_sort_algo_modular(arr) {
 
    // SPLITTING
    if(arr.length <= 1){  // base case
        return arr;
    }

    let midIndex = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, midIndex);  // slice(start from, end to but not included)
    let rightHalf = arr.slice(midIndex, arr.length);
    
    let lResult = merge_sort_algo_modular(leftHalf); // don't forget to collect the returned results
    let rResult = merge_sort_algo_modular(rightHalf); 
    

    // MERGING
    let result = merge_slitted_halves(lResult, rResult);

    return result;
}


function merge_slitted_halves(leftHalf, rightHalf) {
    let leftPointer = 0;
    let rightPointer = 0;
    let mergedResult = [];

    // moving same steps in each half
    while (leftPointer < leftHalf.length && rightPointer < rightHalf.length) {
        if(leftHalf[leftPointer] < rightHalf[rightPointer]){
            mergedResult.push(leftHalf[leftPointer]);
            leftPointer++;
        } 
        else {
            mergedResult.push(rightHalf[rightPointer]);
            rightPointer++;
        }
    }

    // when after same steps, some array half still have some values, then push the rest to result
    while(leftPointer < leftHalf.length){
        mergedResult.push(leftHalf[leftPointer])
        leftPointer++;
    }


    while(rightPointer < rightHalf.length){
        mergedResult.push(rightHalf[rightPointer])
        rightPointer++;
    }

    return mergedResult;
}


console.log("result_modular", merge_sort_algo_modular([4,3,5,2,8,6, -1]))

