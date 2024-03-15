// binary search approach

function search(arr, targetValue){
    let minIndex = 0;
    let maxIndex = arr.length-1;

    while(minIndex <= maxIndex){
        let middleIndex = Math.floor((minIndex + maxIndex) / 2) // removes decimal points
        if(targetValue > arr[middleIndex]){
            minIndex = middleIndex + 1; // lower bound moves up/right
        }
        else if(targetValue < arr[middleIndex]){
            maxIndex = middleIndex - 1; // max bound moves down/left
        }
        else{
            return middleIndex;
        }
    }

    return -1;
}

console.log(search([1,2,4,5], 4));


// o(log n)

// if while-loop can replace for-loop, Why not use for-loop.
// a While-loop would be suitable in this case, 
//because you should update the values of left(start), right(end) and middle indexes inside the loop.