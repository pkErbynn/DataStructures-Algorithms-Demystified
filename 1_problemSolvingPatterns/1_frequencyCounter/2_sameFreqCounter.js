// Frequency Counter 

function same(array1, array2) {

    if(array1.length !== array2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(const value of array1){
        frequencyCounter1[value] = !frequencyCounter1[value] ? 1 : frequencyCounter1[value] + 1;

        // if has value already, +1, else init w/ 1
        // frequencyCounter1[value] ? 
        //     (frequencyCounter1[value] = frequencyCounter1[value] + 1) : 
        //     (frequencyCounter1[value] = 1);

        // frequencyCounter1[value] = frequencyCounter1[value] + 1 || 1;
    }

    for(const value of array2){
        frequencyCounter2[value] = frequencyCounter2[value] ? frequencyCounter2[value] + 1 : 1;
    }

    // for-in on object will print property keys
    // going through keys of frequencyCounter1 against frequencyCounter2 for a check
    // going through values of frequencyCounter1 against frequencyCounter2 for a check
    for(let key in frequencyCounter1){
        let squaredKey = key ** 2;
        if(!frequencyCounter2[squaredKey]){ // if keys doesn't exist, no valid value - checking keys
            return false;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[squaredKey]){   // - checking values
            return false;
        }
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}

console.log(same([1,2,2,2], [1,1,4,4]));
console.log(same([1,2,2,1], [1,1,4,4]));
console.log(same([1,2,3], [9,1,4]));


// TIME COMPLEXITY = O(n)