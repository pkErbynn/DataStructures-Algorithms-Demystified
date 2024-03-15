/*
Write a function that takes a string s as input and checks whether it’s a palindrome or not.
*/

function isPalindrome(s) {
    let startIndex = 0;
    let endIndex = s.length-1;

    while(startIndex <= endIndex){
        if(s[startIndex] != s[endIndex]){
            return false;
        }
        endIndex--;
        startIndex++;

        //// or...
        // if(s[startIndex] == s[endIndex]){
        //     startIndex++;
        //     endIndex--;
        //     continue;
        // }
        // return false;
    }

    return true;
}

console.log("Result:", isPalindrome("madam"));
console.log("Result2:", isPalindrome("racecar"));
console.log("Result3:", isPalindrome("javascript"));


////// using for-loop
function isPalindrome_forloop(s) {
    let endIndex = s.length - 1;
    for(let startIndex=0; startIndex<=endIndex; startIndex++){
        if(s[startIndex] != s[endIndex]){
            return false;
        }
        endIndex--;
    }
    return true;
}
console.log("Result_forloop:", isPalindrome_forloop("madam"));
console.log("Result2_forloop:", isPalindrome_forloop("racecar"));
console.log("Result3_forloop:", isPalindrome_forloop("javascript"));


// A palindrome is a word, phrase, number, or other sequence of characters 
// that reads the same forward and backward, ignoring any spaces, punctuation, or capitalization