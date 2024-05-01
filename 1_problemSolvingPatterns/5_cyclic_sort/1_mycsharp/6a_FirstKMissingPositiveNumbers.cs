/*
[Hard but Starred]
Given an unsorted array containing numbers and a number ‘k’, 
find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.

Example 2:

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.

Example 3:

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.


=== Solution
- Sort numbers in-place
- Find missing numbers using their indexes
- Also, separately keep the actual values that are in incorrect positions, so that when the K length is not met yet and want to find missing numbers beyond the array, it can be used for checking
- Find mising numbers using indexes beyond the array
*/


using System;
namespace _1_mycsharp
{
	public class _a_FirstKMissingPositiveNumbers
	{
		/// <summary>
		/// Find the first K positive missing numbers
		/// </summary>
		/// <param name="numbers">input arrays</param>
		/// <param name="k">number of missing numbers</param>
		public static void FindTheFirstKPositiveMissingNumbers(int[] numbers, int k)
		{
			int indexPointer = 0;
			while (indexPointer < numbers.Length)
			{
				// place numbers at their right locations
				var currentNumberAndIndex = numbers[indexPointer];
				if (currentNumberAndIndex > 0 && currentNumberAndIndex <= numbers.Length && currentNumberAndIndex != numbers[currentNumberAndIndex - 1])
				{
					// swap
					var temp = numbers[indexPointer];
					numbers[indexPointer] = numbers[currentNumberAndIndex - 1];
					numbers[currentNumberAndIndex - 1] = temp;
				}
				else
				{
					indexPointer++;
				}
			}
			Console.WriteLine($"Sorted numbers: {String.Join(", ", numbers)}");

			List<int> missingNumbers = new List<int>(); // using stored index
			List<int> extraNumbersOutOfRange = new List<int>();  // using actual corresponding values of missing numbers, that are out of 1-n range

			for (int i = 0; i < numbers.Length; i++)
			{
				// if missing number is not up to K, and
				// if a number is not placed in their right slot,
				// store their missing number (using index + 1) and current value (using value)
				if (missingNumbers.Count < k && numbers[i] != (i + 1))
				{
					missingNumbers.Add(i + 1);
					extraNumbersOutOfRange.Add(numbers[i]);	// store out of range numbers cus will be used to determine whether a number (that is beyond array bound) is missed or not
				}
			}
			Console.WriteLine($"First K +ve missin' numbers (init): {String.Join(", ", missingNumbers)}...Extra Numbers: {String.Join(", ", extraNumbersOutOfRange)}");


			// fill rest of missing numbers if not up to the expected K number
			// start outside the input array range boarder by increasing its length by 1
			int increamentalIndex = 1;
			while (missingNumbers.Count < k)
			{
				int missingNumberBeyondArrayBoarder = numbers.Length + increamentalIndex;

				// before marking as missedNumber, check whether it's found in the outOfRange list, if found, skip, it not a missing number since it's found in the original input array
				if (extraNumbersOutOfRange.Contains(missingNumberBeyondArrayBoarder))
				{
                    increamentalIndex += 1;
                    continue; // to next loop
				}
				missingNumbers.Add(missingNumberBeyondArrayBoarder);
                increamentalIndex += 1;
            }
            Console.WriteLine($"First K +ve missin' numbers (final): {String.Join(", ", missingNumbers)}");
		}


        /// <summary>
        /// Improve to make it more efficient by introducing Set data structure + positive-check when populating out-of-range extra numbers
		/// Clean comments
		/// Extra Numbers console differs and optimised
        /// </summary>
        /// <param name="numbers"></param>
        /// <param name="k"></param>
        public static void FindTheFirstKPositiveMissingNumbersImproved(int[] numbers, int k)
        {
            int indexPointer = 0;
            while (indexPointer < numbers.Length)
            {
                var currentNumberAndIndex = numbers[indexPointer];
                if (currentNumberAndIndex > 0 && currentNumberAndIndex <= numbers.Length && currentNumberAndIndex != numbers[currentNumberAndIndex - 1])
                {
                    // swap
                    var temp = numbers[indexPointer];
                    numbers[indexPointer] = numbers[currentNumberAndIndex - 1];
                    numbers[currentNumberAndIndex - 1] = temp;
                }
                else
                {
                    indexPointer++;
                }
            }
            Console.WriteLine($"Sorted numbers: {String.Join(", ", numbers)}");

            List<int> missingNumbers = new List<int>();
            HashSet<int> extraNumbersOutOfRange = new HashSet<int>();   // to prevent duplicate

            for (int i = 0; i < numbers.Length; i++)
            {
                if (missingNumbers.Count < k && numbers[i] != (i + 1))
                {
                    missingNumbers.Add(i + 1);
                    if (numbers[i] > 0)		// keep only positives
                    {
                        extraNumbersOutOfRange.Add(numbers[i]);
                    }
                }
            }
            Console.WriteLine($"First K +ve missin' numbers (init): {String.Join(", ", missingNumbers)}...Extra Numbers: {String.Join(", ", extraNumbersOutOfRange)}");

            int increamentalIndex = 1;
            while (missingNumbers.Count < k)
            {
                int missingNumberBeyondArrayBoarder = numbers.Length + increamentalIndex;

				if (!extraNumbersOutOfRange.Contains(missingNumberBeyondArrayBoarder))
                {
                    missingNumbers.Add(missingNumberBeyondArrayBoarder);
                }
                increamentalIndex += 1;
            }
            Console.WriteLine($"First K +ve missin' numbers (final): {String.Join(", ", missingNumbers)}");
        }

    }
}


/*

Time complexity #
The time complexity is O(n+k), as the last two for loops will run for O(n) and O(k) times respectively.

Space complexity #
The algorithm needs O(k) space to store the 'extraNumbers'

*/