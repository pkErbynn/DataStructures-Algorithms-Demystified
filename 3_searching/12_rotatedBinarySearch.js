// ========= Finding target element in a rotated array ========
// ***

// 1. Find the Pivot position in a rotated array
function findPivot(arr){

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = start + Math.floor((end - start) / 2)

        // case 1: If mid is the pivot
        // [4, 5, 6, 7, 0, 1, 2, 3]...if 7(that is the mid) > 0 then 4 is the pivot value cus it's steping down
        if ( arr[mid + 1] < arr[mid] ){     // boundary check if ( mid < end && arr[mid] > arr[mid + 1])
            return mid;
        }

        // case 2: If mid-1 is the pivot 
        // [4, 5, 6, 7, 0, 1, 2, 3]...if value 0(mid) < 7 then 4 is the pivot value cus it's steping down
        if ( arr[mid - 1] > arr[mid]){     // add boundary check upfront (mid > start)
            return mid - 1;
        }

        // cases below uses start pointer as reference to detect increasing and decreasing part 
        // The question is why use startPOinter as the determinant since can hover around mid (ie, mid-1, mid+1) 
        // ...just like the prev peak question to determine increasing and decreasing parts, before moving the start and end pointers
        // ...ans: simlar technique is used with the agnostic search order

        // case 3: Pivot on the right half
        // [4, 5, 6, 7, 0, 1, 2, 3]...if 4(start) < 6(mid)  move start pointer to mid to shift search focus to the right half
        if ( arr[start] <= arr[mid] ) {
            start = mid + 1;    // mid + 1, cus if mid is the pivot, it means will cause a step down in the next value and it would have been caught by case 1 and 2
        }

        // case 4: Pivot on the left half
        // [4, 5, 6, 7, 0, 1, 2, 3]...if 4(start) >= 1(mid), move end pointer to mid to shift search focus to the left half
        else if ( arr[start] > arr[mid] ) {    // just else block is okay
            end = mid - 1;  // mid...is not answer, cus if so, it would have been caught by case 1 and 2
        }
    }

    return -1;  // no pivot, cus array not rotated
}

console.log("Pivot1:", findPivot([4, 5, 6, 7, 0, 1, 2]));
console.log("Pivot2:", findPivot([6, 7, 0, 1, 2, 4]));
console.log("Pivot3:", findPivot([7, 0, 1, 2, 4, 6]));
console.log("Pivot3:", findPivot([0, 1, 2, 4, 6, 7]));


// 2. Once Pivot is fount, search in right and left halves
function binarySearch(arr, target, start, end){

    while (start <= end) {
        let mid = start + Math.floor( (end - start) / 2 );

        if (target == arr[mid]){
            return mid;
        }

        if (target < arr[mid]){
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return -1;
}

// 3. Now, put all together for the answer
function findTargetInRotatedArray(arr, target){

    let pivot = findPivot(arr);

    // if array is not a rotated
    if(pivot === -1){
        return binarySearch(arr, target, 0, arr.length - 1);
    }

    // if target is the pivot
    if (target === arr[pivot]){
        return pivot;
    }

    // If target is in the left half
    /*
    The elements to the left of the pivot are in ascending order, starting from arr[0].
    The elements to the right of the pivot are also in ascending order but are smaller than arr[0].
    
    */
    if(target >= arr[0]){    // not if(target < arr[pivot]){...cus If the target is less than the pivot value (arr[pivot]), it could be in the left half if it lies between arr[0] and arr[pivot] or the right half
        return binarySearch(arr, target, 0, pivot - 1)
    }

    // If target is in the right half
    return binarySearch(arr, target, pivot + 1, arr.length - 1);
}



console.log("findTargetInRotatedArray1:", findTargetInRotatedArray([4, 5, 6, 7, 0, 1, 2], 7));
console.log("findTargetInRotatedArray2:", findTargetInRotatedArray([0, 1, 2, 4, 6, 7], 7));
console.log("findTargetInRotatedArray3:", findTargetInRotatedArray([4, 5, 6, 7, 0, 1, 2], 5));
console.log("findTargetInRotatedArray4:", findTargetInRotatedArray([4, 5, 6, 7, 0, 1, 2], 1));


