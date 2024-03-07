function selSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let miniValueIndex = i;

        // if j start from 0, you will slip to compare with already sorted element
        for(let j = i; j < arr.length; j++ ){
            if(arr[j] < arr[i]){
                miniValueIndex = j;
            }
        }

        [ arr[i], arr[miniValueIndex] ] = [ arr[miniValueIndex], arr[i] ]
    }

    return arr;
}

const result2 = selSort([3,6,4,1,8]);
console.log("Selection Sort result:", result2);




/////// optimized


function selSort2(arr) {
    for(let i = 0; i < arr.length; i++){
        let miniValueIndex = i;

        // j ahead plus 1
        for(let j = i + 1; j < arr.length; j++ ){
            if(arr[j] < arr[i]){
                miniValueIndex = j;
            }
        }

        if(i === miniValueIndex) continue;
        [ arr[i], arr[miniValueIndex] ] = [ arr[miniValueIndex], arr[i] ]
    }

    return arr;
}

let result3 = selSort2([3,6,4,1,8]);
console.log("Selection Sort2 result:", result3);
