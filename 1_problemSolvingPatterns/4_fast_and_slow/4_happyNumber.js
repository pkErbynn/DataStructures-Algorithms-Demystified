
/*
Problem Statement #
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’.
All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.


Examples:

NB: squaring each sum digit again on the next step

Happy Numbers:

23: 
2^2 + 3^2 = 13, 
1^2 + 3^2 = 10, 
1^2 + 0^2 = 1, 

7: 
7^2 = 49, 
4^2 + 9^2 = 97, 
9^2 + 7^2 = 130, 
1^2 + 3^2 + 0^2 = 10, 
1^2 + 0^2 = 1

100: 
1^2 + 0^2 + 0^2 = 1 

Not-Happy Numbers:

12: 
1^2 + 2^2 = 5, 
5^2 = 25, 
2^2 + 5^2 = 29, 
2^2 + 9^2 = 85, 
8^2 + 5^2 = 89, 
8^2 + 9^2 = 145, 
1^2 + 4^2 + 5^2 = 42, 
4^2 + 2^2 = 20, 
2^2 + 0^2 = 4
4^2​​  = 16
1^2 + 6^2 = 37
3^2 + 7^2 = 9 + 49 = 58
5^2 + 8^2 = 25 + 64 = 89
(leads us back to step ‘8^2 + 5^2 = 89’ as the number becomes equal to ‘89’, this means that we can never reach ‘1’, therefore, ‘12’ is not a happy number.)


Solution #
The process, defined above, to find out if a number is a happy number or not, always ends in a cycle. 
If the number is a happy number, the process will be meet in a cycle on number ‘1,’ and 
if the number is not a happy number then the process will be stuck in a cycle on a number which is not '1'. 

As we saw in Example-2 while determining if ‘12’ is a happy number or not, 
our process will get stuck in a cycle with the following numbers: 89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 37 -> 58 -> 89

We saw in the LinkedList Cycle problem that we can use the Fast & Slow pointers method to find a cycle among a set of elements. 
As we have described above, each number will definitely have a cycle. 
Therefore, we will use the same fast & slow pointer strategy to find the cycle and once the cycle is found, 
we will see if the cycle is stuck on number ‘1’ to find out if the number is happy or not.


*/


const isHappyNumber = function(num){
    if(!num) return false;

    // let sum = calculateSumOfDigitSquare(num);

    let slowPointer = num;
    let fastPointer =  num;    // 2 steps ahead on the sum

    while(fastPointer > 0) {    // while positive number...in object, while(x != null)...in int, while(x > 0)...
        slowPointer = calculateSumOfDigitSquare(slowPointer);   // 1 step move on the sum
        fastPointer = calculateSumOfDigitSquare(calculateSumOfDigitSquare(fastPointer));    // 2-step move on the sum

        if(slowPointer === fastPointer && slowPointer === 1){
            return true;
        }
        if(slowPointer === fastPointer && slowPointer !== 1){
            return false;
        }

        // OR IN SHORT,
        // if(slowPointer === fastPointer){
        //     return slowPointer === 1;
        // }
    }

    return false;
}

const calculateSumOfDigitSquare = function(num){
    let sum = 0;

    while(num > 0){
        let lastDigit = num % 10;
        let digitSquared = lastDigit * lastDigit;
        sum = sum + digitSquared;

        num = Math.floor(num / 10); // update num to keep loopp updateed...23 -> 2.3 -> 2...cut the last processed digit off...
    }

    return sum;

    // nb: eg: 123
    // 1. get last digit, 3. 
    // 2. square and store it in 'sum'
    // 3. next, chop off the last processed digit from the number with floor(num/10), 12.3 -> 12
    // 4. pass the chopped number on to next iteration, and repeat #1
}

console.log("sum:", isHappyNumber(23));
console.log("sum:", isHappyNumber(12));
console.log("sum:", isHappyNumber(100));

