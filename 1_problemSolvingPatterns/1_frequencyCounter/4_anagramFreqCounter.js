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
        if(!frequencyCounterStr2[key]){ // no value, implies no key
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


// ============== Solution 2

// using Frequency Counter Pattern
// Improve solution with reduced sibling loops...from 3 loops to 2
// ...creating object for just one string, instead of two, reducing space complexity

function anagram2(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let frequencyCounterStr1 = {};  //eg: { a: 3, n: 1}
    
    for(let value of str1){
        frequencyCounterStr1[value] ? 
            frequencyCounterStr1[value] += 1 :  // frequencyCounterStr1[value] = frequencyCounterStr1[value] + 1 : 
            frequencyCounterStr1[value] = 1; 
    }

    // loop through second array and search for keys in first array's object, frequencyCounterStr1

    // fc1 = {a: 3, n: 1, g: 1, r: 1, m: 1}    // 'anagram', 'nagaram'
    // str2 = ['n', 'a', 'g', 'a', 'r', 'a', 'm']
    //        letter
    for(let letter of str2){
        if(!frequencyCounterStr1[letter]){
            return false;
        } 
        else{
            frequencyCounterStr1[letter] = frequencyCounterStr1[letter] - 1;    // reduce object value by 1
            // frequencyCounterStr1[letter] -= 1;
        }
    }

    // console.log(frequencyCounterStr1);
    
    // since there are many checks to fail, I go through the failure checks, if passes then it's true
    return true;
}

console.log(anagram2('anagram', 'nagaram'));
console.log(anagram2('rat', 'car'));
console.log(anagram2('see', 'ees'));
console.log(anagram2('seee', 'eess'));
// console.log(anagram2('awesome', 'awesom'));
// console.log(anagram2('qwerty', 'qeywrt'));
// console.log(anagram2('seee', 'eess'));
// console.log(anagram2('cinema', 'iceman'));


// Time Complexity = O(n)


// NB: 
// - Frequency Counter has a lot of instances where the arrays/strings are not same/equivalent (based on condition)
// - That's why the inner loops checks for falsy statement
// - And the outer loop checks for truthy return