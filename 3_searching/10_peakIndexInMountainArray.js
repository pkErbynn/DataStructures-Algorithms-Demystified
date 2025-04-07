// find the index where the increasing part of the array stops and decereases
// Hint: input array are sorted + search goal thus, apply binary search


function peakIndexInMountainArray2(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor( start + ((end - start) / 2) )
        
        // if both points to same index/value, means that's the peak meak
        if(start == end) return start
        
        // if mid is the peak...(p-1), p, (p-1)...3, 4, 3
        if(arr[mid + 1] < arr[mid]  &&  arr[mid] > arr[mid - 1]){
            return mid
        }

        // at the increasing part, move start pointer forward to the next bigger value
        if(arr[mid + 1] > arr[mid]){
            start = mid + 1
        }
        // at the decreasing part.... "==" not an option cus that's the loops breaking point
        else 
        {        
            // setting end = mid - 1, might skip the peak value if mid is the peak value
            // this mid may is a possible answer but look at left, by pinning this mid as end, and finding newMid (at line 10) to compare with this if that is greater or not
            end = mid
        }
    }

    return -1;
}

console.log("Peak11", peakIndexInMountainArray2([1, 2, 3, 5, 9, 7, 5, 1]))
console.log("Peak22", peakIndexInMountainArray2([3, 5, 9, 1, 0]))
console.log("Peak33", peakIndexInMountainArray2([3, 9, 8, 7, 5, 6, 4, 3, 2, 1, 0 ]))




/////// Alternative
function peakIndexInMountainArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let mid = Math.floor( start + ((end - start) / 2) )
        
        // at the increasing part, move start pointer forward to the next bigger value
        if(arr[mid + 1] > arr[mid]){
            start = mid + 1
        }

        // at the decreasing part.... "==" not an option cus that's the loops breaking point
        else 
        {        
            // setting end = mid - 1, might skip the peak value if mid is the peak value
            // this mid may is a possible answer but look at left, by pinning this mid as end, and finding newMid (at line 10) to compare with this if that is greater or not
            end = mid
        }
    }

    return start;   // if both points to value, means that value is the largest
}

console.log("Peak1", peakIndexInMountainArray([1, 2, 3, 5, 9, 7, 5, 1]))
console.log("Peak2", peakIndexInMountainArray([3, 5, 9, 1, 0]))
console.log("Peak3", peakIndexInMountainArray([3, 9, 8, 7, 5, 6, 4, 3, 2, 1, 0 ]))


//NB
/*

== General Binary Search:

In a standard binary search (e.g., finding a specific target in a sorted array):
	1.	Midpoint Comparison:
	•	If the target value is less than arr[mid], the target must be in the left half, so you set end = mid - 1.
	•	If the target value is greater than arr[mid], the target must be in the right half, so you set start = mid + 1.
	2.	Key Condition:
	•	The mid index itself is excluded from further searches because you know the target can’t be at mid based on the comparison.

For example, searching for 4 in [1, 2, 4, 5, 6]:
	•	If arr[mid] = 5, you know 4 is in the left half, so you set end = mid - 1, excluding 5.

Why end = mid - 1 works in the general case:
	•	In exact match problems, when arr[mid] doesn’t equal the target, you can safely exclude mid because it has been checked and can’t be the solution.


== Peak Finding in a Mountain Array:

This is a different type of problem:
	•	You aren’t looking for an exact match. Instead, you’re searching for a peak, which can be at mid.
	•	The peak is guaranteed to exist in the range [start, end] throughout the search.

Why end = mid works here:
	•	When arr[mid] > arr[mid + 1], the peak is either:
	•	At mid, or
	•	Somewhere to the left of mid.

To ensure you don’t skip the peak, you must include mid in the search space. Setting end = mid achieves this.

Why end = mid - 1 fails here:
	•	If you exclude mid (by setting end = mid - 1), you may skip the peak if mid is the actual peak.
*/