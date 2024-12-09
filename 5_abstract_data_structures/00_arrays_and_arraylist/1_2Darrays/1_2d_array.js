// intitializaion/declaration
let arr = new Array(3).fill(null).map(_ => []);
console.log("arr:", arr);

// instantiation
let arr2 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8]
]

for (let row = 0; row < arr2.length; row++) {
    
    for(let col = 0; col < arr2[row].length; col++){

        console.log(arr2[row][col] + " ");
    }

    console.log("---");
}

// size of col = arr2[row].length
// => dynamic




// ========== 2D Array Linear Search =========
// Check if a number is found in 2D array below:
let arr3 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8]
]

const findElement = (arr, target) => {

    for(let row = 0; row < arr.length; row++){

        for(let col = 0; col < arr[row].length; col++){
    
            if(arr[row][col] == target){
                return [row, col]
            }
        }
    }
    
    return [-1, -1]
}

console.log("found element at index:", findElement(arr3, 1));
console.log("found element at index:", findElement(arr3, 4));
console.log("found element at index:", findElement(arr3, 7));



// ===== max sum in array in 2D