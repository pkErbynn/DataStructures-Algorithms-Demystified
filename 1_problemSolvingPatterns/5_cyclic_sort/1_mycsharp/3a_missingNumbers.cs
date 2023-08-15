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
        int index = 0;
        while (index < numbers.Length)
        {
            var currentNumber = numbers[index];

            if(currentNumber != numbers[currentNumber - 1])
            {
                var temp = numbers[index];
                numbers[index] = numbers[currentNumber - 1];
                numbers[currentNumber - 1] = temp;
            }
            else
            {
                index++;
            }
        }
        // numbers.ToList().ForEach(System.Console.WriteLine);

        List<int> results = new List<int>();
        for (int i = 0; i < numbers.Length; i++)
        {
            if (numbers[i] != (i + 1))
            {
                results.Add(i + 1);
            }

        }

        var strResult = String.Join(", ", results);
        System.Console.WriteLine($"Missing Numbers: {strResult}");
    }
}


/*
 * 
Time complexity:
O(n).

Space complexity:
Ignoring the space required for the output array, the algorithm runs in constant space O(1).

 */