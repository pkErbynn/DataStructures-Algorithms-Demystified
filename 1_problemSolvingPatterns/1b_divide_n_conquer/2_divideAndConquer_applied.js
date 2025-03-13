// binary search approach

function search(arr, targetValue){
    let minIndexPointer = 0;
    let maxIndexPointer = arr.length-1;

    while(minIndexPointer <= maxIndexPointer){
        let middleIndexPointer = Math.floor((minIndexPointer + maxIndexPointer) / 2) // removes decimal points
        if(targetValue > arr[middleIndexPointer]){
            minIndexPointer = middleIndexPointer + 1; // lower bound moves up/right
        }
        else if(targetValue < arr[middleIndexPointer]){
            maxIndexPointer = middleIndexPointer - 1; // max bound moves down/left
        }
        else{
            return middleIndexPointer;
        }
    }

    return -1;  // -ve as not found, cus any positive number is a valid array index
}

console.log(search([1,2,4,5], 4));


// o(log n)

// if while-loop can replace for-loop, Why not use for-loop.
// a While-loop would be suitable in this case, 
//because you should update the values of left(start), right(end) and middle indexes inside the loop.