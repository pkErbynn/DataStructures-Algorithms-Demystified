// Write a funtion called SumZero
// - accepts a sorted array of integers
// - it should print out (or create) the **first** pair where sum is 0
// - should return pair that is an array of both values that sum to zero
// - or should return undefined if pair doesn't exist


function sumZero(sortedArray){
    for(let i=0; i<sortedArray.length; i++){
        for(let j=i+1; j<sortedArray.length; j++){
            if(sortedArray[i] + sortedArray[j] === 0){
                return [sortedArray[i], sortedArray[j]];
            }
        }
    }
}

// sumZero([-2, -1, 0, 1, 2])
console.log(sumZero([-2, -1, 0, 1, 2]))
sumZero([-2, 0, 1, 3])