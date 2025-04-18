// Repeated characters string encoding (aabbbc -> a2b3c)

function encodeString(str) {
    if(str.length === 0) return '';

    let encodedStr = [];
    let count = 1;

    for(let i = 1; i <= str.length; i++){
    
        // Check if the current character is the same as the previous character
        if(str[i] === str[i - 1]){ 
            count++;
        }
        
        // If the current character is different from the previous one, it means the sequence has ended.
        else{
            encodedStr.push(str[i - 1])     // Add the previous character to the encoded string.

            if(count > 1) {
                encodedStr.push(count)      // If the count is greater than 1, append the count next to the character.
            }

            count = 1;  // Reset the count to 1 because we're starting a new sequence.
        }
    }
    
    return encodedStr.join('');
}

console.log("encodeString:", encodeString("aabbbc")); // Output: "a2b3c"

var countBinarySubstrings = function(s) {
    // Step 1: Group the string into blocks of consecutive 0's and 1's
    let n = s.length;
    let groups = [];
    let groupIndex = 0;
    
    // Group consecutive 0's and 1's
    for (let i = 0; i < n; i++) {
        if (i === 0 || s[i] !== s[i - 1]) {
            groups[groupIndex++] = 1;
        } else {
            groups[groupIndex - 1]++;
        }
    }
    
    // Step 2: Count valid substrings between consecutive blocks
    let result = 0;
    for (let i = 1; i < groupIndex; i++) {
        result += Math.min(groups[i - 1], groups[i]);
    }
    
    return result;
};

// Test the function
console.log(countBinarySubstrings("00110011")); // Output: 6
console.log(countBinarySubstrings("10101"));    // Output: 4