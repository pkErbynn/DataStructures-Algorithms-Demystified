// Givem two strings, write a function to determine if the second string is an anagram of the first.
// Eg: 'cinema', formed from 'iceman'

// Anagram SIMPLE MEANING
// => implies rearranging the same letters in a different order to create ANOTHER new word
// => Greek word "ana-" means "back" or "again," and "gramma" meaning "letter." 
// => "anagram" literally means rearranging letters "again" or "backwards" to form a new word or phrase. 

// using Brute-Force approach

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    for(let value of str1){
        if(!str2.includes(value)){
            return false;
        }

        // let valueIndex = str2.indexOf(value); // or this
        // if(valueIndex < 0){
        //     return false;
        // }
        // str2.splice(valueIndex, 1);   // remove found value from search list

        str2 = str2.replace(value, '');


        // console.log(str2);
    }

    return true;
}

console.log(validAnagram('see', 'ees'));
console.log(validAnagram('seee', 'eess'));
console.log(validAnagram('cinema', 'iceman'));
// console.log(validAnagram('', ''));
// console.log(validAnagram('anagram', 'nagaram'));
// console.log(validAnagram('rat', 'car'));
// console.log(validAnagram('awesome', 'awesom'));
// console.log(validAnagram('qwerty', 'qeywrt'));


// Time Complexity = O(n^2)


// Nb:
// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, 
// using all the original letters exactly once. In other words, two strings are considered anagrams if they have the same characters, but in a different order.
// For example, the words "listen" and "silent"