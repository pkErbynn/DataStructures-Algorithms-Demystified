// implement a fxn called CountUniqueValues, 
// - which accept sorted
// - and counts the unique values in the Array
// - array can contain -ve numbers but sorted

// solution
// using Multi-pointers pattern


function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }

    let leftIndex = 0;
   
    for (let rightIndex=1; rightIndex < arr.length; rightIndex++) {
        if(arr[leftIndex] !== arr[rightIndex]){
            leftIndex++;    // changing left position pointer
            arr[leftIndex] = arr[rightIndex];   // setting position with right value
        }
    }

    return leftIndex+1;
}



console.log(countUniqueValues([1,1,1,2,2,2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1,1,1,1, 2, 4, 443]));