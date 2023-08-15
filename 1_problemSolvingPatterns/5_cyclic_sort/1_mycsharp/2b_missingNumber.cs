/*
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1], 
Output: 2

Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7

=== why use cyclic sort
- input range from 0 to n
- array size is of n

*/


class MissingNumber
{
    public static int findMissingNum(int[] numbers)
    {
        int index = 0;
        while(index < numbers.Length){
            int currentNumber = numbers[index];
            // check if a number used as index, exists within array range
            if(currentNumber < numbers.Length && currentNumber != numbers[currentNumber])
            {
                (numbers[index], numbers[currentNumber]) = (numbers[currentNumber], numbers[index]);
            }
            else
            {
                index += 1;
            }
        }

        for(int i = 0; i < numbers.Length; i++)
        {
            if(numbers[i] != i) return i;
        }
        return -1;
    }
}