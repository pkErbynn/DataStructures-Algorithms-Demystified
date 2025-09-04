/*

QUESTION:

Hermione is preparing a cheat-sheet for her final exam in Potions class.
To create a potion, one must combine ingredients in a specific order, any of which may be repeated.

As an example, consider the following potion which uses 4 distinct ingredients (A, B, C, D) in 11 steps:
A, B, A, B, C, A, B, A, B, C, D

Hermione realizes she can save tremendous space on her cheat-sheet by introducing a special instruction, *, which means "repeat from the beginning".
Using these optimizations, Hermione is able to encode the potion above using only 6 characters:
A, B, *, C, *, D

Task:
Write a function that takes as input an un-encoded potion and returns the minimum number of characters required to encode the potion on Hermione's cheat-sheet.


NOTE:
1st * = "A,B"...matches A,B from begining
2st * = "A,B,A,B,C"...matches A,B,A,B,C from begining to this "A,B,A,B,C"

You can only use * when:
What’s coming next matches exactly the full string written so far — from the very beginning to the current point.

*/


function minimalSteps(ingredients) {
    if (!ingredients || ingredients.length === 0) return 0;

    let encodedLength = 0;
    let i = 0;

    while (i < ingredients.length) {
        let prefix = ingredients.slice(0, i);   // extracts from start to end - 1 index as prefix
        let remaining = ingredients.slice(i, i + i); // next prefix with same size

        // Check if the prefix matches the upcoming characters
        if (prefix.length > 0 && prefix === remaining) {
            // Valid to use '*'
            encodedLength += 1; // count '*' as one character
            i += prefix.length; // skip over the repeated part
            // i += i;
            
        } else {
            // No valid repeat, just add character
            encodedLength += 1;
            i += 1;
        }
    }

    return encodedLength;
}


// testing
function doTestsPass() {
    console.log("test print1: " + minimalSteps("ABCDABCE"))
    // console.log("test print2: " + this.minimalSteps("ABCABCE"))
    return minimalSteps("ABCDABCE") === 8 &&
           minimalSteps("ABCABCE") === 5;
  }

if (doTestsPass()) {
  console.log("All tests passed");
} else {
  console.log("Some tests failed");
}


/**
 * Function to compute the minimum encoded length
 * for Hermione's potion sequence.
 * 
 * @param {string[]} potion - array of ingredients
 * @returns {number} - minimum encoding length
 */
function minEncodedLength(potion) {
    const n = potion.length;
    const dp = new Array(n + 1).fill(Infinity); 
    
    // Base case: no characters, no encoding
    dp[0] = 0; 
    
    for (let i = 1; i <= n; i++) {
        // Worst case: add current ingredient directly
        dp[i] = dp[i - 1] + 1;

        // Check if potion[0..i-1] can be formed by repeating a prefix
        for (let len = 1; len <= i / 2; len++) {
            if (i % len === 0) {
                let valid = true;
                for (let j = len; j < i; j++) {
                    if (potion[j] !== potion[j - len]) {
                        valid = false;
                        break;
                    }
                }
                if (valid) {
                    dp[i] = Math.min(dp[i], dp[len] + 1); // replace repetition with '*'
                }
            }
        }
    }

    return dp[n];
}

// Example usage:
console.log(minEncodedLength(["A","B","A","B","C","A","B","A","B","C","D"])); // Output: 6
console.log(minEncodedLength(["A","A","A","A"])); // Output: 2 (A, *)
console.log(minEncodedLength(["X","Y","Z"])); // Output: 3 (no repetition)
console.log(minEncodedLength("ABCABCE")); // Output: 3 (no repetition)
