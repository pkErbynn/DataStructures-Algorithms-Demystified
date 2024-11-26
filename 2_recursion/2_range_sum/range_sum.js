// using recursion

// num = 4
// 4 + 3 + 2 + 1

function rangeSum(num){

    // base case
    // return value will be used for further computation, 
    // so it needs to return something @ base case
    if(num === 1){
        return 1;
    }

    // recall itself w/ modified input
    let modifiedNum = num-1;
    let sum = num + rangeSum(modifiedNum);  // suming at a level

    return sum;
}

console.log(rangeSum(4));
rangeSum(4);

// sum = 4 + rangeSum(3)
//             3   +   rangeSum(2)
//                         2   + rangeSum(1) 
//                                 1
                

