// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// productOfArray([1,2])
// [1,2] => 1*2 = 2
// [2,4,2] => 2 * 4 * 2 = 16

function productOfArray_iterative(arr){
    let res = 1; // initial base value for mult is 1, 1*2 = 2
    for(let i=0; i<arr.length; i++){
        res = res * arr[i];
    }
    return res;
}
console.log(productOfArray_iterative([3,4,1]))


///////////////////

function productOfArray_recursive(arr){
    if(arr.length === 0) return 1;

    // .shift() returns the first element in the array
    // and then causes side effect by changing the original array
    let initial = arr.shift() * productOfArray_recursive(arr);
    return initial;
}
console.log(productOfArray_recursive([3,4,1]))

