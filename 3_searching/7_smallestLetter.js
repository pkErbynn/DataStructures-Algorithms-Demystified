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

NB:
- New Phase of Questions where target is not returned earlier or at all or target blocks not considered 
- HERE, "element greater than target" falls beyond the TARGET EQUALITY, ie. target == mid

Same answer code as previous but with these observations:

1. Exact same approach or ceiling of number
2. Ignore target equality check cus question said 'GREATER', not 'equal to' or 'greater or equal to'
3. Letters wrap around

When Binary Search is left to iterate throughout w/out mid equality termination restriction, the start and end pointers converge at the target
...if target is duplicate, they converge at the far-right one by default (prove with one dry test example)
    Pointer positions after loop termination, ie. start > end
    arr = ['c', 'f', 'f', 'f', 'j']...target = 'f'
                          (e)  (s)
*/

function binarySearch_nextGreatestLetter(letters, target){

    let start = 0;
    let end = letters.length - 1;

    while(start <= end){
        
        let midIndex = Math.floor(start + (end - start) / 2);

        /*
        Not needed cus actual goal, is to 'Find the smallest letter in the array that is strictly greater than target.'
        This is not a standard binary search where you return the index of an exact match.
        This wrong: You’re not looking for the letter that equals target — you’re looking for the next greater letter.
            If target === letters[midIndex], it doesn’t tell you anything about the next greater letter, cus greater letter SHOULD BE OUT OF TARGET.
        */
        // if(target === letters[midIndex]) return midIndex;

        /*
            What to be done instead?
            Binary search in this case should:
                •	Keep moving right (start = mid + 1) when target >= letters[mid]
                •	Keep moving left (end = mid - 1) when target < letters[mid]
            Eventually, lands at the position of the smallest letter greater than target, which is always at 'start' — or wraps around with % letters.length.
        
            Pointer positions after loop termination, ie. start > end
            arr = ['c', 'f', 'f', 'f', 'j']...target = 'f'
                                  (e)  (s)
        */
        if(target < letters[midIndex]){
            end = midIndex - 1;
        }
        else {
            start = midIndex + 1;
        }
    }

    // when the target is last element, then the next greatest letter goes round to the first element
    if(start == letters.length)
        return letters[0];

    return letters[start];   // combined: return letters[start % letters.length];   // ceil
}

console.log("binarySearch_nextGreatestLetter:", binarySearch_nextGreatestLetter(["c","f","j"], "a"));
console.log("binarySearch_nextGreatestLetter:", binarySearch_nextGreatestLetter(["c","f","j"], "c"));
console.log("binarySearch_nextGreatestLetter:", binarySearch_nextGreatestLetter(["c","f","j", "k", "l", "m"], "m"));
console.log("binarySearch_nextGreatestLetter:", binarySearch_nextGreatestLetter(["x","x","y","y"], "z"));
console.log("binarySearch_nextGreatestLetter:", binarySearch_nextGreatestLetter(["x","x","y","y"], "x"));
console.log("binarySearch_nextGreatestLetter:", binarySearch_nextGreatestLetter(['c', 'f', 'f', 'f', 'j'], "f"));

// Clue: 
// 90% of "sorted array" questions are solved with BS


/*

DRY TEST RUN:

Init values
Array: ['c', 'f', 'f', 'f', 'j']
target = 'f'
start = 0, 
end = 4

1st Iteration
mid = 0 + (4-0)/2 = 2
letters[mid] = 'f'
target = 'f'
since target == letters[mid], then else block
    start = mid + 1 = 3

2nd Iteration
start = 3
end = 4
mid = 3 + (4-3)/2 = floored = 3
letters[mid] = 'f' again
target = 'f'
since target == letters[mid], then else block
    start = mid + 1 = 4

3rd Iteration
start = 4
end = 4
mid = 4
target = 'f'
letters[mid] = 'j'
since target < letters[mid], go to if branch
    end = mid - 1 = 3

End loop
start = 4
end = 3
start == array length, false!
letters[start] = letters[4] = 'j'

*/


/*
Brute Force:


function binarySearch_nextGreatestLetter(letters, target){

    let start = 0;
    let end = letters.length - 1;

    while(start <= end){
        
        let midIndex = Math.floor(start + (end - start) / 2);

        // THIS logic assumes that the next index after a match is always the next greatest letter
        // Given letters = ['c', 'f', 'j'] and target = 'f'...'j' will be returned which is okay
        // But if there are duplicates letters = ['c', 'f', 'f', 'f', 'j'] and target = 'f'...binary search may land on the first 'f', second 'f', or third 'f'. You can’t just return midIndex + 1 because it may not be the correct next greater letter (and midIndex + 1 might still be 'f').
        if(target === letters[midIndex]) 
            if(target === letters[letters.length - 1])
                return letters[0]

            return letters[midIndex + 1];

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

*/