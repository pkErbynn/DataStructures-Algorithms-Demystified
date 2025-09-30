function romanToInt(str) {
    const romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let intNumberRep = 0;

    let iPointer = 0;
    while(iPointer < str.length){
        const current = romanMap[str[iPointer]];
        const next = romanMap[str[iPointer + 1]];

        if(current >= next){    // Normal condition: prev greater/equal than next...eg. XVII
            intNumberRep = intNumberRep + current;
            iPointer++;
        }
        else if(current < next) {   // Edge case: prev less than next...eg. IIV
            intNumberRep = intNumberRep + (next - current);
            iPointer += 2;  // jump over the two pairs
        }
    }

    return intNumberRep;
}

