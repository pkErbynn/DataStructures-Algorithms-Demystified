// linear search
// unsorted input

function linear_search(arr, value) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == value){
            return i;
        }
    }
    return -1;
}

console.log(linear_search(["i", "am", "here", "coding"], "am"));
console.log(linear_search(["i", "am", "here", "coding"], "I"));
console.log(linear_search(["i", "am", "here", "coding"], "absent"));

// Best case = O(1);
// Average case = O(n);
// Worst case = O(n);