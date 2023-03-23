/*
Write a function called Same, which accepts two arrays.
The function should return true if every value in the first array has its corresponding value squared in the second array.
The of values must be same.
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i<arr1.length; i++ ){
        let doubledValue = arr1[i] ** 2;
        let doubledValueIndex = arr2.indexOf(doubledValue);  // indexOf does a for-loop
        console.log(doubledValueIndex);
        if(doubledValueIndex === -1){
            return false;
        };
        console.log(arr2);
        arr2.splice(doubledValueIndex, 1);   // remove found value from search list
    }
    return true;    // inner loop looks for falsy statement while the outer seeks for truthy
}

console.log(same([1,2,3], [2,3]));
console.log(same([1,2,3], [1,4,9]));

// O(n) = n^2