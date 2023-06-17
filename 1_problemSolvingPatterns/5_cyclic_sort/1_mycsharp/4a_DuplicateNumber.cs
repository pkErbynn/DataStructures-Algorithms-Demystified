using System;
namespace _1_mycsharp
{
	public class _a_DuplicateNumber
	{
        /*

		We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
		The array has only one duplicate but it can be repeated multiple times.
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
        public static void FindDuplicateNumber(int[] numbers)
		{
			// for-loop won't workout as index won't move for each element but will move index conditionally, thus, while loop
			//for (int index = 0; index < numbers.Length; index++)
			//{
			//}

			int index = 0;
			while (index < numbers.Length)
			{
				// compare current element and ahead element
				int indexPointer2 = index + 1;
				if (indexPointer2 < numbers.Length &&
                    index < numbers.Length &&
					numbers[index] == numbers[indexPointer2])
				{
					Console.WriteLine("Duplicate Number Quick: " + numbers[index]);
					return;
				}

				int currentNumber = numbers[index];
				if (currentNumber != numbers[currentNumber - 1])
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

			for (int i = 0; i < numbers.Length; i++)
			{
				if (numbers[i] != (i + 1))
				{
					Console.WriteLine("Duplicate Number Long: " + numbers[i]);
					return;
				}
			}
		
		}


        /*
		We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
		The array has some duplicates, find all the duplicate numbers without using any extra space.

		Example 1:

		Input: [3, 4, 4, 5, 5]
		Output: [4, 5]

		Example 2:

		Input: [5, 4, 7, 2, 3, 5, 3]
		Output: [3, 5]
		*/
        public static void FindDuplicateNumbers(int[] numbers)
        {
            int index = 0;
            while (index < numbers.Length)
            {
                int currentNumber = numbers[index];
                if (currentNumber != numbers[currentNumber - 1])
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

			List<int> duplicates = new List<int>();
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] != (i + 1))
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
    }
}

