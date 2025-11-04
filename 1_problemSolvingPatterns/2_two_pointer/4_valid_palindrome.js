/*
Write a function that takes a string s as input and checks whether it’s a palindrome or not.

About Palintrome
- Palindrome is a word, phrase, number, or other sequence of characters 
that reads the same forward and backward, ignoring any spaces, punctuation, or capitalization
- Palindrome is like a MIRROW REFLECTION. When you look at a word that's a palindrome, it's like seeing its reflection in a mirror. It's like the word is mirrored perfectly, showing the same pattern no matter which way you look at it. 
- So, when you encounter a palindrome, think of it as the word's reflection, staying the same regardless of how you see it, just like your reflection in a mirror!

*/



function isPalindrome(s) { // ***
    let startIndex = 0;
    let endIndex = s.length - 1;  // -1 cus of zero-based index

    while(startIndex < endIndex){      // '<' cus if left with single char, it's  already palindrome for odd-length
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

console.log("isPalindrome_Result1:", isPalindrome("madam"));
console.log("isPalindrome_Result2:", isPalindrome("racecar"));
console.log("isPalindrome_Result3:", isPalindrome("baab"));  // even
console.log("isPalindrome_Result4:", isPalindrome("javascript"));


////// for '<=' while-condition
function isPalindrome2(s) { // **
    let startIndex = 0;
    let endIndex = s.length - 1;  // -1 cus of zero-based index

    while(startIndex <= endIndex){      // '<=' cus single char can be palindrome for odd-length
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

console.log("isPalindrome2_Result1:", isPalindrome2("madam"));
console.log("isPalindrome2_Result2:", isPalindrome2("racecar"));
console.log("isPalindrome2_Result3:", isPalindrome2("baab"));  // even
console.log("isPalindrome2_Result4:", isPalindrome2("javascript"));


////// using for-loop
function isPalindrome_forloop(s) {
    let endIndex = s.length - 1;

    for(let startIndex = 0; startIndex <= endIndex; startIndex++){
        if(s[startIndex] != s[endIndex]){
            return false;
        }
        endIndex--;
    }
    
    return true;
}
console.log("Result1_forloop:", isPalindrome_forloop("madam"));
console.log("Result2_forloop:", isPalindrome_forloop("racecar"));
console.log("Result3_forloop:", isPalindrome_forloop("baab"));  // even
console.log("Result4_forloop:", isPalindrome_forloop("javascript"));


/*

Feedback: while (left < right) vs while (left <= right)
- for while (left < right):
    - compares characters until the two pointers meet, ie. stops before the middle 
    - Once left == right, then it's at the middle character in ODD-LENGTH strings and no need to compare it with itself.
    - This avoids one unnecessary iteration.

- for while (left <= right):
    - Also works, but adds one extra iteration when left == right.
    - The middle character will be compared to itself, which will always match, so it’s harmless but redundant.
    - Adds one more comparison, ie. an extra constant amount of work, ie. tiny tiny bit less efficient.

----

Recall tips:

Anagram
- think “Arrange again.”
- “Gram” (letters) → “Ana” (again).
- Another arrangement/grammar

Palindrom 
- Same both ways
- Pendilom swings,  forward and backwards

----

Implemationation Strategies:
- Know that panlidrome implementation using 2-pointer can be done in two approaches:
    1) Two pointers from both opposite ends meeting each other in the middle (regular approach)
    2) Two pointers from middle expanding to opposite ends, while checking for palindrome

Even/Odd-Length Palindrome:
- The length of the elements can affect the condition at which the loop is terminated based on the implementation strategy when each palindrom check is valid
- For ends-to-middle two-pointers implementation approach,
    - For Even: loop terminates when pointers cross each other, ie. left > right
    - For Odd: loop terminates when pointers meet at same element at the middle, ie. left == right
    - Generic/Consolidation/Efficient: loop terminates will when pointers cross each other at any time, ie. left > right, for odd or even
- For middle-to-ends two-pointers implementation approach,
    - For Even/Odd: loop terminates when pointers go beyond the array
    - For Even: pointers starts at mid and (mid + 1)
    - For Odd: pointers all starts mid....or will start at (mid - 1) and (mid + 1)

*/