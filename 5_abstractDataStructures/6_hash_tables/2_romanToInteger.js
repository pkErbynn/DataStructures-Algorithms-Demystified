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

        if(next == undefined){      // when 'next' points outside...meaning one element remains only for 'current'
            intNumberRep = intNumberRep + current;
            return intNumberRep;
        }
    }

    return intNumberRep;
}

console.log("romanToInt1", romanToInt("III"));     // 3
console.log("romanToInt2", romanToInt("IV"));      // 4
console.log("romanToInt3", romanToInt("IX"));      // 9
console.log("romanToInt4", romanToInt("LVIII"));   // 58
console.log("romanToInt5", romanToInt("MCMXCIV")); // 1994


function romanToInt_forloop(str) {
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

    for (let i = 0; i < str.length; i++) {
        const current = romanMap[str[i]];
        const next = romanMap[str[i + 1]];

        if (!next || current >= next) {    // Normal case (or last character, next doesn't exists)
            intNumberRep += current;
        } 
        else {                             // Subtractive case
            intNumberRep -= current;
        }
    }

    return intNumberRep;
}

console.log("romanToInt_forloop1", romanToInt_forloop("III"));     // 3
console.log("romanToInt_forloop2", romanToInt_forloop("IV"));      // 4
console.log("romanToInt_forloop3", romanToInt_forloop("IX"));      // 9
console.log("romanToInt_forloop4", romanToInt_forloop("LVIII"));   // 58
console.log("romanToInt_forloop5", romanToInt_forloop("MCMXCIV")); // 1994
