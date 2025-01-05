

////////
let n = 10; // Set 'n' to any value
let x = 0;
let y = 0;


let iCounter = 0; // Counter for the outer loop
let jCounter = 0; // Counter for the inner loop
let yCounter = 0; // Counter for the "y = y + 1;" statement

let analyze = function(n) {
    for (let i = n; i >= 1; i--) {
        x = x + 1;
        iCounter++; // Increment outer loop counter

        for (let j = n; j >= i; j--) {
            y = y + 1;
            jCounter++; // Increment inner loop counter
            yCounter++; // Increment "y = y + 1;" statement counter
        }
    }

    console.log("x:", x);
    console.log("y:", y);
    console.log("Outer loop executed:", iCounter, "times");
    console.log("Inner loop executed:", jCounter, "times");
    console.log("\"y = y + 1;\" executed:", yCounter, "times");
};

analyze(n);

///////////////

n = 10; // Example size, you can set 'n' to any desired value
x = 0;

let statementExecutionCount = 0;

let analyze2 = function(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            for (let k = 1; k <= j; k++) {
                x = x + 1; // Placeholder for the delta operation
                statementExecutionCount++;
            }
        }
    }

    console.log("x:", x);
    console.log("Statement {4} executed:", statementExecutionCount, "times");

    // Calculate using the sum of squares formula
    let calculatedExecutionCount = ( n * (n + 1) * (n + 2) ) / 6;
    console.log("Calculated using formula:", calculatedExecutionCount);
};

analyze2(n);

/////////////////////////////////


// let n = 122; // You can set 'n' to any desired value
// let i = 1;
// let executionCount = 0;

// let analyze2 = function(n) {
//     while (i < n) {
//         i = i * 2; // Doubling i each time the condition is true
//         executionCount++; // Incrementing the count each time the loop runs
//     }
    
//     console.log("analyze2: Statement {5} executed:", executionCount, "times");
    
// };

// analyze2(n);


///////////////////////////////

function f(m, n) {
    let sum = m; // Reassigning m to sum
    let num = n; // Reassigning n to num

    if (sum === 1) {
        return 1; // Only one way to partition 1
    } else if (num === 1) {
        return 1; // Only one way to use 1's to sum up to any number
    } else if (sum < num) {
        return f(sum, sum); // If sum is less than num, reduce num to sum
    } else if (sum === num) {
        return 1 + f(sum-1, num - 1); // One way to use num itself, plus all the ways without using num
    } else {
        return f(sum, num - 1) + f(sum - num, num); // Exclude num and include at least one num
    }
}

// Example to test the function
let result = f(5, 3);
console.log("The number of ways to partition 5 using numbers up to 3 is:", result);

result = f(6, 4);
console.log("The number of ways to partition 6 using numbers up to 4 is:", result);

/*
4, 2
4, 1, 1
3, 3
3, 2, 1
3, 1, 1, 1
2, 2, 2
2, 2, 1, 1
2, 1, 1, 1, 1
1, 1, 1, 1, 1, 1
*/

function f(m, n, prefix = "") {
    if (m === 0) {
        console.log(prefix.slice(0, -2)); // Print the combination, removing the last ", "
        return 1;
    } else if (n === 0 || m < 0) {
        return 0; // No valid combination or negative sum
    } else {
        // Calculate partitions including n and excluding n
        return f(m, n - 1, prefix) + f(m - n, n, prefix + n + ", ");
    }
}



function reverseArray(arr) {
    // Loop through half the array
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        // Swap the elements
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr; // Return the reversed array
}

// Example usage
let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));  // Output: [5, 4, 3, 2, 1]



