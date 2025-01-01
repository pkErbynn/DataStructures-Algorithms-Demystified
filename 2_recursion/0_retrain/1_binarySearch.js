function bs(arr, target, start, end){

    // base case...returns value to its caller
    if(start > end){
        return -1;
    }

    // body
    let mid = start + Math.floor((end - start) / 2)

    if(target == arr[mid]) return mid;  // returns cus the entire function returns a value 

    if(target > arr[mid]){
        return bs(arr, target, mid + 1, end)
    }

    return bs(arr, target, start, mid - 1)
}

let arr = [2, 3, 5, 10, 14, 23, 40];
let start = 0;
let end = arr.length;
let target = 1;
console.log("bs:", bs(arr, target, start, end));

// // relevant var for next operations
// // return at teach side

class MyNumber {
    constructor(inpNumber) {
        this.num = inpNumber;
    }
    // get num(){
    //     return this.num;
    // }
}
let aNum = new MyNumber(3);
let bNum = 3

function change(a, b){
    a.num + 1
     b + 1;
}
change(aNum, bNum)
console.log("aNum:", aNum);
console.log("bNum:", bNum);


