function betterCompression(s) {
    const freqMap = {};
    let currentChar = '';
    let currentNum = '';
  
    // Iterate through each character in the string
    for (const char of s) {
      if (isNaN(parseInt(char))) {
        // If it's not a number, update the frequency map with the current number
        if (currentChar !== '') {
          freqMap[currentChar] = (freqMap[currentChar] || 0) + parseInt(currentNum);
        }
        currentChar = char;
        currentNum = '';
      } else {
        // If it's a number, append it to the current number string
        currentNum += char;
      }
    }
    // Add the last character and frequency to the map
    if (currentChar !== '') {
      freqMap[currentChar] = (freqMap[currentChar] || 0) + parseInt(currentNum);
    }
  
    // Sort the characters and build the compressed string
    return Object.keys(freqMap)
      .sort()
      .reduce((acc, char) => acc + char + freqMap[char], '');
  }
  
  // Test cases
  console.log(betterCompression('a3c9b2c1')); // 'a3b2c10'
  console.log(betterCompression('a12b56c1')); // 'a12b56c1'
  console.log(betterCompression('a12c56a1b5')); // 'a13b5c56'
  


  function betterCompression2(S) {
    const freqMap = {};
    let char = '';
    let numStr = '';

    // Iterate through each character in the string
    for (let i = 0; i < S.length; i++) {
        if (isNaN(S[i])) { // If the current character is not a number
            if (char) { // If we have a previous character stored
                // Add the frequency to the character in the frequency map
                freqMap[char] = (freqMap[char] || 0) + (numStr ? parseInt(numStr) : 1);
            }
            // Update the current character and reset the number string
            char = S[i];
            numStr = '';
        } else {
            // If the current character is a number, append it to the number string
            numStr += S[i];
        }
    }

    // Add the last character and its frequency to the frequency map
    if (char) {
        freqMap[char] = (freqMap[char] || 0) + (numStr ? parseInt(numStr) : 1);
    }

    // Sort the characters alphabetically and construct the compressed string
    const result = Object.keys(freqMap).sort().reduce((acc, key) => acc + key + freqMap[key], '');

    return result;
}

// Test cases
console.log(betterCompression2('a12b56c1')); // Expected output: a12b56c1
console.log(betterCompression2('a12c56a1b5')); // Expected output: a13b5c56




function betterCompression(s) {
    const freqMap = {};
    let currentChar = s[0];
    let currentNum = '';
  
    for (let i = 1; i < s.length; i++) {
      if (isNaN(s[i])) {
        freqMap[currentChar] = (freqMap[currentChar] || 0) + parseInt(currentNum, 10);
        currentChar = s[i];
        currentNum = '';
      } else {
        currentNum += s[i];
      }
    }
    freqMap[currentChar] = (freqMap[currentChar] || 0) + parseInt(currentNum, 10);
  
    return Object.keys(freqMap).sort().map(char => `${char}${freqMap[char]}`).join('');
  }
  
  // Test cases
  console.log(betterCompression('a3c9b2c1')); // 'a3b2c10'
  console.log(betterCompression('a12b56c1')); // 'a12b56c1'
  console.log(betterCompression('a12c56alb5')); // 'a13b5c56'
  

function betterCompression3(S) {
    const freqMap = {};
    let char = '';
    let numStr = '';

    for (let i = 0; i < S.length; i++) {
        if (isNaN(S[i])) {
            if (char && numStr) {
                freqMap[char] = (freqMap[char] || 0) + parseInt(numStr);
            }
            char = S[i];
            numStr = '';
        } else {
            numStr += S[i];
        }
    }

    // Add the last character and frequency
    if (char && numStr) {
        freqMap[char] = (freqMap[char] || 0) + parseInt(numStr);
    }

    // Sort characters and construct the result
    const sortedChars = Object.keys(freqMap).sort();
    let result = '';
    sortedChars.forEach(char => {
        result += char + freqMap[char];
    });

    return result;
}

// Test the function
console.log(betterCompression3('a12b56c1')); // Expected output: a12b56c1
console.log(betterCompression3('a12c56a1b5')); // Expected output: a13b5c56





function countPalindromes(s) {
    let count = 0;

    // Helper function to check if a substring is a palindrome
    function isPalindrome(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++; // Increment count for each palindrome found
            left--;
            right++;
        }
    }

    // Iterate over each character as potential palindrome centers
    for (let i = 0; i < s.length; i++) {
        // Case 1: Center is a single character
        isPalindrome(i, i);

        // Case 2: Center is between two characters
        isPalindrome(i, i + 1);
    }

    return count;
}

// Test cases
console.log(countPalindromes('aaa')); // Output: 6
console.log(countPalindromes('abccba')); // Output: 9
console.log(countPalindromes('daata')); // Output: 7

