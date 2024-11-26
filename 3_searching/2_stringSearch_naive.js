// write a javascript algorithm function which takes a long string and a substring. 
// using nested forloop, search throughout the long string to determine the number of times the substring is found in the long string. 
// And test the function with sample input values 

function stringSearch(longStr, shortStr) { // ***
    let counter = 0;
    for(let i = 0; i < longStr.length - shortStr.length; i++){
        for(let j = 0; j < shortStr.length; j++){
            let currentLongChar = longStr[i];
            let currentShortChar = shortStr[j];

            if(currentLongChar === currentShortChar){
                i++;
            }
            if(currentLongChar !== currentShortChar){   // stop the current j loop 
                break;
            }
            
            if(j === shortStr.length - 1){      // counting full word             
                counter++;
            }
        }
    }

    return counter;
}

let longString = "the quick brown th fox jumps over the lazy dog";
let subString = "the";
console.log(stringSearch(longString, subString)); // Output: 2

///////////////////

// different approach determining move current element's index of long string to next element's index using [i+j]
function stringSearch3(longStr, shortStr) {
    let counter = 0;
    for(let i = 0; i < longStr.length; i++){
        for(let j = 0; j < shortStr.length; j++){
            // why [i+j]?
            // eg; i=5, j=0-3
            // i=[5+0]=5
            // i=[5+1]=6...onwards
            // i=[5 + (0...n)]
            // thus allowing get index of next element of outerloop while in innerloop
            let currentLongChar = longStr[i+j]; 
            let currentShortChar = shortStr[j];

            if(currentLongChar !== currentShortChar){
                break;
            }
            
            if(j === shortStr.length - 1){
                counter++;
            }
        }
    }

    return counter;
}

let longString3 = "the quick brown th fox jumps over the lazy dog";
let subString3 = "the";
console.log(stringSearch3(longString3, subString3)); // Output: 2



////////////////// clean code

function stringSearch3_clean(longStr, shortStr) {
    let counter = 0;
    for(let i = 0; i < longStr.length; i++){
        for(let j = 0; j < shortStr.length; j++){
            if(longStr[i+j] !== shortStr[j]) break;
            if(j === shortStr.length - 1) counter++;
        }
    }
    return counter;
}


/////////////// optimized

function stringSearch_opt(longStr, shortStr) {
    let counter = 0;
    for (let i = 0; i <= longStr.length - shortStr.length; i++) {
        if (longStr.slice(i, i + shortStr.length) === shortStr) {
            counter++;
        }
    }
    return counter;
}

console.log("x:", stringSearch_opt("the quick brown th fox jumps over the lazy dog", "th"));

/*
In this implementation, we use the slice() method to get a substring of longStr starting at index i and ending at index i + shortStr.length - 1.
We then compare this substring to shortStr using the === operator. If they match, we increment the counter.

This implementation has a time complexity of O(n) because we are iterating over longStr only once and performing a constant amount of work for each iteration.
*/
