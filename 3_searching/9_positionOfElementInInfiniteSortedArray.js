// Question: https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/
// Explaination: https://youtu.be/W9QJ8HaRvJQ?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=5553

findThePostitionOfTarget  = function(arr, target) {

    // start with box size of 2
    let start = 0;
    let end = 1;

    // keep expanding the box size to engulf the target value
    // so that binary search can be used to find the target value
    while (target > arr[end]) {
        let boxSize = (end - start) + 1

        start = end + 1;        // start moves behind end one-step 
        end = start + (boxSize * 2); // new end streches starting from start position to doubled the size
    }

    // do binary search when the target is now contained in the box range, ie. target <= arr[end]...ie. start <= target <= end
    while (start <= end){
        let midIndex = Math.floor((end + start) / 2)

        if (target == arr[midIndex]){
            return midIndex;
        }

        if (target < arr[midIndex]){
            end = midIndex - 1;
        }

        else {
            start = midIndex + 1;
        }
    }

    return -1;
}

console.log("findThePostitionOfTarget 1: ", findThePostitionOfTarget([1, 2, 4, 6, 7, 9, 14], 2));
console.log("findThePostitionOfTarget 2: ", findThePostitionOfTarget([1, 2, 4, 6, 7, 9, 14, 15], 7));
console.log("findThePostitionOfTarget 3: ", findThePostitionOfTarget([1, 2, 4, 6, 7, 9, 14, 17], 20));
