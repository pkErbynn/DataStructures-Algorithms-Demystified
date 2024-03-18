function maxSubArray(arr, num){
    let maxSum = 0;

    for(let i = 0; i <= arr.length - num; i++){ //for(let i=0; i < arr.length - num + 1; i++){
        let innerSum = 0;
        for(let j = i; j < i + num; j++){   // 1 to (1+3) => 1 to 4, 2 to (2+3) => 2 to 5
            innerSum += arr[j];
        }

        if(innerSum > maxSum){
            maxSum = innerSum;
        }
    }
    return maxSum;
}
console.log("maxSum:", maxSubArray([1,2,3,4,5], 3));


function maxSubArray2(arr, num){
    let maxSum = 0;

    for(let i = 0; i < arr.length; i++){
        let innerSum = 0;   // window sum

        for(let j = i; j < i + num; j++){
            if(j >= arr.length) break;  // checks inner-window's upper bound overstretch over outer-window's upper bound
            innerSum += arr[j];
        }

        maxSum = Math.max(innerSum, maxSum);
    }
    
    return maxSum;
}

console.log(maxSubArray2([1,2,3,4,5], 3));


