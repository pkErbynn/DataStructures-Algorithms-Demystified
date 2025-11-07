/*
Write a function that takes a string s as input and checks whether it’s a palindrome or not.

---
About Palindrome
- Palindrome is a word, phrase, number, or other sequence of characters 
that reads the same forward and backward, ignoring any spaces, punctuation, or capitalization
- Palindrome is like a MIRROW REFLECTION. When you look at a word that's a palindrome, it's like seeing its reflection in a mirror. It's like the word is mirrored perfectly, showing the same pattern no matter which way you look at it. 
- So, when you encounter a palindrome, think of it as the word's reflection, staying the same regardless of how you see it, just like your reflection in a mirror!

*/


// -----
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

// ===================== Mid to ends approach   ========
function palindrome_midToEndsApproach(s) {  // **
    if(s.length === 0) return true;

    isOdd = true;  // odd by default

    if((s.length % 2) == 0){   // even/odd uses actual length w/out index positions
        isOdd = false;
    }

    let midIndex = Math.floor((s.length - 1)/2);    // rembr: w/out (-1) assumes index starts from 1, but (-1) required since it's finding the index and position starts at 0...same way midIndex in BinarySearch is (0 + len-1)/2 and (0 + len)/2
    let startIndex = midIndex;
    let endIndex = midIndex;    // all same index since odd

    // Even case
    if (!isOdd){
        startIndex = midIndex;
        endIndex = midIndex + 1;

        while (startIndex >= 0 && endIndex <= s.length - 1) {
            if(s[startIndex] !== s[endIndex]){
                return false;
            }

            startIndex--;
            endIndex++;
        }
        return true;
    }

    // Odd case
    while (startIndex >= 0 && endIndex <= s.length - 1) {
        if(startIndex == endIndex){ // skip first iteration cus they point to same index w/ same value
            startIndex--;
            endIndex++;
            continue;    
        }

        if(s[startIndex] !== s[endIndex]){
            return false;
        }

        startIndex--;
        endIndex++;
    }
    
    return true;
}

console.log("palindrome_midToEndsApproach1:", palindrome_midToEndsApproach("madam"));   // odd - valid
console.log("palindrome_midToEndsApproach2:", palindrome_midToEndsApproach("madmm"));   // odd - invalid
console.log("palindrome_midToEndsApproach3:", palindrome_midToEndsApproach("baab"));    // even - valid
console.log("palindrome_midToEndsApproach4:", palindrome_midToEndsApproach("mbaabn"));    // even - invalid
console.log("palindrome_midToEndsApproach5:", palindrome_midToEndsApproach("m"));   // odd - edgeCase - valid
console.log("palindrome_midToEndsApproach6:", palindrome_midToEndsApproach(""));   // edgeCase - valide - The reverse of an empty string is also an empty string.
console.log("palindrome_midToEndsApproach7:", palindrome_midToEndsApproach("mm"));   // even - edgeCase - valid

// consolidation refactore
function palindrome_midToEndsApproach_refactored(s) {  // **
    if(s.length === 0) return true;

    isOdd = (s.length % 2) !== 0;  // odd by default

    let midIndex = Math.floor((s.length - 1)/2);    // rembr: w/out (-1) assumes index starts from 1, but (-1) required since it's finding the index and position starts at 0...same way midIndex in BinarySearch is (0 + len-1)/2 and (0 + len)/2
    let startIndex = midIndex;
    let endIndex = isOdd ? midIndex : midIndex + 1;    // all same index since odd

    // if(!isOdd) {
    //     endIndex = midIndex + 1;
    // }

    while (startIndex >= 0 && endIndex <= s.length - 1) {
        if(isOdd && startIndex === endIndex){    // can be removed since doesn't break logic
            startIndex--;
            endIndex++;
            continue;    
        }

        if(s[startIndex] !== s[endIndex]){
            return false;
        }

        startIndex--;
        endIndex++;
    }
    return true;
}

console.log("palindrome_midToEndsApproach_refactored1:", palindrome_midToEndsApproach_refactored("madam"));   // odd - valid
console.log("palindrome_midToEndsApproach_refactored2:", palindrome_midToEndsApproach_refactored("madmm"));   // odd - invalid
console.log("palindrome_midToEndsApproach_refactored3:", palindrome_midToEndsApproach_refactored("baab"));    // even - valid
console.log("palindrome_midToEndsApproach_refactored4:", palindrome_midToEndsApproach_refactored("mbaabn"));    // even - invalid
console.log("palindrome_midToEndsApproach_refactored5:", palindrome_midToEndsApproach_refactored("m"));   // odd - edgeCase - valid
console.log("palindrome_midToEndsApproach_refactored6:", palindrome_midToEndsApproach_refactored(""));   // edgeCase - valide - The reverse of an empty string is also an empty string.
console.log("palindrome_midToEndsApproach_refactored7:", palindrome_midToEndsApproach_refactored("mm"));   // even - edgeCase - valid


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