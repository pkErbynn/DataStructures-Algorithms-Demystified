// Given an array of integers, return how many of them contains an even number of digits

function numberOfEvenNumberOfDigits(array) {
    let numberOfNumbers = 0;

    for (const num of array) {
        let numberOfDigits = countNumberOfDigits(num)
        
        if(numberOfDigits % 2 == 0){
            numberOfNumbers ++;
        }
    }
    return numberOfNumbers;
}

function countNumberOfDigits(number) {
    let count = 0;

    if(number == 0) return 1;

    while (number > 0) {
        count++;
        number = Math.floor(number / 10);
    }
    
    return count;
}

console.log(numberOfEvenNumberOfDigits([4334, 5, 33, 64, 4, 454, 1122334455]));
