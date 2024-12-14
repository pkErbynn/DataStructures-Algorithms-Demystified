
// Finding the Pivot in a rotated array
function findPivot(arr){

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = start + Math.floor((end - start) / 2)

        // case 1: If mid is the pivot
        // [4, 5, 6, 7, 0, 1, 2, 3]...if 7(that is the mid) > 0 then 4 is the pivot value cus it's steping down
        if ( arr[mid] > arr[mid + 1] ){     // boundary check if ( mid < end && arr[mid] > arr[mid + 1])
            return mid;
        }

        // case 2: If mid-1 is the pivot 
        // [4, 5, 6, 7, 0, 1, 2, 3]...if 0(mid) < 7 then 4 is the pivot value cus it's steping down
        if ( arr[mid] < arr[mid - 1] ){     // add boundary check upfront (mid > start)
            return mid - 1;
        }

        // case 3: Pivot on the right half
        // [4, 5, 6, 7, 0, 1, 2, 3]...if 4(start) < 6(mid)  move pointer to mid to shift search focus to the right half
        if ( arr[start] < arr[mid] ) {
            start = mid + 1;    // mid + 1, cus if mid is the pivot, it means will cause a step down in the next value and it would have been caught by case 1 and 2
        }

        // case 4: Pivot on the left half
        // [4, 5, 6, 7, 0, 1, 2, 3]...if 4(start) >= 1(mid), move pointer to mid to shift search focus to the right half
        else if ( arr[start] >= arr[mid] ) {    // just else block is okay
            end = mid - 1;  // mid...is not answer, cus if so, it would have been caught by case 1 and 2
        }
    }

    return -1;  // no pivot, cus array not rotated
}

console.log("Pivot1:", findPivot([4, 5, 6, 7, 0, 1, 2]));
console.log("Pivot2:", findPivot([6, 7, 0, 1, 2, 4]));
console.log("Pivot3:", findPivot([7, 0, 1, 2, 4, 6]));
console.log("Pivot3:", findPivot([0, 1, 2, 4, 6, 7]));
