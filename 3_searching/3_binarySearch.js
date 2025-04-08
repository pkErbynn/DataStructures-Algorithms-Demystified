// faster
// requires sorted inputs


//////// using iteration method
function binarySearch_iteration(sortedArr, target){
    let start = 0;
    let end = sortedArr.length - 1;

    // only (start < end) will exempt mid value when start and end point to same midpoint
    while(start <= end){
        // .floor() rounds down thus removing decimal points 

        // let midIndex = Math.floor((start + end) / 2); // might be possible that (start + end) exceeds data type range even before it get divided  by 2

        let midIndex = Math.floor(start + (end - start) / 2);

        if(target === sortedArr[midIndex]) return midIndex;

        // arr = [2, 3, 4, 5, 6, 7, 8]...target = 7
        //       (s)      (m)      (e)...target > m...hence, target falls on the right...hence, move s pointer further to the right
        if(target > sortedArr[midIndex]){
            start = midIndex + 1;
        } 
        else {
            end = midIndex - 1;
        }
    }

    // pointer positions after loop termination, ie. start > end
    // arr = [2,  3,  4,  5,  6,  7,  8]...target = 7
    //                           (e) (s)

    return -1; 
}

console.log("binarySearch_iteration:", binarySearch_iteration([1,2,3,4,5,6,7,8,9], 7));
console.log("binarySearch_iteration:", binarySearch_iteration([1,2,3,4,5,6,7,8,9], 6));
console.log("binarySearch_iteration", binarySearch_iteration([1,2,3,4,5,6,7,8,9], 1));
console.log("binarySearch_iteration", binarySearch_iteration([1,2,3,4,5,6,7,8,9], 3));
console.log("binarySearch_iteration", binarySearch_iteration([9,8,7,6,5,4,3,2,1], 3));  // wrong solution



////////// using recursion method
function binarySearch_recursion(sortedArr, target, start, end){
    // base condition
    if(start > end) return -1;

    let midpoint = Math.floor((start + end) / 2);

    if(sortedArr[midpoint] == target) return midpoint;

    if(sortedArr[midpoint] < target) {
        // return the call
        return binarySearch_recursion(sortedArr, target, midpoint+1, end)
    } else{
        return binarySearch_recursion(sortedArr, target, start, midpoint-1);
    }
}

console.log("===== recursive =====")
let sortedArr = [1,2,3,4,5,6,7,8,9];
console.log(binarySearch_recursion(sortedArr, 7, 0, sortedArr.length));
binarySearch_recursion(sortedArr, 7, 0, sortedArr.length)

/*
Reason why O(n) = log n
=> https://github.com/pkErbynn/DSA-Bootcamp-Java-Kunal/blob/main/lectures/10-binary%20search/Binary%20Search.pdf

*/

