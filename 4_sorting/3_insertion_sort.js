// Insertion doesn't require swapping unlike the other sorting algo,
// Insertion requires shifting of elements
// Called 'insertion' cus it picks any first element from right-winged unsorted portion
// ...and INSERT it in the correct position at left-winged sorted portion

// On the flip side Selection, carefully SELECT the smallest and on the right and places it on the left sorted portion(doesn't carefully insert) 

function insertion(arr){
    //i=1 cus first element is considered sorted by default
    for(let i=1; i<arr.length; i++){
        // store each element
        let currentValue = arr[i];

        // shift elements for correct insertion
        // compare each element on the right sorted position
        let j = i-1; // the index before current index

        // shift elements
        while(arr[j] > currentValue && j >= 0){
            // copy to forward index
            arr[j+1] = arr[j];
            j--
        }
       
       // place copy back to fill space created infront of current pointer during shifting
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertion([2,5,5,1,-5,9]));
console.log(insertion([2,3,4,5,1])); // best case, nearly sorted data
console.log(insertion([5,4,3,2,1])); // worse case

///////////////
// using forlop
function insertionUsingForloop(arr){
    for(let i=1; i<arr.length; i++){
        let currentValue = arr[i];

        // 'var' is function scoped, while 'let' is block scoped
        let j=i-1;
        for(j; j>=0 && arr[j] > currentValue; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionUsingForloop([8, -1, 5, 0]));


//////////////////
// optimise code
// much efficent especially on nearly sorted data
function insertionOptimized(arr){
    for(let i=1; i<arr.length; i++){
        let currentValue = arr[i];

        var j=i-1;
        // skip
        if(arr[j] <= currentValue) continue;

        for(j; j>=0 && arr[j] > currentValue;j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionOptimized([8, -1, 5, 0]));
console.log(insertionOptimized([2,3,4,1]));


// Time Complexity
// Best case: o(n)...nearly sorted
// Worse case: o(n^2)
