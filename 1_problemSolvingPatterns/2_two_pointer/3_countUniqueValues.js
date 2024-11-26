// implement a fxn called CountUniqueValues, 
// - which accept sorted
// - and counts the unique values in the Array
// - array can contain -ve numbers but sorted
// - input = [1,1,1,2,2,2]...output = 2

// solution
// using Pointer-pointer pattern


function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }

    let leftIndex = 0;
   
    for (let rightIndex = 1; rightIndex < arr.length; rightIndex++) {
        if(arr[leftIndex] !== arr[rightIndex]){
            leftIndex++;    // change left position pointer to forward
            arr[leftIndex] = arr[rightIndex];   // ...move right pointer value to far left
        }
    }

    return leftIndex + 1;   // +1, since index started from 0
}

console.log(countUniqueValues([1,1,1,2,2,2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1,1,1,1, 2, 4, 443]));

