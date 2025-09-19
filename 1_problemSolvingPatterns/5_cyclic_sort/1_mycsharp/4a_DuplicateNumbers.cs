/*
 * Missing Number and Missing Numbers problem-solution all contained in same class
 * */

using System;
namespace _1_mycsharp
{
	public class _a_DuplicateNumber
	{
        /*

		We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
		The array has only one DUPLICATE but it can be repeated multiple times.
		Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

		Example 1:

		Input: [1, 4, 4, 3, 2]
		Output: 4

		Example 2:

		Input: [2, 1, 3, 3, 5, 4]
		Output: 3

		Example 3:

		Input: [2, 4, 1, 4, 4]
		Output: 4

		*/

        public static int FindDistinctDuplicateNumber(int[] numbers)
		{
			// for-loop won't workout as index won't move for each element but will move index conditionally, thus, while loop
			//for (int index = 0; index < numbers.Length; index++)
			//{
			//}

			int startIndex = 0;
			while (startIndex < numbers.Length)
			{
				int currentNumber = numbers[startIndex];
				int rightNumber = numbers[currentNumber - 1];

				if (currentNumber != rightNumber)
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

			// if any number is not in its right index position, then that's the duplicate
			for (int i = 0; i < numbers.Length; i++)
			{
				if (numbers[i] != (i + 1))
				{
					Console.WriteLine("Duplicate Number at any place: " + numbers[i]);	// duplicate number mean getting the value and not the index unlike the "missing number"
					return numbers[i];
				}
			}
		
		}


        /*
		Question 2:

		We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
		The array has some DUPLICATES, find all the duplicate numbers without using any extra space.

		Example 1:

		Input: [3, 4, 4, 5, 5]
		Output: [4, 5]

		Example 2:

		Input: [5, 4, 7, 2, 3, 5, 3]
		Output: [3, 5]
		*/
        public static void FindDuplicateNumbers(int[] numbers)
        {
            int startIndex = 0;
            while (startIndex < numbers.Length)
            {
                int currentNumber = numbers[startIndex];
				int rightNumber = numbers[startIndex - 1];

                if (currentNumber != rightNumber)
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

			List<int> duplicates = new List<int>();

            for (int i = 0; i < numbers.Length; i++)
            {
				// if any number is not in its right index position, then that's the duplicate
                if (numbers[i] != (i + 1))	// compared to (i + 1) cus input array values starts from 1
                {
					duplicates.Add(numbers[i]);
                }
            }

			var strResults = String.Join(", ", duplicates);
			Console.WriteLine("Duplicate Numbers: " + strResults);
        }

		/*
		TC: O(n)
		SC: O(1) ignoring the output duplicate space
		*/


		/*
		 * What if to find the duplicate number in an array without a specific range
		*/
		public static void FindDuplicateNumber_NoRange(int[] numbers)
		{
			HashSet<int> numSet = new HashSet<int>();
			foreach (var number in numbers)
			{
				if (numSet.Contains(number))
				{
					Console.WriteLine($"Duplicate (NoRange): {number}");
					return;
				}
				numSet.Add(number);
			}
		}


        /*
		We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
		The array originally contained all the numbers from 1 to ‘n’, but due to a data error,
		one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

		Example 1:

		Input: [3, 1, 2, 5, 2]
		Output: [2, 4]
		Explanation: '2' is duplicated and '4' is missing.
		
		Example 2:

		Input: [3, 1, 2, 3, 6, 4]
		Output: [3, 5]
		Explanation: '3' is duplicated and '5' is missing.

		Solution #
		This problem follows the Cyclic Sort pattern and shares similarities with Find all Duplicate Numbers.
		Following a similar approach, we will place each number at its correct index. Once we are done with the cyclic sort,
		we will iterate through the array to find the number that is not at the correct index.
		Since only one number got corrupted, the number at the wrong index is the duplicated number and the index itself represents the missing number.
		*/
        public static void FindTheCorruptPair(int[] numbers)
		{
			int indexPointer = 0;
			while (indexPointer < numbers.Length)
			{
				var currentValue = numbers[indexPointer];
				var rightValue = numbers[currentValue - 1];

				if (currentValue != rightValue)
				{
					// swap
					var temp = numbers[indexPointer];
					numbers[indexPointer] = numbers[currentValue - 1];
					numbers[currentValue - 1] = temp;
				}
				else
				{
                    indexPointer++;
                }
            }

			// if each value is not place at its (index + 1), then its duplicate + missing number can be determined
			for (int i = 0; i < numbers.Length; i++)
			{
				if (numbers[i] != (i + 1))
				{
                    Console.WriteLine($"Corrupt Pair: [ {numbers[i]}, {(i + 1)} ]");
                    return;
				}
			}
		}
    }
}



/******************* NB ***********************************************************

Missing Number: gotten from array INDEX after conplete cyclic sort
Duplicate Number: gotten from array VALUE after conplete cyclic sort

===

Basic Core Algo: 
1. Swap numbers to sort
2. Then, loop through to get misplaced element/index


*/