/*
Write a function that takes a string s as input and checks whether it’s a palindrome or not.

// Palindrome is a word, phrase, number, or other sequence of characters 
// that reads the same forward and backward, ignoring any spaces, punctuation, or capitalization
// Palindrome like;
// - a MIRROW REFLECTION. When you look at a word that's a palindrome, it's like seeing its reflection in a mirror. It's like the word is mirrored perfectly, showing the same pattern no matter which way you look at it. 
//   So, when you encounter a palindrome, think of it as the word's reflection, staying the same regardless of how you see it, just like your reflection in a mirror!
*/

function isPalindrome(s) { // **
    let startIndex = 0;
    let endIndex = s.length-1;  // -1 cus of zero-based index

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
