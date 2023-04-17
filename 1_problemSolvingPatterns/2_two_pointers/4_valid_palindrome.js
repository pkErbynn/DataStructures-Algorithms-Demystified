/*
Write a function that takes a string s as input and checks whether it’s a palindrome or not.
*/

function isPalindrome(s) {
    // let endIndex = s.length - 1;
    // for(let startIndex=0; startIndex<=endIndex; startIndex++){
    //     if(s[startIndex] != s[endIndex]){
    //         return false;
    //     }
    //     endIndex--;
    // }
    // return true;

    let startIndex = 0;
    let endIndex = s.length-1;

    while(startIndex <= endIndex){
        if(s[startIndex] != s[endIndex]){
            return false;
        }
        endIndex--;
        startIndex++;
    }

    return true;
}
