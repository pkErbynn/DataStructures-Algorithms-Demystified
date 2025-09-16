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

Sqrt(4) = 2 => 2 * 2 = 25
Sqrt(9) = 3 => 3 * 3 = 9
Sqrt(25) = 5 => 5 * 5 = 25

Brute force:
- Iterate from 1 to the num(eg. 25), multiply current iterator num to itself 
- and if result equal num(eg. 25), then current iterator is the answer
- Time Complexity = O(n)

*/
function squareRoot(number) {
    
}