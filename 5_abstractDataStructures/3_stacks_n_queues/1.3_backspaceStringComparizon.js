/*

Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.

Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.

Example 3:

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.

Example 4:

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.


====
Can solved using Stack, cus 2-pointers approach will be nested
*/


const compareStrings = (string1, string2) => {
    if(string1.length < 1 || string2.length < 1) return false;

    const processedString1 = processString(string1);
    const processedString2 = processString(string2);
    // console.log(processedString1, processedString2);
    
    return processedString1 === processedString2;
}

const processString = (stringInput) => {
    stringInput = stringInput.toLowerCase();
    let stack = [];

    for (const char of stringInput) {
        
        if(char !== '#'){
            stack.push(char);
        }
        else if(char === '#'){
            if(stack.length > 0){   // pop only when item dey
                stack.pop();
            }
        }
    }
    return stack.join('');
}

console.log("Same1?:", compareStrings("xy#z", "xzz#"));
console.log("Same2?:", compareStrings("xp#", "xyz##"));
console.log("Same3?:", compareStrings("xywrrmp", "xywrrmu#p"));
console.log("Same4?:", compareStrings("xy#z", "xyz#"));         // Output: false
console.log("Same5?:", compareStrings("#xy#z", "##xy#z#z"));
