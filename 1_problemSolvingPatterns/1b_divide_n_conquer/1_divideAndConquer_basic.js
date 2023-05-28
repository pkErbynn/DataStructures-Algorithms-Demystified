// Given a sorted array of integers, write a function called Search,
// that accepts a value and returns the index where
// the value passed to the function is located. 
// If value is not found, return -1

function search(arr, value){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }

    return -1;
}

console.log(search([1,2,3,4,5], 0));
console.log(search([1,2,3,4,5], 5));