const cyclicSort = (numbers) => {
    // since will not be always increase the index (to jump to the next value) in each iteration,
    // only increment based on a condition, so for-loop won't be used
    // instead, while loop will be used    
    
    let index = 0;
    while(index < numbers.length){
        let currentNumber = numbers[index];
        let rightNumber = numbers[currentNumber - 1];
        if(currentNumber == rightNumber){
            index++;
        }
        else if(currentNumber != rightNumber){
            [numbers[index], numbers[currentNumber - 1]] = [numbers[currentNumber - 1], numbers[index]];
        }
    }

    return numbers;
}

console.log("Result:", cyclicSort([2, 6, 4, 3, 1, 5]));



// ========= reversed condition

const cyclicSort2 = (numbers) => { // ***

    let index = 0;
    while(numbers[index]){  // while number exists
        let currentNumber = numbers[index];
        let rightNumber = numbers[currentNumber - 1];
       
        if(currentNumber != rightNumber){
            [numbers[index], numbers[currentNumber - 1]] = [numbers[currentNumber - 1], numbers[index]];
        }
        else{
            index++;
        }
    }

    return numbers;
}

console.log("Result2:", cyclicSort2([2, 6, 4, 3, 1, 5]));