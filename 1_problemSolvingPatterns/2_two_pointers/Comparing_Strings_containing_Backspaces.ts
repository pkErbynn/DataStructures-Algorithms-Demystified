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
Can solved using Stack, not 2-pointers approach
*/


const compareStrings = (string1: string, string2: string): boolean => {
    if(string1.length < 1 || string2.length < 1) return false;

    const processedString1: string = processString(string1);
    const processedString2: string = processString(string2);
    // console.log(processedString1, processedString2);
    
    return processedString1 === processedString2;
}

const processString = (stringInput: string): string => {
    stringInput = stringInput.toLowerCase();
    let stack: string[] = [];

    for (const char of stringInput) {
        let isValidChar: boolean = char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
        
        if(isValidChar && char !== '#'){
            stack.push(char);
        } 
        else if(char === '#'){
            stack.pop();
        }
    }
    return stack.join('');
}

console.log("Same ?:", compareStrings("xy#z", "xzz#"));
console.log("Same2 ?:", compareStrings("xp#", "xyz##"));
console.log("Same3 ?:", compareStrings("xywrrmp", "xywrrmu#p"));
console.log("Same3 ?:", compareStrings("xy#z", "xyz#"));         // Output: false
