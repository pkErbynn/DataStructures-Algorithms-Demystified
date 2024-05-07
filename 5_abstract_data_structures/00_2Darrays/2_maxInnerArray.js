/*
Find max sum inner array 

Example:
Input: [ [1, 2, 3], [3, 2, 0] ]
Output: 6
Explaination:
    1 + 2 + 3 = 6
    3 + 2 + 0 = 6
*/

// [ 
//     [1, 2, 3],  
//     [3, 2, 0]  
// ]

const maxWealth = (arr) => {
    let maxSum = Number.MIN_VALUE;

    for(let row = 0; row < arr.length; row++){
        console.log(arr[row]);

        let colSum = 0;
        for(let col = 0; col < arr[row].length; col++){
            console.log(arr[row][col]);
            colSum = colSum + arr[row][col];
        }

        console.log("Sum", colSum);

        if(colSum > maxSum){
            maxSum = colSum
        }
    }

    console.log("Max Sum::", maxSum);
}

let arr = [ 
    [1, 2, 3],  
    [3, 2, 0]  
]

maxWealth(arr);