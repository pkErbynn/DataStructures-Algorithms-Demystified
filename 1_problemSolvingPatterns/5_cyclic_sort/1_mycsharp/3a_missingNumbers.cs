/*

We are given an unsorted array containing numbers taken from the range 1 to ‘n’. 
The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

Example 1:

Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

Example 2:

Input: [2, 4, 1, 2]
Output: 3

Example 3:

Input: [2, 3, 2, 1]
Output: 4

*/

class MissingNumbers
{
    public static void FindMissingNumbers(int[] numbers)
    {
        int startIndex = 0;
        while (startIndex < numbers.Length)
        {
            var currentNumber = numbers[startIndex];

            if(currentNumber != numbers[currentNumber - 1])     // (curNum - 1) as index since the lowest number in the array is 1 not 0
            {
                // swap
                var temp = numbers[startIndex];
                numbers[startIndex] = numbers[currentNumber - 1];
                numbers[currentNumber - 1] = temp;
            }
            else
            {
                startIndex++;
            }
        }
        // numbers.ToList().ForEach(System.Console.WriteLine);

        List<int> results = new List<int>();
        for (int i = 0; i < numbers.Length; i++)
        {
            if (numbers[i] != (i + 1))  // compured to (i + 1) cus input array values starts from 1
            {
                results.Add(i + 1);     // missing numbers means getting INDEXes not the VALUEs
            }

        }

        var strResult = String.Join(", ", results);
        System.Console.WriteLine($"Missing Numbers: {strResult}");
    }
}


/*
NB:
- Finding missing numbers means getting INDEXes not the VALUEs

Complexity: 
- Time complexity: O(n)
- Space complexity: Constant space O(1), ignoring the space required for the output array, the algorithm runs in .

 */