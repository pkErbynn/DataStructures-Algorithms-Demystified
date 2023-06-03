// improve using Frequency Counter Pattern



function anagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let frequencyCounterStr1 = {};
    let frequencyCounterStr2 = {};

    for(let value of str1){
        frequencyCounterStr1[value] = frequencyCounterStr1[value] ?  frequencyCounterStr1[value] + 1 : 1;
        // frequencyCounterStr1[value] = frequencyCounterStr1[value] + 1 || 1;
    }
    
    console.log(frequencyCounterStr1);

    for(let value of str2){
        frequencyCounterStr2[value] = frequencyCounterStr2[value] ?  frequencyCounterStr2[value] + 1 : 1;
    }

    console.log(frequencyCounterStr2);

    for(let key in frequencyCounterStr1){
        // key comparison
        // if(!(key in frequencyCounterStr2)){
        //     return false;
        // }
        // if(!frequencyCounterStr2.hasOwnProperty(key)){
        //     return false;
        // }
        if(!frequencyCounterStr2[key]){
            return false;
        }

        // value comparison: number of character occurances
        if(frequencyCounterStr1[key] !== frequencyCounterStr2[key]){
            return false;
        }
    }

    // since there are many checks to fail, I go through the failure checks, if passes then it's true
    return true;
}

console.log(anagram('anagram', 'nagaram'));
console.log(anagram('rat', 'car'));
console.log(anagram('awesome', 'awesom'));
console.log(anagram('qwerty', 'qeywrt'));
console.log(anagram('see', 'ees'));
console.log(anagram('seee', 'eess'));
console.log(anagram('cinema', 'iceman'));


// Time Complexity = O(n)