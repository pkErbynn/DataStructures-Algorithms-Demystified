/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. 
There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target.
If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].


==== 

Same answer code as previous with these observations:

1. Exact same approach or ceiling of number
2. Ignore target equality check cus question said, cus question didn't say greater or equal to
3. Letters wrap around

*/

function binarySearch_nextGreatestLetter(letters, target){

    let start = 0;
    let end = letters.length - 1;

    while(start <= end){
        
        let midIndex = Math.floor(start + (end - start) / 2);

        // if(target === letters[midIndex]) return midIndex;   // comment this

        if(target < letters[midIndex]){
            end = midIndex - 1;
        }
        else {
            start = midIndex + 1;
        }
    }

    // when start goes beyond the end of the array
    // means the greatest next letter falls out of bound so you wrap around and return the first letter
    if(start == letters.length)
        return letters[0];

    return letters[start];   
    // combined: return letters[start % letters.length];
}

console.log("binarySearch_nextGreatestLetter:", binarySearch_nextGreatestLetter(["c","f","j"], "a"));
console.log("binarySearch_nextGreatestLetter:", binarySearch_nextGreatestLetter(["c","f","j"], "c"));
console.log("binarySearch_nextGreatestLetter:", binarySearch_nextGreatestLetter(["x","x","y","y"], "z"));

// Clue: 
// 90% of "sorted array" questions are solved with BS
