/*

EASY

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

*/


/*
=== Brute force: from basic intuition

Sqrt(4) = 2 => 2 * 2 = 25
Sqrt(9) = 3 => 3 * 3 = 9
Sqrt(28) = 5.29 = 5 floored => 5 * 5 = 25 <= 28
    1 X 1 = 1
    2 X 2 = 4
    3 X 3 = 9
    4 X 4 = 16
    5 X 5 = 25
    6 X 6 = 36 => No. Since 36 > 28, then 6 can't be a possible ans

- Iterate from 1 to the num(eg. 25), multiply current iterator num to itself 
- and if result equal num(eg. 25), then current iterator is the answer
- and if result is greater than the num(eg. 25) then return previous iterator value as answer
- Time Complexity = O(n)
*/
function squareRoot_bruteForce(number) {
    let possibleAns = 1; 

    for(let i = 1; i <= number; i++){
        let multiplied = i * i;

        if(multiplied <= number){
            possibleAns = i;    // posible ans while within
        }
        else{
            break;     // returns prev if greater
        }
    }

    return possibleAns;
}

console.log("squareRoot_bruteForce:", squareRoot_bruteForce(9));
console.log("squareRoot_bruteForce:", squareRoot_bruteForce(28));
// Time Complexity = ~O(n)


/*
=== Optimized: using Binary Search
Sqrt(28) = 5 floored => 5 * 5 = 25 <= 28

target = 28 input number

*/