// Insertion doesn't require swapping unlike the other sorting algo,
// Insertion requires shifting of elements
// Called 'insertion' cus it picks any first element from right-winged unsorted portion
// ...and INSERT it in the correct position at left-winged sorted portion

// On the flip side Selection, carefully SELECT the smallest and on the right and places it on the left sorted portion(doesn't carefully insert) 

// CoreTip: 
// InsertionSort = less effort(naturally) into selecting the correct element + more effort to INSERT in correct position


///////////////

function insertionUsingForloop(arr){
    // i = 1 cus first element is considered sorted
    for(let i=1; i<arr.length; i++){
        let currentValue = arr[i];  

        let j = i-1;  // 'var' is function scoped, while 'let' is block scoped

        // compare currentValue to the rest of the left half
        for(j; j >= 0 && arr[j] > currentValue; j--){    // j = value before currentValue and loop back to index = 0...arr[j] > currentValue condition can't be outsource in if block, cus will alter the j index during insertion after the loop, shouldn't even loop if curValue is not smaller, use while loop for better impl
            arr[j+1] = arr[j];  // copy/shift j
        }

        arr[j+1] = currentValue;    // [j+1] index, why not [j] index?, cus j-- occurred inside the inner loop before condition was not met to come outside
    }
    return arr;
}

console.log("insertionUsingForloop:", insertionUsingForloop([8, -1, 5, 0, -2, 3, 4]));


///////////////

function insertionUsingWhileloop(arr){
    // i = 1 cus first element is considered sorted
    for(let i=1; i<arr.length; i++){
        let currentValue = arr[i];  

        let j = i-1;  // 'var' is function scoped, while 'let' is block scoped

        // compare backwardly
        while(arr[j] > currentValue && j >= 0){
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentValue;    // [j+1] index, why not [j] index?, cus j-- occurred inside the inner loop before condition was not met to come outside
    }
    return arr;
}

console.log("insertionUsingWhileloop:", insertionUsingWhileloop([8, -1, 5, 0, -2, 3, 4]));



//////////////////
// optimise code
// much efficent especially on nearly sorted data
function insertionOptimized(arr){
    for(let i=1; i<arr.length; i++){
        let currentValue = arr[i];

        var j=i-1;

        // skip
        // when encounter an element (currentValue) that is greater than or equal to the element just before it (arr[j]), 
        // we know that the current element is already in its correct sorted position relative to the elements before it. 
        // Therefore, there's no need to perform any insertion or further iterations in this case thus improving performance
        if(arr[j] <= currentValue) continue;

        for(j; j>=0 && arr[j] > currentValue;j--){
            arr[j+1] = arr[j];
        }

        arr[j+1] = currentValue;
    }
    return arr;
}

console.log("insertionOptimized:", insertionOptimized([8, -1, 5, 0]));
console.log("insertionOptimized:", insertionOptimized([2,3,4,1]));





// Time Complexity
// Best case: o(n)...nearly sorted
// Worse case: o(n^2)



/*
Challenging questions/node/tips:

1. why is the forloop init value outside?
    ...so that its scope can be used for insertion in other scope
2. no swapping, just shiffing through copy
*/